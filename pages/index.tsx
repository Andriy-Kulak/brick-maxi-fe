import Image from 'next/image'
import { ethers, providers } from 'ethers'
import Web3Modal from 'web3modal'
import {
  Main,
  TitleH3,
  TitleH2,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
  TitleH4,
  StyledP,
  TitleH2Small,
  Main100h,
  WhiteContentBox,
  LiveSpan,
} from '../components/sharedstyles'

import {
  Divider,
  FaqAcccordion,
  Nav,
  Select,
  ShadedTextBox,
  StyledSwitch,
  MintBtn,
  ArtistSection,
} from '../components'

import WalletConnectProvider from '@walletconnect/web3-provider'

import { useState, useEffect } from 'react'

import { artistSection, faqAccordion, images } from '../content'
import { weight } from '../components/utils/fontConfigs'
import { black } from '../components/utils/colors'
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
      <ColorBackground color="white">
        <Main>
          <FlexRow>
            <div style={{ margin: '0px 60px' }}>
              <FlexRow justifyContent="space-between">
                <div>
                  <StyledP weight={700}>
                    04/28/1983 4:40PM PST
                    <LiveSpan>LIVE</LiveSpan>
                  </StyledP>
                </div>
                <div>
                  <StyledP color={black}>EDITION 1/5</StyledP>
                </div>
              </FlexRow>

              <Image
                alt="art image 1"
                width={500}
                height={500}
                src={images.artImg}
              />
            </div>
            <div style={{ width: '40%' }}>
              <TitleH3>TOKEN NAME</TitleH3>
              <div>
                <TitleH4>ARTIST</TitleH4>
                <StyledP weight={bold}>bottoproject</StyledP>
                <br />
              </div>

              <TitleH4>DESCRIPTION</TitleH4>
              <StyledP>
                This is the info that goes here that is the info that people
                want to know when they are looking for all the info about what
                they are looking at.
              </StyledP>
              <Divider />

              <FlexRow>
                <div style={{ width: '33%' }}>
                  <TitleH4 color={black} weight={bold}>
                    MINT PRICE 1.5Ξ
                  </TitleH4>
                  <StyledSwitch />
                </div>
                <div style={{ width: '33%' }}>
                  <TitleH4>REMAINING</TitleH4>
                  <StyledP weight={bold}>100 / 100</StyledP>
                </div>
                <div style={{ width: '33%' }}>
                  <TitleH4>ASSET TYPE</TitleH4>
                  <StyledP weight={bold}>Residential</StyledP>
                </div>
              </FlexRow>
              <Divider thick={1} />
              <div style={{ display: 'flex' }}>
                <Select />
                <MintBtn />
              </div>
            </div>
          </FlexRow>
        </Main>
      </ColorBackground>
      <BlackContainer>
        <div
          style={{
            width: '100%',
            padding: '0px 50px',
          }}
        >
          <br />
          <TitleH2Small>ART THAT PAYS DIVIDENDS.</TitleH2Small>
          <Divider thick={1} color="white" />
        </div>
        <Main>
          <TitleH1>You collect art.</TitleH1>
          <TitleH1>We purchase real estate.</TitleH1>
          <TitleH1>You earn USDC rewards.</TitleH1>
        </Main>
      </BlackContainer>
      <div
        style={{
          position: 'relative',
          height: '200vh',
          backgroundColor: black,
        }}
      >
        <Image
          alt="bg-art-2"
          src={images.bgArt2}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <ShadedTextBox />
      </div>
      <ColorBackground height="90vh">
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
        <Main100h>
          <WhiteContentBox>
            <FaqAcccordion content={faqAccordion} />
          </WhiteContentBox>
        </Main100h>
      </div>
    </>
  )
}
