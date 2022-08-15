import styled from 'styled-components'
import Image from 'next/image'
import { StyledP } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'
import { Button, ButtonProps } from '@chakra-ui/react'
import {
  laptopLargeBr,
  mobileBr,
  tabletBr,
  tabletBrPixels,
} from '../../utils/breakpoints'
import { images } from '../../content'

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
  margin: 20px;
  display: ${(props: { isMissionPageOpen: boolean }) =>
    props.isMissionPageOpen ? 'fixed' : 'none'};
  width: 100vw;
  height: 100vh;
  background-color: black;
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
            height={95}
            width={33}
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
      </Main>
    </Container>
  )
}

export default MissionSection
