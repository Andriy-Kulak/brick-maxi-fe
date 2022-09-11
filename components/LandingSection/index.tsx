import { useLayoutEffect, UIEvent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { TitleH2, Main100h } from '../sharedstyles'
import { images } from '../../content'
import { tabletBr } from '../../utils/breakpoints'
import { avenirNextCondensed, weight } from '../utils/fontConfigs'

type Props = {
  hide?: boolean
  marginLeft?: number
}
const ImageC = styled.div`
  width: 200px;
  height: 200px;
  z-index: ${(props: any) => (props.hide ? 2 : 200)};
  margin-left: ${(props: { marginLeft?: number }) => props.marginLeft || 0}px;
  display: inherited;
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

const LandingSection = () => {
  const [logoParams, setLogoParams] = useState({
    w: 200,
    h: 200,
    imgPadding: 0,
    scrollY: 0,
  })
  const handleScroll = () => {
    // Get the current scrollY point
    const sY = window.scrollY

    // console.log('event.target.body ', event.target.body.scroll)
    // const scrollTop = event.target.body.scrollTop
    // at 0 should be 200  by 200
    // 276 should be 77 by 77
    // 200-77 = 123

    const calc1 = 200 - 123 * (sY / 225)
    const calc2 = 123 * (sY / 225)
    const test = Math.max(77, calc1)
    console.log('sY and others', { sY, calc1, calc2 })
    setLogoParams({
      w: test,
      h: test,
      imgPadding: calc2,
      scrollY: window.scrollY,
    })
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
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
          marginLeft={logoParams.imgPadding}
          hide={logoParams.scrollY >= 220}
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
