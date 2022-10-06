import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { stack as Menu } from 'react-burger-menu'
import Image from 'next/image'
import { StyledP, StyledButton } from '../sharedstyles'
import { trimAddress } from '../../utils/helpers'
import NextLink from 'next/link'
import {
  laptopLargeBr,
  tabletBr,
  tabletBrPixels,
} from '../../utils/breakpoints'
import { images } from '../../content'
import { weight } from '../utils/fontConfigs'

const StyledSticky = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  color: white;
  width: 100%;
  z-index: ${(props: { isMobileOpen: boolean }) =>
    props.isMobileOpen ? 300 : 200};

  display: flex;
`

const NavText = styled(StyledP)`
  font-size: 12px;
  font-weight: ${weight.semiBold};
`

const MobileNavText = styled(StyledP)`
  font-size: 14px;
  line-height: 23px;
`

const TopFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  height: 70px;
  width: 100%;
  background-color: black;

  div {
    margin: 5px 60px 0px;

    @media screen and (max-width: ${laptopLargeBr}) {
      margin: 5px 0px 0px;
    }

    @media screen and (max-width: ${tabletBr}) {
      margin: 5px 0px 0px;
    }
  }

  @media screen and (max-width: ${tabletBr}) {
    height: 70px;
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

  .nav-link {
    :hover {
      font-style: italic;
    }
  }
`

const MobileMenuC = styled.div`
  display: flex;
  @media screen and(min-width: ${tabletBr} ) {
    display: none;
  }
`

const Triangle = styled.div<{
  isLeft?: boolean
  isRight?: boolean
}>`
  width: 0;
  height: 0;
  border-left: ${(props) => (props.isLeft ? '50px solid transparent' : '')};
  border-right: ${(props) => (props.isRight ? '50px solid transparent' : '')};

  border-top: 70px solid black;

  @media screen and (max-width: ${tabletBr}) {
    display: none;
  }
`

const mobileContent = [
  { key: 1, name: 'Home', href: '/' },
  { key: 2, name: 'My Rewards', href: '/rewards' },
  { key: 3, name: 'Upcoming Drops', href: '/#upcoming-section' },
  { key: 4, name: 'Team', href: '/#team-section' },
  { key: 5, name: 'Learn', href: '/#learn-section' },
]

const Nav = ({
  connectWallet,
  disconnect,
  address,
  showLogo,
}: {
  connectWallet: () => Promise<void>
  disconnect: () => void
  showLogo: boolean
  address: string
}) => {
  const [pageWidth, setPageWidth] = useState(0)
  const [isHoverOnButton, setHover] = useState(false)
  const [isMobileOpen, setMobileMenu] = useState(false)
  useEffect(() => {
    setPageWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth)
    })
  }, [])

  const logSideLength = 55

  const isLoggedIn = address && address.length > 0
  const loggedInButtonText = isHoverOnButton
    ? 'Disconnect'
    : trimAddress(address)
  const desktopButtonText = isLoggedIn ? loggedInButtonText : 'Connect'

  const desktopOnClick = async () => {
    console.log('are we hitting this isLoggedIn', isLoggedIn)
    if (isLoggedIn) {
      return disconnect()
    } else {
      return connectWallet()
    }
  }

  return (
    <>
      <StyledSticky isMobileOpen={isMobileOpen}>
        <Triangle isLeft />
        <TopFlexContainer>
          {pageWidth === 0 && <></>}
          {pageWidth >= tabletBrPixels && (
            <>
              <MidFlexContainer left>
                <NextLink href="/#upcoming-section">
                  <NavText className="nav-link" color="white">
                    Upcoming Drops
                  </NavText>
                </NextLink>
                <NextLink href="/#team-section">
                  <NavText className="nav-link" color="white">
                    Team
                  </NavText>
                </NextLink>

                <NextLink href="/#learn-section">
                  <NavText className="nav-link" color="white">
                    Learn
                  </NavText>
                </NextLink>
              </MidFlexContainer>

              <div style={{ display: showLogo ? '' : 'none' }}>
                <NextLink href="/">
                  <Image
                    className="nav-link"
                    alt="Brick Maxi Logo"
                    src={images.brickMaxiLogo}
                    height={logSideLength}
                    width={logSideLength}
                  />
                </NextLink>
              </div>
              <MidFlexContainer>
                <NextLink href="/rewards">
                  <NavText color="white" className="nav-link">
                    My Rewards
                  </NavText>
                </NextLink>
                <div>
                  <StyledButton
                    fontSize="12px"
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    onClick={() => desktopOnClick()}
                    colorScheme="black"
                  >
                    {desktopButtonText}
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
                  zIndex: 200,
                  display: showLogo && !isMobileOpen ? '' : 'none',
                }}
              >
                <NextLink href="/">
                  <Image
                    className="nav-link"
                    alt="Brick Maxi Logo"
                    src={images.brickMaxiLogo}
                    height={logSideLength}
                    width={logSideLength}
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
                      fontSize="12px"
                      onClick={() => {
                        setMobileMenu(false)
                        connectWallet()
                      }}
                      colorScheme="black"
                    >
                      {address ? trimAddress(address) : 'Connect'}
                    </StyledButton>
                  </div>

                  {mobileContent.map((x) => (
                    <div key={x.key}>
                      <NextLink href={x.href}>
                        <MobileNavText
                          className="nav-link"
                          color="white"
                          onClick={() => setMobileMenu(false)}
                        >
                          {x.name}
                        </MobileNavText>
                      </NextLink>
                    </div>
                  ))}
                  {address && (
                    <div style={{ paddingTop: '50px' }}>
                      <StyledButton
                        fontSize="12px"
                        onClick={() => {
                          setMobileMenu(false)
                          disconnect()
                        }}
                        colorScheme="black"
                      >
                        Sign Out
                      </StyledButton>
                    </div>
                  )}
                </Menu>
              </MobileMenuC>
            </>
          )}
        </TopFlexContainer>
        <Triangle isRight />
      </StyledSticky>
    </>
  )
}

export default Nav
