import styled from 'styled-components'
import Button from '@mui/material/Button'

const BasicButton = styled(Button)`
  border-radius: 30px;
  background-color: black;
  color: white;
  border: 2px solid white;
  :hover {
    background-color: grey;
  }
`

export default BasicButton
