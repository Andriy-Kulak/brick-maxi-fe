import styled from 'styled-components'
import { gillSans } from '../utils/fontConfigs'

const Container = styled.div`
  height: 55px;
  width: 100%;
  background-color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  color: white;
  font-size: 10px;
  font-family: ${gillSans};
`

const Footer = () => {
  return (
    <Container>
      <span>
        <Text>© Brick Maxi, LLC 2022</Text>
        <Text>Terms of Service | Privacy Policy</Text>
      </span>
    </Container>
  )
}

export default Footer