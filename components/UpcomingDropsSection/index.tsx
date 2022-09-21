import Image from 'next/image'
import styled from 'styled-components'
import { images } from '../../content'
import { laptopSmallBr, mobileBr, tabletBr } from '../../utils/breakpoints'
import AnchorSpan from '../AnchorSpan'
import { StyledP, TitleH3 } from '../sharedstyles'

const TextC = styled.div`
  position: relative;
  width: 100%;
  background-color: black;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

  @media screen and (max-width: ${mobileBr}) {
    height: auto;
    min-height: auto;
  }

  @media screen and (min-width: ${laptopSmallBr}) {
    padding-bottom: 70px;
  }
`

const InnerTextC = styled.div`
  text-align: center;
  width: 60%;
  > div {
    padding: 0px 20px;
  }
  @media screen and (max-width: ${tabletBr}) {
    width: auto;
    margin: 10px 20px;
  }

  @media screen and (max-width: ${mobileBr}) {
    padding: 10px 10px;
  }

  padding: 0px 30px;
  h3 {
    margin-top: 50px;

    @media screen and (max-width: ${mobileBr}) {
      margin-top: 20px;
    }
  }
`

const DesktopImgC1 = styled.div`
  position: absolute;
  top: 35px;
  left: 25px;
  z-index: 20;

  @media screen and (max-width: ${tabletBr}) {
    left: 20px;
  }

  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const MobileImgC1 = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 20;

  @media screen and (min-width: ${mobileBr}) {
    display: none;
  }
`

const UpcomingDropsSection = () => {
  return (
    <TextC>
      <AnchorSpan id="upcoming-section" />
      <DesktopImgC1>
        <Image
          alt="upcoming drops"
          src={images.upcomingDropsTitle}
          width={30}
          height={259}
        />
      </DesktopImgC1>
      <MobileImgC1>
        <Image
          alt="upcoming drops"
          src={images.upcomingDropsTitle}
          width={17}
          height={175}
        />
      </MobileImgC1>
      <InnerTextC>
        <div>
          <TitleH3 color="white">CURATED DROPS</TitleH3>
          <StyledP color="white">
            Our artist drops are announced in pairs but only one token at a time
            is minted through the site. The entire platform gets taken over by
            the upcoming artist’s works, giving them our full attention and
            showcasing a selection of their past works.
          </StyledP>

          <TitleH3 color="white">ALLOW LIST</TitleH3>
          <StyledP color="white">
            Mints are done in two phases: Allow List & Public. AL spots for our
            first ever drop will be a combination of Premint winners from
            partner communities and other factors, like the artist’s past
            collectors. More details to be announced along with our first
            artists announcement.
          </StyledP>
        </div>
      </InnerTextC>
    </TextC>
  )
}

export default UpcomingDropsSection
