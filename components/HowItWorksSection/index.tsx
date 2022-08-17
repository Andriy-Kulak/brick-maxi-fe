import Image from 'next/image'
import styled from 'styled-components'
import { Main, TitleH1, TitleH2Small } from '../sharedstyles'
import { Divider, ShadedTextBox } from '../'
import { images } from '../../content'
import { mobileBr } from '../../utils/breakpoints'

const TextC = styled.div`
  background-color: black;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 60vh;
  min-height: 60vh;

  @media screen and (max-width: ${mobileBr}) {
    height: auto;
    min-height: auto;
  }
`

const BackgroundC = styled.div`
  position: relative;
  height: 150vh;
  background-color: black;

  @media screen and (max-width: ${mobileBr}) {
    height: 115vh;
  }
`

const MiniTextC = styled.div`
  width: 100%;
  padding: 20px 50px 0px;

  @media screen and (max-width: ${mobileBr}) {
    padding: 10px 0px 0px;
  }
`

const HowItWorksSection = () => (
  <>
    <TextC>
      <MiniTextC>
        <TitleH2Small>ART THAT PAYS DIVIDENDS.</TitleH2Small>
        <Divider thick={0.5} color="white" />
      </MiniTextC>
      <Main>
        <TitleH1>You collect art.</TitleH1>
        <TitleH1>We purchase real estate.</TitleH1>
        <TitleH1>You earn USDC rewards.</TitleH1>
      </Main>
    </TextC>
    <BackgroundC>
      <Image
        alt="bg-art-2"
        src={images.bgArt2}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <ShadedTextBox />
    </BackgroundC>
  </>
)

export default HowItWorksSection
