import styled from 'styled-components'
import { mobileBr } from '../../utils/breakpoints'
const StyledDivider = styled.hr`
  margin: 20px 0px;
  width: 100%;
  border: ${(props: { thick?: number; color?: string }) =>
    `${props.thick || 1}px solid ${props.color || 'black'}`};

  @media screen and (max-width: ${mobileBr}) {
    margin: 10px 0px;
  }
`

export default StyledDivider
