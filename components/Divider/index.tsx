import styled from 'styled-components'
const StyledDivider = styled.hr`
  margin: 10px 0px;
  width: 100%;
  border: ${(props: { thick?: number; color?: string }) =>
    `${props.thick || 1}px solid ${props.color || 'black'}`};
`

export default StyledDivider
