import Image from 'next/image'
import styled from 'styled-components'
import { FaqAcccordion } from '../'
import { faqAccordion, images } from '../../content'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import AnchorSpan from '../AnchorSpan'

const MobileC = styled.div`
  padding: 50px 150px;
  background-color: white !important;
  height: auto;

  @media screen and (max-width: ${tabletBr}) {
    padding: 50px 100px;
  }

  @media screen and (max-width: ${mobileBr}) {
    padding: 40px 0px 40px 20px;
  }
`

const TitleImgDesktop = styled.div`
  position: absolute;

  left: 25px;
  top: 40%;
  @media screen and (max-width: ${tabletBr}) {
    top: 40%;
  }
  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const TitleImgMobile = styled.div`
  position: absolute;
  top: 40%;
  left: 15px;
  @media screen and (min-width: ${mobileBr}) {
    display: none;
  }
`

const Container = styled.div`
  position: relative;
`

const FaqSection = () => {
  return (
    <Container>
      <AnchorSpan id="learn-section" />
      <TitleImgDesktop>
        <Image src={images.faqBlackTitle} width={30} height={65} alt="faq" />
      </TitleImgDesktop>

      <TitleImgMobile>
        <Image src={images.faqBlackTitle} width={17} height={37} alt="faq" />
      </TitleImgMobile>

      <MobileC>
        <FaqAcccordion content={faqAccordion} />
      </MobileC>
    </Container>
  )
}

export default FaqSection
