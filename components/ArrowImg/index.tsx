import Image from 'next/image'
import styled from 'styled-components'
import { images } from '../../content'
import { mobileBr } from '../../utils/breakpoints'

const DesktopC = styled.div`
  margin: 7px 11px 0px;
  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const MobileC = styled.div`
  margin: 0px 0px 5px;
  @media screen and (min-width: ${mobileBr}) {
    display: none;
  }
`

const ArrowImg = () => (
  <>
    <DesktopC>
      <Image src={images.whiteArrow} width={38} height={14} alt="right arrow" />
    </DesktopC>
    <MobileC>
      <Image src={images.whiteArrow} width={12} height={4} alt="right arrow" />
    </MobileC>
  </>
)

export default ArrowImg
