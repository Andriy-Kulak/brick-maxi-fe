import styled from 'styled-components'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import { Button, ButtonProps } from '@chakra-ui/react'

const StyledNav = styled.div`
  top: 0;
  left: 0;
  height: 80px;
  position: sticky;
  background-color: black;
  color: white;

  width: 100%;
  z-index: 20;
`

export const StyledButton = styled(Button).attrs({
  colorScheme: 'black',
  border: '2px',
  borderColor: 'white',
  borderRadius: '100px',
} as ButtonProps)`
  border-radius: 30px;
  background-color: black;
  color: white;
  border: 2px solid white;
  :hover {
    background-color: grey;
  }
` as typeof Button

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

const Nav = () => {
  return (
    <StyledNav>
      <TopFlexContainer>
        <MidFlexContainer left>
          <div>
            <StyledP color="white">Mission</StyledP>
          </div>
          <div>
            <StyledP color="white">Artists</StyledP>
          </div>
          <div>
            <StyledP color="white">Learn</StyledP>
          </div>
        </MidFlexContainer>

        <div>
          <Image
            alt="Brick Maxi Logo"
            src={brickMaxiLogo}
            height={80}
            width={80}
          />
        </div>
        <MidFlexContainer>
          <div>
            <StyledP color="white">Rewards</StyledP>
          </div>
          <div>
            <StyledButton
              onClick={() => window.alert('Clicked Connect')}
              colorScheme="black"
            >
              Connect
            </StyledButton>
          </div>
        </MidFlexContainer>
      </TopFlexContainer>
    </StyledNav>
  )
}

export default Nav
