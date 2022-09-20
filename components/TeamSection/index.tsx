import styled from 'styled-components'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import { Button, ButtonProps } from '@chakra-ui/react'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { images, teamProfiles } from '../../content'
import { avenirNextCondensed, gillSans, weight } from '../utils/fontConfigs'
import { NextDesktopBgImg, NextMobileBgImg } from '../BgImages'

const { bold, semiBold } = weight

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

const BlackC = styled.div`
  background-color: black;
  width: 100%;
  z-index: 2;
  height: 100%;
  position: relative;
`

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 20px 50px;

  > div {
    padding: 20px 25px 0px;
    width: 33%;
  }

  @media screen and (max-width: ${tabletBr}) {
    margin: 20px 0px;
  }

  @media screen and (max-width: ${mobileBr}) {
    > div {
      padding: 0px 0px 10px;
      width: 100%;
    }
  }
`

const Title = styled.h3`
  font-size: 24px;
  font-family: ${avenirNextCondensed};
  text-align: center;
  color: white;
  font-weight: ${bold};

  @media screen and (max-width: ${mobileBr}) {
    font-size: 20px;
    line-height: 30px;
  }
`

const TeamLinks = styled.div`
  margin-top: 5px;
  > a {
    margin: 5px;
  }
`

const SubTitle = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: ${bold};
  font-size: 15px;
  line-height: 18px;

  text-align: center;

  color: #808080;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 14px;
    line-height: 17px;
  }
`

const TextContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  z-index: 1;
  padding: 0px 150px;

  @media screen and (max-width: ${tabletBr}) {
    padding: 0px 0px;
  }
`

const Main = styled.div`
  width: 100%;
  padding: 50px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: ${tabletBr}) {
    padding: 20px;
  }
`

const DesktopImgC = styled.div`
  position: absolute;
  top: 40%;
  left: 25px;
  z-index: 2;

  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const MobileImgC = styled.div`
  position: absolute;
  top: 120px;
  left: 12px;
  z-index: 2;

  @media screen and (min-width: ${mobileBr}) {
    display: none;
  }
`

const BackgroundC = styled.div`
  position: relative;
  min-height: 70vh;
  background-color: black;
  padding: 70px 80px;

  @media screen and (max-width: ${mobileBr}) {
    padding: 38px;
  }
`

const TeamSection = () => {
  return (
    <BackgroundC id="team-section">
      <DesktopImgC>
        <Image height={92} width={30} src={images.teamTitle} alt="Team" />
      </DesktopImgC>

      <MobileImgC>
        <Image height={52} width={17} src={images.teamTitle} alt="Team" />
      </MobileImgC>
      <NextDesktopBgImg
        alt="bg-art-2"
        src={images.bgArt1}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <NextMobileBgImg
        alt="bg-art-2"
        src={images.teamBgMobile}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />

      <BlackC>
        <Main>
          <TextContainer>
            <StyledP color="white">
              <b>Brick Maxi</b> was born with a simple purpose: the growth and
              sustainability of this beautiful culture.
              <br />
              <br />
              Just like you, we’ve become unlikely art collectors, spending our
              days discovering new artists, learning about defi, and making
              friends. We’ve made it our mission to broaden the reach of web3,
              innovate, and help drive the space forward. Join us as we explore
              new use cases for the chain.
            </StyledP>
          </TextContainer>
          <FlexBox>
            {teamProfiles.map((x) => (
              <div key={x.key}>
                <Image
                  alt="team images"
                  width={350}
                  height={350}
                  src={x.imgSrc}
                />
                <Title>{x.name}</Title>
                <SubTitle>{x.role}</SubTitle>
                <TeamLinks>
                  <a href={x.twitterUrl} target="blank">
                    <Image
                      src={images.twitterLogo}
                      width={20}
                      height={20}
                      alt="twitter logo"
                    />
                  </a>
                  {x.openseaUrl && (
                    <a href={x.openseaUrl} target="blank">
                      <Image
                        src={images.openseaLogo}
                        width={20}
                        height={20}
                        alt="opensea logo"
                      />
                    </a>
                  )}
                </TeamLinks>
              </div>
            ))}
          </FlexBox>
        </Main>
      </BlackC>
    </BackgroundC>
  )
}

export default TeamSection
