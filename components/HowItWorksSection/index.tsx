import Image from 'next/image'
import styled from 'styled-components'
import { Main, TitleH1, TitleH2Small } from '../sharedstyles'
import { Divider, ShadedTextBox } from '../'
import { images } from '../../content'
import { mobileBr, tabletBr } from '../../utils/breakpoints'

const TextC = styled.div`
  position: relative;
  background-color: black;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 40vh;

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

const ImgC1 = styled.div`
  position: absolute;
  top: 115px;
  left: 25px;

  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const ImgC2 = styled.div`
  position: absolute;
  bottom: 225px;
  left: 25px;

  @media screen and (max-width: ${tabletBr}) {
    display: none;
  }
`

const ImgC3 = styled.div`
  display: none;
  position: absolute;
  top: 65px;
  left: 25px;
  @media screen and (max-width: ${mobileBr}) {
    display: inherit;
  }
`

const StyledMain = styled(Main)`
  padding: 3rem 0;

  @media screen and (max-width: ${mobileBr}) {
    padding: 2rem 0;
  }
`

const HowItWorksSection = () => (
  <>
    <TextC id="how-it-works-section">
      <ImgC1>
        <Image
          alt="how it works"
          src={images.howItWorksTitle}
          width={35}
          height={205}
        />
      </ImgC1>

      <ImgC3>
        <Image
          alt="how it works"
          src={images.howItWorksTitle}
          width={20}
          height={110}
        />
      </ImgC3>

      <MiniTextC>
        <TitleH2Small>ART THAT PAYS DIVIDENDS.</TitleH2Small>
        <Divider thick={0.5} color="white" />
      </MiniTextC>
      <StyledMain>
        <TitleH1>You collect art.</TitleH1>
        <TitleH1>We purchase real estate.</TitleH1>
        <TitleH1>You earn USDC rewards.</TitleH1>
      </StyledMain>
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

      <ImgC2>
        <Image
          alt="how it works"
          src={images.howItWorksTitle}
          width={35}
          height={205}
        />
      </ImgC2>
    </BackgroundC>
  </>
)

export default HowItWorksSection
