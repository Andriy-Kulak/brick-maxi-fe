import styled from 'styled-components'
import { Divider } from '@mui/material'
const StyledDivider = styled(Divider)`
  margin: 15px 0px;
  width: 100%;
  border: ${(props: { thick?: number; color?: string }) =>
    `${props.thick || 1}px solid ${props.color || 'black'}`};
`

export default StyledDivider
