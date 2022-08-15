import styled from 'styled-components'
import Image from 'next/image'
import { StyledP, TitleH1 } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import { Button, ButtonProps } from '@chakra-ui/react'
import {
  laptopLargeBr,
  mobileBr,
  tabletBr,
  tabletBrPixels,
} from '../../utils/breakpoints'
import { images, teamProfiles } from '../../content'
import { avenirNextCondensed, gillSans, weight } from '../utils/fontConfigs'

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
  display: ${(props: { isMissionPageOpen: boolean }) =>
    props.isMissionPageOpen ? 'inherited' : 'none'};
  overflow-y: visible;
  overflow: visible;
  top: 0;
  left: 0;
  width: 100vw;
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
    padding: 20px 15px 0px;
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
  font-family: ${avenirNextCondensed};
  text-align: center;
  color: white;
  font-weight: ${bold};
`

const SubTitle = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  color: #808080;
`

const Xbutton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

const TextContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 700px;
`

const Main = styled.div`
  width: 100%;
  padding: 70px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const MissionSection = ({
  setMissionPage,
  isMissionPageOpen,
}: {
  setMissionPage: (state: boolean) => void
  isMissionPageOpen: boolean
}) => {
  console.log('isMissionPageOpen', isMissionPageOpen)

  return (
    <Container isMissionPageOpen={isMissionPageOpen}>
      <Xbutton onClick={() => setMissionPage(false)}>
        <Image
          width={29}
          height={29}
          src={images.xIcon}
          alt="mission-page-close"
        />
      </Xbutton>
      <Main>
        <div style={{ position: 'relative' }}>
          <Image
            height={105}
            width={34}
            src={images.missionTitle}
            alt="Mission"
          />
        </div>
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
                width={365}
                height={365}
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
