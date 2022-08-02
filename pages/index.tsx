import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  TitleH3,
  TitleH2,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
  TitleH4,
  StyledP,
} from '../components/sharedstyles'
import { Cards, Divider } from '../components'
import Nav from '../components/Navigation'
import Image from 'next/image'
// import { Divider } from '@mui/material'
import brickMaxiLogo from '../public/assets/logo.png'
import artImg from '../public/assets/art1.png'
import { weight } from '../components/utils/fontConfigs'

const { bold } = weight

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
          <TitleH2>ART THAT PAYS DIVIDENS</TitleH2>
        </Main>
      </Container>
      <ColorBackground color="white">
        <FlexRow>
          <div style={{ border: '1px solid red ', width: '50%' }}>
            <Image alt="art image 1" width={500} height={500} src={artImg} />
          </div>
          <div style={{ border: '1px solid red ', width: '50%' }}>
            <TitleH3>TOKEN NAME</TitleH3>
            <div>
              <TitleH4>ARTIST</TitleH4>
              <StyledP weight={600}>bottoproject</StyledP>
              <br />
            </div>

            <TitleH4>DESCRIPTION</TitleH4>
            <StyledP>
              This is the info that goes here that is the info that people want
              to know when they are looking for all the info about what they are
              looking at.
            </StyledP>
            <Divider />
            <FlexRow>
              <div style={{ width: '50%' }}>
                <TitleH4>REMAINING</TitleH4>
                <StyledP weight={bold}>100 / 100</StyledP>
                <StyledP weight={bold}>Mint Price: 5</StyledP>
              </div>
              <div style={{ width: '50%' }}>
                <TitleH4>ASSET TYPE</TitleH4>
                <StyledP weight={bold}>property</StyledP>
                <StyledP weight={bold}>Mint Price: 5</StyledP>
              </div>
            </FlexRow>
            <Divider thick={1} />
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
