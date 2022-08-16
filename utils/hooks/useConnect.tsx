import { useState, useEffect } from 'react'
import { ethers, providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { ToastContainer, toast } from 'react-toastify'
import { contractAbi, contractAddress, selectedNet } from '../web3'

function useConnect({
  // ci,
  setContract,
}: {
  // ci: {
  //   contract: ethers.Contract | null
  //   signer: ethers.Signer | null
  //   provider: ethers.providers.Web3Provider | null
  //   address: string
  // }
  setContract: (x: {
    contract: ethers.Contract | null
    signer: ethers.Signer | null
    provider: ethers.providers.Web3Provider | null
    address: string
  }) => void
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
    console.log('yyy 111')
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    const provider = await web3Modal.connect()

    addListeners(provider)
    console.log('yyy 222', provider)
    const ethersProvider = new providers.Web3Provider(provider)

    const { chainId } = await ethersProvider.getNetwork()
    if (chainId !== selectedNet.chainId) {
      toast.error(
        `App contract is on ${selectedNet.name}. Please sign in on this network! :-)`
      )
      return
    }
    console.log('yyy 333', ethersProvider)
    const signer = await ethersProvider.getSigner()
    const userAddress = await signer.getAddress()
    console.log('yyy 444', userAddress)

    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      ethersProvider
    )
    setContract({
      contract,
      signer,
      provider: ethersProvider,
      address: userAddress,
    })
    console.log('yyy testing', { ethersProvider, signer })
    const resp = await contract.connect(signer).PRICE_APE()

    console.log('yyy 777 resp', resp)
  }

  const disconnect = () => {
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    setContract({
      contract: null,
      signer: null,
      provider: null,
      address: '',
    })
  }
  return [connectWallet as any, disconnect]
}

export default useConnect
