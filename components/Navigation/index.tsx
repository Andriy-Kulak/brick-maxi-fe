import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { stack as Menu } from 'react-burger-menu'
import Image from 'next/image'
import { StyledP, StyledButton } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import { trimAddress } from '../../utils/helpers'
import NextLink from 'next/link'
import {
  laptopLargeBr,
  tabletBr,
  tabletBrPixels,
} from '../../utils/breakpoints'
import { images } from '../../content'
import MissionSection from '../MissionSection'

const StyledSticky = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  background-color: black;
  color: white;
  width: 100%;
  z-index: 200;
`

const NavText = styled(StyledP)`
  font-size: 16px;
`

const TopFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  height: 85px;

  div {
    margin: 5px 60px 0px;

    @media screen and (max-width: ${laptopLargeBr}) {
      margin: 5px 30px 0px;
    }

    @media screen and (max-width: ${tabletBr}) {
      margin: 5px 0px 0px;
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
  a,
  .nav-link {
    margin: 0px 15px;
  }
`

const MobileMenuC = styled.div`
  display: flex;
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
  const [isMissionPageOpen, setMissionPage] = useState(false)
  const [pageWidth, setPageWidth] = useState(0)
  const [isMobileOpen, setMobileMenu] = useState(false)
  useEffect(() => {
    setPageWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth)
    })
  }, [])

  console.log('isMobileOpen', isMobileOpen)

  return (
    <>
      {/* <MissionSection
        setMissionPage={setMissionPage}
        isMissionPageOpen={isMissionPageOpen}
      /> */}
      <StyledSticky>
        <TopFlexContainer>
          {pageWidth === 0 && <></>}
          {pageWidth >= tabletBrPixels && (
            <>
              <MidFlexContainer left>
                <NextLink href="/mission">
                  <NavText className="nav-link" color="white">
                    Mission
                  </NavText>
                </NextLink>
                <NextLink href="/#artist-section">
                  <NavText className="nav-link" color="white">
                    Artists
                  </NavText>
                </NextLink>
                <NextLink href="/#learn-section">
                  <NavText className="nav-link" color="white">
                    Learn
                  </NavText>
                </NextLink>
              </MidFlexContainer>

              <div>
                <NextLink href="/">
                  <Image
                    className="nav-link"
                    alt="Brick Maxi Logo"
                    src={brickMaxiLogo}
                    height={77}
                    width={77}
                  />
                </NextLink>
              </div>
              <MidFlexContainer>
                <div>
                  <NextLink href="/rewards">
                    <NavText color="white" className="nav-link">
                      Rewards
                    </NavText>
                  </NextLink>
                </div>
                <div>
                  {address && (
                    <StyledButton
                      onClick={() => disconnect()}
                      colorScheme="black"
                    >
                      Disc.
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
              <div
                style={{
                  position: 'absolute',
                  marginTop: '7px',
                  marginLeft: '19px',
                  zIndex: 100001,
                }}
              >
                <NextLink href="/">
                  <Image
                    className="nav-link"
                    alt="Brick Maxi Logo"
                    src={brickMaxiLogo}
                    height={65}
                    width={65}
                  />
                </NextLink>
              </div>
              <MobileMenuC>
                <Menu
                  customBurgerIcon={
                    <Image
                      width={29}
                      height={18}
                      src={images.burgerIcon}
                      alt="mobile-menu-open"
                    />
                  }
                  customCrossIcon={
                    <Image
                      width={29}
                      height={29}
                      src={images.xIcon}
                      alt="mobile-menu-close"
                    />
                  }
                  right
                  width={'100%'}
                  pageWrapId="for-menu-wrap"
                  isOpen={isMobileOpen}
                  onClose={() => setMobileMenu(false)}
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
                  <div>
                    <NextLink href="/#artist-section">
                      <NavText
                        className="nav-link"
                        color="white"
                        onClick={() => setMobileMenu(false)}
                      >
                        Artists
                      </NavText>
                    </NextLink>
                  </div>
                  <div>
                    <NextLink href="/#learn-section">
                      <StyledP
                        className="nav-link"
                        color="white"
                        onClick={() => setMobileMenu(false)}
                      >
                        Learn
                      </StyledP>
                    </NextLink>
                  </div>

                  <div>
                    <NextLink href="/rewards">
                      <StyledP
                        className="nav-link"
                        color="white"
                        onClick={() => setMobileMenu(false)}
                      >
                        Rewards
                      </StyledP>
                    </NextLink>
                  </div>
                  <div>
                    <NextLink href="/mission">
                      <StyledP className="nav-link" color="white">
                        Mission
                      </StyledP>
                    </NextLink>
                  </div>
                </Menu>
              </MobileMenuC>
            </>
          )}
        </TopFlexContainer>
      </StyledSticky>
    </>
  )
}

export default Nav
