import styled from 'styled-components'
import { mobileBr } from '../../utils/breakpoints'
const StyledDivider = styled.hr<{
  marginMobile?: string
  marginDesktop?: string
  thick?: number
  color?: string
}>`
  margin: ${(props: { marginDesktop?: string }) =>
    props.marginDesktop || '20px 0px'};
  width: 100%;
  border: ${(props: { thick?: number; color?: string }) =>
    `${props.thick || 1}px solid ${props.color || 'black'}`};

  @media screen and (max-width: ${mobileBr}) {
    margin: ${(props: { marginMobile?: string }) =>
      props.marginMobile || '10px 0px'};
  }
`

export default StyledDivider
