import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'
import { mobileBr, tabletBr } from '../../utils/breakpoints'

const StyledContainer = styled.div<{
  hideMobile?: boolean
  hideTablet?: boolean
}>`
  position: absolute;

  @media screen and (max-width: ${tabletBr}) {
    display: ${(props: { hideTablet?: boolean }) =>
      props.hideTablet ? 'none' : 'inheit'};
  }

  @media screen and (max-width: ${mobileBr}) {
    display: ${(props: { hideMobile?: boolean }) =>
      props.hideMobile ? 'none' : 'inheit'};
  }
`

const AbsoluteImg = ({
  img,
  top,
  left,
  bottom,
  right,
  alt,
  hideMobile,
  hideTablet,
}: {
  img: StaticImageData
  alt: string
  top?: number
  left?: number
  bottom?: number
  right?: number
  hideMobile?: boolean
  hideTablet?: boolean
}) => (
  <StyledContainer
    hideMobile={hideMobile}
    hideTablet={hideTablet}
    style={{ top, left, bottom, right }}
  >
    <Image src={img} width={15} height={20} alt={alt} />
  </StyledContainer>
)

export default AbsoluteImg
