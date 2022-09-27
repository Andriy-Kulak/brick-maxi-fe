import { RefObject } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { TitleH2, Main100h } from '../sharedstyles'
import { images } from '../../content'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { oswaldFont, montserratFont, weight } from '../utils/fontConfigs'
import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import { LogoParamProps } from '../../utils/hooks/useScrollEffects'

type ImageCProps = {
  hide?: boolean
  marginLeft?: number
  marginRight?: number
}
const ImageC = styled.div<ImageCProps>`
  width: 200px;
  height: 200px;
  z-index: ${(props) => (props.hide ? -1 : 200)};
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: 0px;
  display: relative;
  @media screen and (max-width: ${tabletBr}) {
    width: 150px;
    height: 160px;

    margin-left: 0px;
    margin-right: ${(props) => props.marginRight || 0}px;
  }
`

const LandingC = styled.div`
  position: relative;
  height: 90vh;
  background-color: black;

  @media screen and (max-width: ${tabletBr}) {
    height: 88vh;
  }

  @media screen and (max-width: ${mobileBr}) {
    height: 85vh;
  }
`

const StyledMain = styled(Main100h)`
  padding: 2rem 0 5rem;
`

const VerticalScrollText = styled.h4`
  text-orientation: upright;
  color: white;
  writing-mode: vertical-rl;
  position: absolute;
  top: calc(50% - 80px);
  font-weight: ${weight.bold};
  left: 34px;
  font-size: 20px;
  font-weight: ${weight.light};
  font-family: ${oswaldFont};

  @media screen and (max-width: ${tabletBr}) {
    display: none;
  }
`

const HorizontalScrollText = styled.h4`
  color: white;
  position: absolute;
  bottom: 110px;
  left: calc(50% - 26px);
  font-weight: ${weight.bold};
  font-size: 13px;
  font-family: ${montserratFont};

  @media screen and (min-width: ${tabletBr}) {
    display: none;
  }
`

const LaunchText = styled.p`
  position: absolute;
  bottom: 70px;
  left: calc(50% - 84px);
  color: white;
  font-size: 20px;
  font-family: ${oswaldFont};
  font-weight: ${weight.semiBold};
`

const LandingSection = ({
  logoParams,
  logoRef,
}: {
  logoParams: LogoParamProps
  logoRef: RefObject<HTMLDivElement> | undefined
}) => {
  return (
    <LandingC>
      <Image
        alt="bg-art-1"
        src={images.bgArt1}
        priority
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <StyledMain>
        <ImageC
          ref={logoRef}
          marginLeft={logoParams.imgMarginLeft}
          marginRight={logoParams.imgMarginRight}
          hide={logoParams.isSwitchLogo}
        >
          <Image
            alt="Brick Maxi Logo"
            src={images.animatedLogo}
            height={logoParams.w}
            width={logoParams.h}
          />
        </ImageC>
        <VerticalScrollText>SCROLL</VerticalScrollText>
        <TitleH2
          as={motion.h2}
          initial="hidden"
          animate="show"
          variants={textVariant}
          transition={{ delay: 0.5 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          ART THAT PAYS DIVIDENDS
        </TitleH2>
      </StyledMain>
      <HorizontalScrollText>SCROLL</HorizontalScrollText>
      <LaunchText>+ launching fall 2022 +</LaunchText>
    </LandingC>
  )
}

export default LandingSection
