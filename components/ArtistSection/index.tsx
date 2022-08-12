import styled from 'styled-components'
import Image from 'next/image'
import { StyledP, TitleH3 } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'
import imgSample from '../../public/assets/brickMaxiSample.png'
import { mobileBr, tabletBr } from '../../utils/breakpoints'

const { bold } = weight

const FlexBox = styled.div`
  display: flex;

  > div {
    margin: 20px 25px 0px;
  }
  @media screen and (max-width: ${mobileBr}) {
    flex-direction: column;
    justify-content: center;
  }
`

const Container = styled.div`
  padding: 5rem 0;
  height: 100%;
  min-height: 100%;
  background-color: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${mobileBr}) {
    height: auto;
    height: auto;
    padding: 2rem 0;
  }
`

const StyledText = styled(StyledP)`
  width: 40%;
  text-align: center;
  color: white;

  @media screen and (max-width: ${tabletBr}) {
    width: 65%;
  }

  @media screen and (max-width: ${mobileBr}) {
    width: 80%;
  }
`

const ArtistSection = ({
  content,
}: {
  content: { key: number; name: string }[]
}) => (
  <Container id="artist-section">
    <TitleH3 color="white">BUILDING THE FUTURE OF NFTs</TitleH3>
    <TitleH3 color="white">WITH OUR INCREDIBLE PARTNERS</TitleH3>
    <StyledText>
      We&apos;re a boutique marketplace, carefully curating drops with the most
      hyped artists of our time. To be eligible for upcoming mints you must hold
      at least one token from each of our past mints.
    </StyledText>
    <FlexBox>
      {content.map((x) => (
        <div key={x.key}>
          <Image alt="img-sample" width={365} height={365} src={imgSample} />
          <StyledP color="white" weight={bold} style={{ textAlign: 'left' }}>
            {x.name}
          </StyledP>
        </div>
      ))}
    </FlexBox>
  </Container>
)

export default ArtistSection
