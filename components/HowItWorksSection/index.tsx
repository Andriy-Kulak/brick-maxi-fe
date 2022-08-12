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
  height: 80vh;
  min-height: 80vh;

  @media screen and (max-width: ${mobileBr}) {
    height: auto;
    min-height: auto;
  }
`

const BackgroundC = styled.div`
  position: relative;
  height: 200vh;
  background-color: black;

  @media screen and (max-width: ${mobileBr}) {
    height: 120vh;
  }
`

const HowItWorksSection = () => (
  <>
    <TextC>
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