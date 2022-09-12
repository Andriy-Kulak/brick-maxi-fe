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

const StyledSticky = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  background-color: black;
  color: white;
  width: 100%;
  z-index: ${(props: { isMobileOpen: boolean }) =>
    props.isMobileOpen ? 300 : 200};
`

const NavText = styled(StyledP)`
  font-size: 16px;
`

const MobileNavText = styled(StyledP)`
  font-size: 20px;
  line-height: 23px;
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

  @media screen and (max-width: ${tabletBr}) {
    height: 75px;
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

const mobileContent = [
  { key: 1, name: 'Home', href: '/' },
  // { key: 2, name: 'Artists', href: '/#artist-section' },
  // { key: 3, name: 'Learn', href: '/#how-it-works-section' },
  { key: 4, name: 'Rewards', href: '/rewards' },
  { key: 5, name: 'Team', href: '/#team-section' },
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
    <>
      <StyledSticky isMobileOpen={isMobileOpen}>
        <TopFlexContainer>
          {pageWidth === 0 && <></>}
          {pageWidth >= tabletBrPixels && (
            <>
              <MidFlexContainer left>
                <NextLink href="/#team-section">
                  <NavText className="nav-link" color="white">
                    Team
                  </NavText>
                </NextLink>
                <NextLink href="/#upcoming-section">
                  <NavText className="nav-link" color="white">
                    Upcoming Drops
                  </NavText>
                </NextLink>
                <NextLink href="/#how-it-works-section">
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
                  zIndex: 200,
                  display: showLogo && !isMobileOpen ? '' : 'none',
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
      </StyledSticky>
    </>
  )
}

export default Nav
