import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { stack as Menu } from 'react-burger-menu'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import { Button, ButtonProps } from '@chakra-ui/react'
import { trimAddress } from '../../utils/helpers'
import { Link } from 'react-scroll'
import {
  laptopLargeBr,
  tabletBr,
  tabletBrPixels,
} from '../../utils/breakpoints'

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

const MobileMenuC = styled.div`
  @media screen and(min-width: ${tabletBr} ) {
    display: none;
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
  const [pageWidth, setPageWidth] = useState(0)
  const [isMobileOpen, setMobileMenu] = useState(false)
  useEffect(() => {
    setPageWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth)
    })
  }, [])

  return (
    <StyledSticky>
      <TopFlexContainer>
        {pageWidth === 0 && <></>}
        {pageWidth >= tabletBrPixels && (
          <>
            <MidFlexContainer left>
              <Link
                to="mission-section"
                smooth={true}
                duration={500}
                offset={-80}
              >
                <StyledP color="white">Mission</StyledP>
              </Link>
              <Link
                to="artist-section"
                smooth={true}
                duration={500}
                offset={-80}
              >
                <StyledP color="white">Artists</StyledP>
              </Link>
              <Link
                to="learn-section"
                smooth={true}
                duration={500}
                offset={-80}
              >
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
                  <StyledButton
                    onClick={() => disconnect()}
                    colorScheme="black"
                  >
                    Disconnect
                  </StyledButton>
                )}
              </div>
              <div>
                <StyledButton
                  onClick={() => connectWallet()}
                  colorScheme="black"
                >
                  {address ? trimAddress(address) : 'Connect'}
                </StyledButton>
              </div>
            </MidFlexContainer>
          </>
        )}
        {pageWidth < tabletBrPixels && (
          <>
            <div>
              <Image
                alt="Brick Maxi Logo"
                src={brickMaxiLogo}
                height={80}
                width={80}
              />
            </div>
            <MobileMenuC>
              <Menu
                right
                width={'100%'}
                pageWrapId="for-menu-wrap"
                isOpen={isMobileOpen}
                onOpen={() => setMobileMenu(true)}
              >
                <div>
                  <StyledButton
                    onClick={() => {
                      setMobileMenu(false)
                      connectWallet()
                    }}
                    colorScheme="black"
                  >
                    {address ? trimAddress(address) : 'Connect'}
                  </StyledButton>
                </div>
                <Link
                  to="mission-section"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenu(false)}
                >
                  <StyledP color="white">Mission</StyledP>
                </Link>
                <Link
                  to="artist-section"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenu(false)}
                >
                  <StyledP color="white">Artists</StyledP>
                </Link>
                <Link
                  to="learn-section"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenu(false)}
                >
                  <StyledP color="white">Learn</StyledP>
                </Link>
              </Menu>
            </MobileMenuC>
          </>
        )}
      </TopFlexContainer>
    </StyledSticky>
  )
}

export default Nav
