import { RefObject } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { TitleH2, Main100h } from '../sharedstyles'
import { images } from '../../content'
import { tabletBr } from '../../utils/breakpoints'
import { avenirNextCondensed, weight } from '../utils/fontConfigs'
import { LogoParamProps } from '../../pages'

type ImageCProps = {
  hide?: boolean
  marginLeft?: number
  marginRight?: number
}
const ImageC = styled.div<ImageCProps>`
  width: 200px;
  height: 200px;
  z-index: ${(props) => (props.hide ? 2 : 200)};
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: 0px;
  display: inherited;
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
`

const StyledMain = styled(Main100h)`
  padding: 2rem 0 5rem;
`

const VerticalText = styled.h4`
  text-orientation: upright;
  color: white;
  writing-mode: vertical-rl;
  position: absolute;
  top: calc(50% - 80px);
  font-weight: ${weight.bold};
  left: 34px;
  font-size: 20px;
  font-family: ${avenirNextCondensed};
`

const LaunchText = styled.p`
  position: absolute;
  bottom: 50px;
  left: calc(50% - 100px);
  color: white;
  font-style: italic;
  font-size: 20px;
  font-family: ${avenirNextCondensed};
  font-weight: ${weight.bold};
`

const LandingSection = ({
  logoParams,
  logoRef,
}: {
  logoParams: LogoParamProps
  logoRef?: RefObject<HTMLDivElement> | undefined
}) => {
  console.log('logoParams ', logoParams)
  return (
    <LandingC>
      <Image
        alt="bg-art-1"
        priority
        src={images.bgArt1}
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
        <VerticalText>SCROLL</VerticalText>
        <TitleH2 style={{ position: 'relative', zIndex: 1 }}>
          ART THAT PAYS DIVIDENDS
        </TitleH2>
      </StyledMain>
      <LaunchText>+ launching fall 2022 +</LaunchText>
    </LandingC>
  )
}

export default LandingSection
