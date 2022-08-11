import Image from 'next/image'
import styled from 'styled-components'

import { Main100h, WhiteContentBox, Main } from '../sharedstyles'
import { FaqAcccordion } from '../'
import { faqAccordion, images } from '../../content'
import { mobileBr } from '../../utils/breakpoints'

const DesktopC = styled.div`
  position: relative;
  height: 90vh;

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
          <WhiteContentBox>
            <FaqAcccordion content={faqAccordion} />
          </WhiteContentBox>
        </Main100h>
      </DesktopC>
      <MobileC>
        <Main>
          <FaqAcccordion content={faqAccordion} black />
        </Main>
      </MobileC>
    </div>
  )
}

export default FaqSection
