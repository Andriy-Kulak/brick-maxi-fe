import Image from 'next/image'
import { ethers, providers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useState, useEffect } from 'react'

import {
  ColorBackground,
  Main100h,
  WhiteContentBox,
} from '../components/sharedstyles'

import { FaqAcccordion, Nav, ArtistSection } from '../components'

import { artistSection, faqAccordion, images } from '../content'
import TokenSection from '../components/TokenSection'
import HowItWorksSection from '../components/HowItWorksSection'
import LandingSection from '../components/LandingSection'
import FaqSection from '../components/FaqSection'

export default function Home() {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null)
  const [address, setAddress] = useState('')

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
    const userAddress = await ethersProvider.getSigner().getAddress()
    console.log('yyy 444', userAddress)
    setAddress(userAddress)
    console.log('yyy 555')
  }

  const disconnect = () => {
    if (web3Modal === null) {
      throw Error('Web3 Modal error')
    }

    setAddress('')
  }

  return (
    <>
      <Nav
        connectWallet={connectWallet}
        address={address}
        disconnect={disconnect}
      />
      <LandingSection />
      <TokenSection />
      <HowItWorksSection />
      <ArtistSection content={artistSection} />
      <FaqSection />
    </>
  )
}
