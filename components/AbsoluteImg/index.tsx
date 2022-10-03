import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'
import { mobileBr, tabletBr } from '../../utils/breakpoints'

const StyledContainer = styled.div<{
  showMobile?: boolean
  showTablet?: boolean
  showDesktop?: boolean
}>`
  position: absolute;
  display: none;

  @media screen and (min-width: ${tabletBr}) {
    display: ${(props: { showDesktop?: boolean }) =>
      props.showDesktop ? 'inherit' : 'none'};
  }

  @media screen and (max-width: ${tabletBr}) {
    display: ${(props: { showTablet?: boolean }) =>
      props.showTablet ? 'inherit' : 'none'};
  }

  @media screen and (max-width: ${mobileBr}) {
    display: ${(props: { showMobile?: boolean }) =>
      props.showMobile ? 'inherit' : 'none'};
  }
`

const AbsoluteImg = ({
  img,
  top,
  left,
  bottom,
  right,
  alt,
  showDesktop,
  showTablet,
  showMobile,
  width,
  height,
}: {
  img: StaticImageData
  alt: string
  width: number
  height: number
  top?: number
  left?: number
  bottom?: number
  right?: number
  showMobile?: boolean
  showTablet?: boolean
  showDesktop?: boolean
}) => (
  <StyledContainer
    showDesktop={showDesktop}
    showTablet={showTablet}
    showMobile={showMobile}
    style={{ top, left, bottom, right }}
  >
    <Image src={img} width={width} height={height} alt={alt} />
  </StyledContainer>
)

export default AbsoluteImg
