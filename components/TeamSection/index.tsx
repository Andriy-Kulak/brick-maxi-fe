import styled from 'styled-components'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import { Button, ButtonProps } from '@chakra-ui/react'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { images, teamProfiles } from '../../content'
import { avenirNextCondensed, gillSans, weight } from '../utils/fontConfigs'

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
  margin: 20px 50px;

  > div {
    padding: 20px 25px 0px;
    width: 25%;
  }

  @media screen and (max-width: ${tabletBr}) {
    margin: 20px 0px;
  }

  @media screen and (max-width: ${mobileBr}) {
    > div {
      padding: 0px 0px 10px;
      width: 100%;
    }

    > div:nth-child(odd) {
      border: 2px solid green;
      padding-right: 15px;
    }

    > div:nth-child(even) {
      border: 2px solid red;
      padding-right: 15px;
    }
  }
`

const Title = styled.h3`
  font-size: 24px;
  font-family: ${avenirNextCondensed};
  text-align: center;
  color: white;
  font-weight: ${bold};
`

const SubTitle = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: ${semiBold};
  font-size: 16px;
  line-height: 16px;

  text-align: center;

  color: #808080;
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
  top: 40%;
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
      <Image
        alt="bg-art-2"
        src={images.bgArt1}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />

      <BlackC>
        <Main>
          <TextContainer>
            <StyledP color="white">
              <b>Brick Maxi</b> was born with a single purpose: the long-term
              sustainability of this beautiful culture.
              <br />
              <br />
              Just like you, we’ve become unlikely art collectors, spending our
              days discovering new artists, learning about defi, and making new
              friends. We’ve made it our mission to to broaden the reach of web3
              and create a system where artist and collector work in harmony.
              Collectors can confidently vault their favorite works and artists
              can reach new audiences, especially those looking for a more
              stable pricing environment. Let’s explore new use cases for the
              chain and usher in the future.
            </StyledP>
          </TextContainer>
          <FlexBox>
            {teamProfiles.map((x) => (
              <div key={x.key}>
                <Image
                  alt="img-sample"
                  width={350}
                  height={350}
                  src={images.imgSample}
                />
                <Title> {x.name}</Title>
                <SubTitle>{x.role}</SubTitle>
              </div>
            ))}
          </FlexBox>
        </Main>
      </BlackC>
    </BackgroundC>
  )
}

export default TeamSection
