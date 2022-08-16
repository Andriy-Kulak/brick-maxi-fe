import { useState, useEffect } from 'react'
import { BigNumberish, ethers } from 'ethers'
import { useToast } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify'
import { Nav, ArtistSection } from '../components'

import { artistSection } from '../content'
import TokenSection from '../components/TokenSection'
import HowItWorksSection from '../components/HowItWorksSection'
import LandingSection from '../components/LandingSection'
import FaqSection from '../components/FaqSection'
import { contract, selectedNet } from '../utils/web3'
import { parseEther } from 'ethers/lib/utils'

import 'react-toastify/dist/ReactToastify.css'
import { customToast } from '../components/utils/customToast'
import errorCapture from '../utils/web3/errorCapture'
import useConnect from '../utils/hooks/useConnect'

export default function Home() {
  // const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null)
  const [isMintLoading, setMintLoading] = useState(false)
  const [isEth, setEth] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [ci, setContract] = useState<{
    contract: ethers.Contract | null
    signer: ethers.Signer | null
    provider: ethers.providers.Web3Provider | null
    address: string
  }>({
    contract: null,
    signer: null,
    provider: null,
    address: '',
  })

  const [mintValues, setMintValues] = useState<{
    apePrice: null | string
    ethPrice: null | string
    tokensLeft: null | number
    maxSupply: null | number
  }>({
    apePrice: null,
    ethPrice: null,
    maxSupply: null,
    tokensLeft: null,
  })

  const [connectWallet, disconnect] = useConnect({ setContract })
  const chakraToast = useToast()

  useEffect(() => {
    ;(async () => {
      const [apePriceRaw, ethPriceRaw, tokensLeft, maxSupply] =
        await Promise.all([
          contract.PRICE_APE(),
          contract.PRICE_ETH(),
          contract.getTokensLeft(),
          contract.CURRENT_MAX_SUPPLY(),
        ])

      const apePrice = ethers.utils.formatEther(apePriceRaw)
      const ethPrice = ethers.utils.formatEther(ethPriceRaw)

      setMintValues({
        apePrice,
        ethPrice,
        tokensLeft,
        maxSupply,
      })

      contract.on('MintSuccess', async () => {
        const tokensLeft = await contract.getTokensLeft()
        setMintValues({
          apePrice,
          ethPrice,
          tokensLeft,
          maxSupply,
        })
      })
    })()
  }, [])

  const onMint = async () => {
    if (ci.contract === null || ci.signer === null || ci.provider === null) {
      toast.error('Please sign in before minting!')
    } else {
      const { chainId } = await ci.provider.getNetwork()
      if (chainId !== selectedNet.chainId) {
        toast.error(
          `App contract is on ${selectedNet.name}. Please switch to it before minting`
        )
      }
      try {
        setMintLoading(true)
        let mintResp
        if (isEth) {
          const price = String(quantity * 0.02)
          mintResp = await ci.contract
            .connect(ci.signer)
            .mintInEth(quantity, { value: parseEther(price) })
        } else {
          mintResp = await ci.contract.connect(ci.signer).mintInApe()
        }
        if (!mintResp) {
          throw Error('There is a minting error...')
        }

        customToast({
          text: 'Transaction is pending...',
          txn: mintResp.hash,
          toast: chakraToast,
        })
        toast.info(
          `Trasnaction is minting on: https://${selectedNet.name}.etherscan.io/tx/${mintResp.hash}`
        )

        const receipt = await mintResp.wait()

        toast.success(`SUCCESS!!!!: ${mintResp.hash}`)
        customToast({
          text: 'Success',
          txn: mintResp.hash,
          toast: chakraToast,
        })
        console.log('success receipt', receipt)
        setMintLoading(false)
      } catch (e: any) {
        setMintLoading(false)
        console.error('ERROR minting ==>', e)

        errorCapture({ message: e.message, toast })
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <Nav
        connectWallet={connectWallet}
        address={ci.address}
        disconnect={disconnect}
      />
      <LandingSection />
      <TokenSection
        mintValues={mintValues}
        isEth={isEth}
        currencySwitch={() => setEth(!isEth)}
        mint={() => onMint()}
        isMintLoading={isMintLoading}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <HowItWorksSection />
      <ArtistSection content={artistSection} />
      <FaqSection />
    </>
  )
}
