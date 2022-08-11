import styled from 'styled-components'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import { Button, ButtonProps } from '@chakra-ui/react'
import { trimAddress } from '../../utils/helpers'
import { Link } from 'react-scroll'
import { laptopLargeBr, tabletBr } from '../../utils/breakpoints'

const StyledSticky = styled.div`
  top: 0;
  left: 0;
  height: 80px;
  position: sticky;
  background-color: black;
  color: white;
  width: 100%;
  z-index: 200;
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

    @media screen and (max-width: ${laptopLargeBr}) {
      margin: 0px 30px;
    }
  }
`

const MidFlexContainer = styled.div`
  // hide for table and mobile since we using hamburger
  @media screen and (max-width: ${tabletBr}) {
    display: none;
  }
  width: 33%;
  display: flex;
  justify-content: ${(props: { left?: boolean }) =>
    props.left === true ? 'flex-start' : 'flex-end'};
  align-items: center;
  flex-direction: row;

  div,
  a {
    margin: 0px 15px;
  }
`

const Nav = ({
  connectWallet,
  disconnect,
  address,
}: {
  connectWallet: () => Promise<void>
  disconnect: () => void
  address?: string
}) => {
  return (
    <StyledSticky>
      <TopFlexContainer>
        <MidFlexContainer left>
          <Link to="mission-section" smooth={true} duration={500} offset={-80}>
            <StyledP color="white">Mission</StyledP>
          </Link>
          <Link to="artist-section" smooth={true} duration={500} offset={-80}>
            <StyledP color="white">Artists</StyledP>
          </Link>
          <Link to="learn-section" smooth={true} duration={500} offset={-80}>
            <StyledP color="white">Learn</StyledP>
          </Link>
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
            {address && (
              <StyledButton onClick={() => disconnect()} colorScheme="black">
                Disconnect
              </StyledButton>
            )}
          </div>
          <div>
            <StyledButton onClick={() => connectWallet()} colorScheme="black">
              {address ? trimAddress(address) : 'Connect'}
            </StyledButton>
          </div>
        </MidFlexContainer>
      </TopFlexContainer>
    </StyledSticky>
  )
}

export default Nav
