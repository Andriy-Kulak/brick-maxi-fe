import Image from 'next/image'
import styled from 'styled-components'
import {
  Container,
  Main,
  Title,
  // Description,
  // CodeTag,
  TitleH3,
  TitleH2,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
  TitleH4,
  StyledP,
  // FlexColumn,
  TitleH2Small,
  Main100h,
} from '../components/sharedstyles'

import { Cards, Divider, Select, Nav } from '../components'

// import { Divider } from '@mui/material'
import brickMaxiLogo from '../public/assets/logo.png'
import bgArt1 from '../public/assets/bgArt1.png'
import bgArt2 from '../public/assets/bgArt2s.png'
import artImg from '../public/assets/artCut.png'
import { weight } from '../components/utils/fontConfigs'
import ShadedTextBox from '../components/ShadedTextBox'

const { bold } = weight

const CustomBlackContainer = styled.div`
  background-color: black;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 350vh;
  min-height: 350vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/bgArt2s.png');
  background-position: left center;
`

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Container imgUrl="/assets/bgArt1.png"> */}
      <div
        style={{
          position: 'relative',
          height: '90vh',
        }}
      >
        <Image
          src={bgArt1}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <Main100h>
          <Image
            alt="Brick Maxi Logo"
            src={brickMaxiLogo}
            height={200}
            width={200}
          />
          <TitleH2 style={{ position: 'relative', zIndex: 1 }}>
            ART THAT PAYS DIVIDENS.
          </TitleH2>
        </Main100h>
      </div>

      {/* </Container> */}
      <ColorBackground color="white">
        <Main>
          <FlexRow>
            <div style={{ margin: '0px 60px' }}>
              <FlexRow justifyContent="space-between">
                <div>
                  <StyledP weight={700}>
                    04/28/1983 4:40PM PST <span> LIVE</span>
                  </StyledP>
                </div>
                <div>
                  <TitleH4 color="black">EDITION 1/5</TitleH4>
                </div>
              </FlexRow>

              <Image
                alt="art image 1"
                width={500}
                height={500}
                src={artImg}
                style={{ border: '2px solid red' }}
              />
            </div>
            <div style={{ border: '1px solid red ', width: '40%' }}>
              <TitleH3>TOKEN NAME</TitleH3>
              <div>
                <TitleH4>ARTIST</TitleH4>
                <StyledP weight={600}>bottoproject</StyledP>
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
                <div style={{ width: '50%' }}>
                  <TitleH4>REMAINING</TitleH4>
                  <StyledP weight={bold}>100 / 100</StyledP>
                  <StyledP weight={bold}>Mint Price: 5Ξ</StyledP>
                </div>
                <div style={{ width: '50%' }}>
                  <TitleH4>ASSET TYPE</TitleH4>
                  <StyledP weight={bold}>property</StyledP>
                  <StyledP weight={bold}>Mint Price: 5</StyledP>
                </div>
              </FlexRow>
              <Divider thick={1} />

              <Select />
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
          {/* <div> */}
          <TitleH1>You collect art.</TitleH1>
          <TitleH1>We purchase real estate.</TitleH1>
          <TitleH1>You earn USDC rewards.</TitleH1>
          {/* </div> */}
          {/* <div>
            <TitleH1>TEST 2</TitleH1>
          </div>
          <div>
            <TitleH1>TEST 3</TitleH1>
          </div> */}
        </Main>
      </BlackContainer>
      <div
        style={{
          position: 'relative',
          height: '200vh',
          backgroundColor: 'black',
        }}
      >
        <Image
          src={bgArt2}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <ShadedTextBox />
        {/* <div style={{ position: 'relative', zIndex: 2 }}>
          <TitleH1>Test</TitleH1>
        </div> */}
      </div>
    </div>
  )
}
