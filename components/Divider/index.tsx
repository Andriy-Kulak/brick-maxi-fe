import styled from 'styled-components'
import { mobileBr } from '../../utils/breakpoints'
const StyledDivider = styled.hr<{
  margin?: string
  thick?: number
  color?: string
}>`
  margin: ${(props: { margin?: string }) => props.margin || '20px 0px'};
  width: 100%;
  border: ${(props: { thick?: number; color?: string }) =>
    `${props.thick || 1}px solid ${props.color || 'black'}`};

  @media screen and (max-width: ${mobileBr}) {
    margin: ${(props: { margin?: string }) => props.margin || '10px 0px'};
  }
`

export default StyledDivider
