import styled from 'styled-components'
import Image from 'next/image'
import { BasicButton } from '../index'
import { Container } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import Button from '@mui/material/Button'

const StyledNav = styled.div`
  top: 0;
  left: 0;
  height: 120px;
  position: sticky;
  background-color: black;
  color: white;
  width: 100%;
  z-index: 1;
`

const StyledButton = styled(Button)`
  border-radius: 30px;
  background-color: black;
  color: white;
  border: 2px solid white;
  :hover {
    background-color: grey;
  }
`

const TopFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  div {
    margin: 0px 60px;
  }
`

const MidFlexContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: ${(props: { left?: boolean }) =>
    props.left === true ? 'flex-start' : 'flex-end'};
  align-items: center;
  flex-direction: row;

  div {
    margin: 0px 15px;
  }
`

const StypedP = styled.p`
  font-size: 20px;
`

const Nav = () => {
  return (
    <StyledNav>
      <TopFlexContainer>
        <MidFlexContainer left>
          <div>
            <StypedP>test 1</StypedP>
          </div>
          <div>
            <StypedP>test 2</StypedP>
          </div>
        </MidFlexContainer>

        <div>
          <Image
            alt="Brick Maxi Logo"
            src={brickMaxiLogo}
            height={120}
            width={120}
          />
        </div>
        <MidFlexContainer>
          <div>
            <StypedP>test 3</StypedP>
          </div>
          <div>
            <StypedP>test 4</StypedP>
          </div>
          <div>
            <BasicButton
              variant="contained"
              onClick={() => window.alert('Clicked Connect')}
            >
              Connect
            </BasicButton>
          </div>
        </MidFlexContainer>
      </TopFlexContainer>
    </StyledNav>
  )
}

export default Nav
