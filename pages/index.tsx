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
import {
  contract,
  contractAddress,
  erc20ApproveAbi,
  selectedNet,
} from '../utils/web3'
import { parseEther } from 'ethers/lib/utils'

import 'react-toastify/dist/ReactToastify.css'
import { customToast } from '../components/utils/customToast'
import errorCapture from '../utils/web3/errorCapture'
import useConnect from '../utils/hooks/useConnect'
import useMintValues from '../utils/hooks/useMintValues'

export enum MintState {
  NONE,
  MINT_IN_POGRESS,
  MINT_SUCCESS,
  ERC20_ALLOWANCE_IN_PROGRESS,
}

export type MintStatus = {
  type: MintState
  text: null | string
  txn: null | string
}

type ContractInstance = {
  contract: ethers.Contract | null
  signer: ethers.Signer | null
  provider: ethers.providers.Web3Provider | null
  address: string
}

export default function Home() {
  // const [mintState, setMintLoading] = useState<MintStatus>({
  //   type: MintState.MINT_IN_POGRESS, // mintSuccess // erc20Allowance
  //   text: 'Mint In Progress',
  //   txn: '0xd58888f66b7e838c3546680de7dd0f7c2d3e851bb0a22bf2a81c6dc40675e908',
  // })
  const [mintState, setMintLoading] = useState<MintStatus>({
    type: MintState.NONE, // mintSuccess // erc20Allowance
    text: null,
    txn: null,
  })
  const [isEth, setEth] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [ci, setContract] = useState<ContractInstance>({
    contract: null,
    signer: null,
    provider: null,
    address: '',
  })

  const [mintValues, setMintValues] = useState<{
    apePrice: null | number
    ethPrice: null | number
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

  useMintValues({ contract, setMintValues })

  const onMint = async () => {
    if (
      ci.contract === null ||
      ci.signer === null ||
      ci.provider === null ||
      mintValues?.ethPrice === null ||
      mintValues?.apePrice === null
    ) {
      toast.error('Please sign in before minting!')
    } else {
      const { chainId } = await ci.provider.getNetwork()
      if (chainId !== selectedNet.chainId) {
        toast.error(
          `App contract is on ${selectedNet.name}. Please switch to it before minting`
        )
      }
      try {
        // setMintLoading({
        //   type: MintState.MINT_IN_POGRESS,
        //   text: 'Mint In Progress',
        //   txn: null,
        // })
        let mintResp
        if (isEth) {
          const ethTotalprice = String(quantity * mintValues.ethPrice)
          mintResp = await ci.contract
            .connect(ci.signer)
            .mintInEth(quantity, { value: parseEther(ethTotalprice) })
        } else {
          const apeCost = quantity * mintValues.apePrice
          const apeTotalPrice = parseEther(String(apeCost))

          const erc20Contract = new ethers.Contract(
            selectedNet.testErc20Address,
            erc20ApproveAbi,
            ci.provider
          )

          const balance = await erc20Contract
            .connect(ci.signer)
            .allowance(ci.address, contractAddress)

          if (Number(ethers.utils.formatEther(balance)) < apeCost) {
            const approveResp = await erc20Contract
              .connect(ci.signer)
              .approve(contractAddress, apeTotalPrice)

            setMintLoading({
              type: MintState.ERC20_ALLOWANCE_IN_PROGRESS,
              text: 'Approving ERC20',
              txn: approveResp.hash,
            })

            await approveResp.wait()
          }

          mintResp = await ci.contract.connect(ci.signer).mintInApe(quantity)
        }
        if (!mintResp) {
          throw Error('There is a minting error...')
        }

        setMintLoading({
          type: MintState.MINT_IN_POGRESS,
          text: 'Mint In Progress',
          txn: mintResp.hash,
        })
        // customToast({
        //   text: 'Transaction is pending...',
        //   txn: mintResp.hash,
        //   toast: chakraToast,
        // })
        toast.info(
          `Transaction is minting on: https://${selectedNet.name}.etherscan.io/tx/${mintResp.hash}`
        )

        await mintResp.wait()

        toast.success(`SUCCESS!!!!: ${mintResp.hash}`)
        // customToast({
        //   text: 'Success',
        //   txn: mintResp.hash,
        //   toast: chakraToast,
        // })
        setMintLoading({
          type: MintState.MINT_SUCCESS,
          text: 'Success!',
          txn: mintResp.hash,
        })
      } catch (e: any) {
        setMintLoading({
          type: MintState.NONE,
          text: null,
          txn: null,
        })
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
        mintState={mintState}
        setMintLoading={setMintLoading}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <HowItWorksSection />
      <ArtistSection content={artistSection} />
      <FaqSection />
    </>
  )
}
