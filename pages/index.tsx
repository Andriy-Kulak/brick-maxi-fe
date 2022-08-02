import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  TitleH3,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
} from '../components/sharedstyles'
import { Cards, Divider } from '../components'
import Nav from '../components/Navigation'
import Image from 'next/image'
// import { Divider } from '@mui/material'
import brickMaxiLogo from '../public/assets/logo.png'
import artImg from '../public/assets/art1.png'

export default function Home() {
  return (
    <>
      <Nav />
      <Container imgUrl="/assets/bgArt1.png">
        <Main>
          <Image
            alt="Brick Maxi Logo"
            src={brickMaxiLogo}
            height={200}
            width={200}
          />
          <TitleH3>ART THAT PAYS DIVIDENS</TitleH3>
        </Main>
      </Container>
      <ColorBackground color="white">
        <FlexRow>
          <div style={{ border: '1px solid red ', width: '50%' }}>
            <Image alt="art image 1" width={500} height={500} src={artImg} />
          </div>
          <div style={{ border: '1px solid red ', width: '50%' }}>
            <h3>Token Name</h3>
            <h4>ARTIST</h4>
            <p>bottoproject</p>
            <h4>DESCRIPTION</h4>
            <p>
              This is the info that goes here that is the info that people want
              to know when they are looking for all the info about what they are
              looking at.
            </p>
            <Divider />
            <FlexRow>
              <div style={{ width: '50%' }}>
                <h4>REMAINING</h4>
                <p>100 / 100</p>
                <p>Mint Price: 5</p>
              </div>
              <div style={{ width: '50%' }}>
                <h4>ASSET TYPE</h4>
                <p>property</p>
                <p>Mint Price: 5</p>
              </div>
            </FlexRow>
            <Divider thick={0.5} />
          </div>
        </FlexRow>
      </ColorBackground>
      <BlackContainer>
        <Main>
          <TitleH1>You collect art.</TitleH1>
          <TitleH1>We purchas real estate.</TitleH1>
          <TitleH1>You earn USDC rewards.</TitleH1>
        </Main>
      </BlackContainer>
      <Container imgUrl="/assets/bgArt2.png">
        <h4>test</h4>
      </Container>
    </>
  )
}
