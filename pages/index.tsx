import Image from 'next/image'
import { ethers, providers } from 'ethers'
import Web3Modal from 'web3modal'
import {
  Main,
  TitleH2,
  BlackContainer,
  ColorBackground,
  TitleH1,
  TitleH2Small,
  Main100h,
  WhiteContentBox,
} from '../components/sharedstyles'

import {
  Divider,
  FaqAcccordion,
  Nav,
  ShadedTextBox,
  ArtistSection,
} from '../components'

import WalletConnectProvider from '@walletconnect/web3-provider'

import { useState, useEffect } from 'react'

import { artistSection, faqAccordion, images } from '../content'
import { weight } from '../components/utils/fontConfigs'
import { black } from '../components/utils/colors'
import TokenSection from '../components/TokenSection'
import HowItWorksSection from '../components/HowItWorksSection'
const { bold } = weight

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
      <div
        style={{
          position: 'relative',
          height: '90vh',
        }}
      >
        <Image
          alt="bg-art-1"
          priority
          src={images.bgArt1}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <Main100h>
          <Image
            alt="Brick Maxi Logo"
            src={images.brickMaxiLogo}
            height={200}
            width={200}
          />
          <TitleH2 style={{ position: 'relative', zIndex: 1 }}>
            ART THAT PAYS DIVIDENS.
          </TitleH2>
        </Main100h>
      </div>
      <TokenSection />
      <HowItWorksSection />
      <ColorBackground height="90vh" id="artist-section">
        <ArtistSection content={artistSection} />
      </ColorBackground>
      <div
        style={{
          position: 'relative',
          height: '90vh',
        }}
      >
        <Image
          alt="bg-art-2"
          src={images.bgArt1}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <Main100h id="learn-section">
          <WhiteContentBox>
            <FaqAcccordion content={faqAccordion} />
          </WhiteContentBox>
        </Main100h>
      </div>
    </>
  )
}
