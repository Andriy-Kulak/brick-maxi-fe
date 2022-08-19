import Image from 'next/image'
import styled from 'styled-components'

import { Main100h, WhiteContentBox, Main } from '../sharedstyles'
import { FaqAcccordion } from '../'
import { faqAccordion, images } from '../../content'
import { mobileBr, tabletBr } from '../../utils/breakpoints'

const DesktopC = styled.div`
  position: relative;
  height: 90vh;
  background-color: black;

  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const MobileC = styled.div`
  display: none;
  background-color: black;
  height: auto;

  @media screen and (max-width: ${mobileBr}) {
    display: inherit;
  }

  button {
    background-color: black !important;
  }
`

const TitleImgDesktop = styled.div`
  position: absolute;
  left: 50px;
  top: 40%;
  @media screen and (max-width: ${tabletBr}) {
    top: 40%;
  }
  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const MobileContainer = styled.div`
  height: 80px;
  padding-top: 40px;
  /* width: 100%; */
  position: relative;

  /* display: flex; */
`
const TitleImgMobile = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`

const FaqSection = () => {
  return (
    <div id="learn-section">
      <DesktopC>
        <Image
          alt="bg-art-2"
          src={images.bgArt1}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <Main100h>
          <TitleImgDesktop>
            <Image
              src={images.faqBlackTitle}
              width={35}
              height={85}
              alt="faq"
            />
          </TitleImgDesktop>

          <WhiteContentBox>
            <FaqAcccordion content={faqAccordion} />
          </WhiteContentBox>
        </Main100h>
      </DesktopC>
      <MobileC>
        <Main>
          <TitleImgMobile>
            <Image
              src={images.faqWhiteTitle}
              width={35}
              height={85}
              alt="faq"
            />
          </TitleImgMobile>
          <MobileContainer>
            <Image
              src={images.whiteSquiggleLine}
              width={240}
              height={10}
              alt="squiggle line"
            />
          </MobileContainer>
          <FaqAcccordion content={faqAccordion} black />
        </Main>
      </MobileC>
    </div>
  )
}

export default FaqSection
