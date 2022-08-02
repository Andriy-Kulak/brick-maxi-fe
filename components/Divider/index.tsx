import styled from 'styled-components'
import { Divider } from '@mui/material'
const StyledDivider = styled(Divider)`
  border: ${(props: { thick?: number }) =>
    props.thick ? `${props.thick}px solid black` : `1px solid black`};
`

export default StyledDivider
