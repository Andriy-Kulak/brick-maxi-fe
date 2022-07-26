import styled from 'styled-components'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import { Button, ButtonProps } from '@chakra-ui/react'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { images, teamProfiles } from '../../content'
import NextLink from 'next/link'
import { oswaldFont, montserratFont, weight } from '../utils/fontConfigs'

const { bold } = weight

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

const Container = styled.div`
  padding: 20px;

  z-index: 1000;
  display: inherit;
  overflow-y: visible;
  overflow: visible;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  position: sticky;
  top: 0;
  left: 0;
`

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 50px;
  > div {
    padding: 20px 25px 0px;
    width: 25%;
  }
  @media screen and (max-width: ${mobileBr}) {
    margin: 20px 0px;

    > div {
      padding: 0px 0px 10px;
      width: 50%;
    }

    > div:nth-child(odd) {
      padding-right: 15px;
    }

    > div:nth-child(even) {
      padding-right: 15px;
    }
  }
`

const Title = styled.h3`
  font-size: 24px;
  font-family: ${oswaldFont};
  text-align: center;
  color: white;
  font-weight: ${bold};
`

const SubTitle = styled.p`
  font-family: ${montserratFont};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  text-align: center;

  color: #808080;
`

const Xbutton = styled.div`
  position: absolute;
  top: 30px;
  right: 14px;
  cursor: pointer;
`

const TextContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  padding: 0px 150px;

  @media screen and (max-width: ${tabletBr}) {
    padding: 0px;
  }
`

const Main = styled.div`
  width: 100%;
  padding: 70px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 15px;

  @media screen and (max-width: ${tabletBr}) {
    position: relative;
    left: 0px;
  }
`

const MissionSection = () => {
  return (
    <Container>
      <Xbutton>
        <NextLink href="/">
          <Image
            width={24}
            height={24}
            src={images.xIcon}
            alt="mission-page-close"
          />
        </NextLink>
      </Xbutton>
      <Main>
        <ImageContainer>
          <Image
            height={125}
            width={34}
            src={images.missionTitle}
            alt="Mission"
          />
        </ImageContainer>
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
            can reach new audiences, especially those looking for a more stable
            pricing environment. Let’s explore new use cases for the chain and
            usher in the future.
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
    </Container>
  )
}

export default MissionSection
