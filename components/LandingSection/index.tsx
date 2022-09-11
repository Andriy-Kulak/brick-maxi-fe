import Image from 'next/image'
import styled from 'styled-components'
import { TitleH2, Main100h } from '../sharedstyles'
import { images } from '../../content'
import { tabletBr } from '../../utils/breakpoints'
import { avenirNextCondensed, weight } from '../utils/fontConfigs'

const ImageC = styled.div`
  width: 200px;
  height: 200px;

  @media screen and (max-width: ${tabletBr}) {
    width: 150px;
    height: 160px;
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

const LandingSection = () => (
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
      <ImageC>
        <Image
          alt="Brick Maxi Logo"
          src={images.brickMaxiLogo}
          height={200}
          width={200}
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

export default LandingSection
