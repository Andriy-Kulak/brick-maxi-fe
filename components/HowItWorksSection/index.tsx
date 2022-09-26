import Image from 'next/image'
import styled from 'styled-components'
import { Main, TitleH1 } from '../sharedstyles'
import { ShadedTextBox } from '../'
import { images } from '../../content'
import {
  mobileBr,
  tabletBr,
  smallMobileBr,
  largeTabletBr,
  laptopSmallBr,
} from '../../utils/breakpoints'
import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import { NextDesktopBgImg, NextMobileBgImg } from '../BgImages'

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

  @media screen and (max-width: ${largeTabletBr}) {
    height: 175vh;
  }

  @media screen and (max-width: ${tabletBr}) {
    height: 115vh;
  }

  @media screen and (max-width: ${smallMobileBr}) {
    height: 125vh;
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
        <TitleH1>Art → Real Estate → Rewards</TitleH1>
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
