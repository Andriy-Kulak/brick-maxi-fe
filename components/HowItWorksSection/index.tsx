import Image from 'next/image'
import styled from 'styled-components'
import { Main, TitleH1 } from '../sharedstyles'
import { ShadedTextBox } from '../'
import { images } from '../../content'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import { NextDesktopBgImg, NextMobileBgImg } from '../BgImages'
import ArrowImg from '../ArrowImg'

const TextC = styled.div`
  position: relative;
  background-color: black;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 50vh;

  @media screen and (max-width: ${tabletBr}) {
    height: 60vh;
  }

  @media screen and (max-width: ${mobileBr}) {
    height: auto;
    min-height: 20vh;
  }
`

const BackgroundC = styled.div`
  position: relative;
  min-height: 155vh;
  background-color: black;
  padding: 40px 0px;
  min-height: 70vh;

  @media screen and (max-width: ${mobileBr}) {
    padding: 38px 0px;
  }
`

const ImgC1 = styled.div`
  position: absolute;
  top: 75px;
  left: 25px;
  z-index: 20;

  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const SquiggleC1 = styled.div`
  position: absolute;
  top: 190px;
  left: 70px;
  z-index: 21;

  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const SquiggleC2 = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  z-index: 21;

  @media screen and (min-width: ${mobileBr}) {
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
  top: 20px;
  left: 15px;
  z-index: 3;
  @media screen and (max-width: ${mobileBr}) {
    display: inherit;
  }
`

const StyledMain = styled(Main)`
  margin: 3rem 0;

  @media screen and (max-width: ${mobileBr}) {
    margin: 2rem 0;
  }
`

const TitleC = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  > h1 {
    margin: 0px 11px;
  }
`
const HowItWorksSection = () => (
  <>
    <TextC id="how-it-works-section">
      <ImgC1>
        <Image
          alt="how it works"
          src={images.howItWorksTitle}
          width={30}
          height={259}
        />
      </ImgC1>
      <SquiggleC1>
        <Image
          alt="sqiggle"
          src={images.whiteSquiggleLine}
          width={11}
          height={265}
        />
      </SquiggleC1>

      <SquiggleC2>
        <Image
          alt="sqiggle"
          src={images.whiteSquiggleLine}
          width={6}
          height={145}
        />
      </SquiggleC2>

      <ImgC3>
        <Image
          alt="how it works"
          src={images.howItWorksTitle}
          width={17}
          height={146}
        />
      </ImgC3>
      <StyledMain
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        transition={{ delay: 0.5 }}
      >
        <TitleC>
          <TitleH1>Art</TitleH1>
          <ArrowImg />
          <TitleH1>Real Estate</TitleH1>
          <ArrowImg />
          <TitleH1>Rewards</TitleH1>
        </TitleC>
      </StyledMain>
    </TextC>
    <BackgroundC>
      <NextDesktopBgImg
        alt="bg-art-2"
        src={images.bgArt2}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <NextMobileBgImg
        alt="bg-art-2"
        src={images.bgArt2Mobile}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />

      <ShadedTextBox />

      <ImgC2>
        <Image
          alt="how it works"
          src={images.howItWorksTitle}
          width={30}
          height={259}
        />
      </ImgC2>
    </BackgroundC>
  </>
)

export default HowItWorksSection
