import { useState, useEffect } from 'react'
import { ethers, providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { toast } from 'react-toastify'
import {
  contractAbi,
  contractAddress,
  isLandingPage,
  selectedNet,
} from '../web3'
import { ContractInstance } from '../types/reactState'

function useConnect({
  setContract,
}: {
  setContract: (x: ContractInstance) => void
}) {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null)

  async function addListeners(web3ModalProvider: any) {
    web3ModalProvider.on('accountsChanged', () => {
      window.location.reload()
    })

    // Subscribe to chainId change
    web3ModalProvider.on('chainChanged', () => {
      window.location.reload()
    })
  }

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
      cacheProvider: true, // very important
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

  async function connectWallet() {
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    const provider = await web3Modal.connect()

    addListeners(provider)
    const ethersProvider = new providers.Web3Provider(provider)

    const { chainId } = await ethersProvider.getNetwork()
    if (!isLandingPage && chainId !== selectedNet.chainId) {
      toast.error(
        `App contract is on ${selectedNet.name}. Please sign in on this network! :-)`
      )
      return
    }
    const signer = await ethersProvider.getSigner()
    const ethAddress = await signer.getAddress()

    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      ethersProvider
    )

    const ensAddress = await ethersProvider.lookupAddress(ethAddress)

    setContract({
      contract,
      signer,
      provider: ethersProvider,
      ethAddress,
      ensAddress,
    })
  }

  const disconnect = () => {
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    setContract({
      contract: null,
      signer: null,
      provider: null,
      ensAddress: null,
      ethAddress: '',
    })
  }
  return [connectWallet as any, disconnect]
}

export default useConnect
