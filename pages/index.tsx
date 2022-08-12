import { useState, useEffect } from 'react'
import { ethers, providers } from 'ethers'
import { useToast } from '@chakra-ui/react'
import Web3Modal from 'web3modal'

import WalletConnectProvider from '@walletconnect/web3-provider'
import { ToastContainer, toast } from 'react-toastify'
import { Nav, ArtistSection } from '../components'

import { artistSection } from '../content'
import TokenSection from '../components/TokenSection'
import HowItWorksSection from '../components/HowItWorksSection'
import LandingSection from '../components/LandingSection'
import FaqSection from '../components/FaqSection'
import { contractAbi, contractAddress } from '../utils/web3'
import { parseEther } from 'ethers/lib/utils'

import 'react-toastify/dist/ReactToastify.css'
import { customToast } from '../components/utils/customToast'
import errorCapture from '../utils/web3/errorCapture'

export default function Home() {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null)
  const [address, setAddress] = useState('')
  const [isMintLoading, setMintLoading] = useState(false)
  const [isEth, setEth] = useState(true)
  const [ci, setContract] = useState<{
    contract: ethers.Contract | null
    signer: ethers.Signer | null
    provider: ethers.providers.Web3Provider | null
  }>({
    contract: null,
    signer: null,
    provider: null,
  })
  const chakraToast = useToast()

  useEffect(() => {
    // initiate web3modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
        },
      },
    }

    const newWeb3Modal = new Web3Modal({
      cacheProvider: false, // very important
      network: 'mainnet',
      providerOptions,
    })
    setWeb3Modal(newWeb3Modal)
  }, [])

  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [web3Modal])

  async function addListeners(web3ModalProvider: any) {
    web3ModalProvider.on('accountsChanged', () => {
      window.location.reload()
    })

    // Subscribe to chainId change
    web3ModalProvider.on('chainChanged', () => {
      window.location.reload()
    })
  }

  async function connectWallet() {
    console.log('yyy 111')
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    const provider = await web3Modal.connect()

    addListeners(provider)
    console.log('yyy 222', provider)
    const ethersProvider = new providers.Web3Provider(provider)
    console.log('yyy 333', ethersProvider)
    const signer = await ethersProvider.getSigner()
    const userAddress = await signer.getAddress()
    console.log('yyy 444', userAddress)
    setAddress(userAddress)
    console.log('yyy 555')

    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      ethersProvider
    )
    setContract({
      contract,
      signer,
      provider: ethersProvider,
    })
    console.log('yyy testing', { ethersProvider, signer })
    const resp = await contract.connect(signer).PRICE_APE()

    console.log('yyy 777 resp', resp)
  }

  const disconnect = () => {
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    setAddress('')
  }

  console.log('isEth ===>', isEth)
  const onMint = async () => {
    if (ci.contract === null || ci.signer === null || ci.provider === null) {
    } else {
      try {
        setMintLoading(true)
        let mintResp
        if (isEth) {
          mintResp = await ci.contract
            .connect(ci.signer)
            .mintInEth({ value: parseEther('.02') })
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
          `Trasnaction is minting on: https://goerli.etherscan.io/tx/${mintResp.hash}`
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
        address={address}
        disconnect={disconnect}
      />

      <LandingSection />
      <TokenSection
        currencySwitch={() => setEth(!isEth)}
        mint={() => onMint()}
        isMintLoading={isMintLoading}
      />
      <HowItWorksSection />
      <ArtistSection content={artistSection} />
      <FaqSection />
    </>
  )
}
