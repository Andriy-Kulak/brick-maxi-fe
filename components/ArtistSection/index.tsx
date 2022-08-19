import styled from 'styled-components'
import Image from 'next/image'
import { StyledP, TitleH3 } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { images } from '../../content'

const { bold } = weight

const FlexBox = styled.div`
  position: relative;
  display: flex;
  margin: 0px 45px;

  > div {
    margin: 20px 20px 0px;
  }
  @media screen and (max-width: ${mobileBr}) {
    flex-direction: column;
    justify-content: center;
    margin: 0px 35px;
  }
`

const Container = styled.div`
  position: relative;
  padding: 5rem 0;
  height: 100%;
  min-height: 100%;
  background-color: black;
  /* flex: 1; */
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
    width: 70%;
  }
`

const StyledTitle = styled(TitleH3)`
  max-width: 700px;
  text-align: center;

  @media screen and (max-width: ${tabletBr}) {
    max-width: 350px;
  }

  @media screen and (max-width: ${mobileBr}) {
    max-width: 270px;
  }
`

const TitleImgMobile = styled.div`
  display: none;

  @media screen and (max-width: ${mobileBr}) {
    display: inherit;
    position: absolute;
    top: 30px;
    left: 10px;
  }
`

const TitleImgDesktop = styled.div`
  position: absolute;
  left: 25px;
  top: 45%;
  @media screen and (max-width: ${tabletBr}) {
    top: 15%;
  }
  @media screen and (max-width: ${mobileBr}) {
    display: none;
  }
`

const ArtistSection = ({
  content,
}: {
  content: { key: number; name: string }[]
}) => (
  <Container id="artist-section">
    <TitleImgDesktop>
      <Image src={images.artistsTitle} width={35} height={125} alt="artists" />
    </TitleImgDesktop>
    <TitleImgMobile>
      <Image src={images.artistsTitle} width={25} height={100} alt="artists" />
    </TitleImgMobile>
    <StyledTitle color="white">
      BUILDING THE FUTURE OF NFTs WITH OUR INCREDIBLE PARTNERS
    </StyledTitle>
    <StyledText>
      We&apos;re a boutique marketplace, carefully curating drops with the most
      hyped artists of our time. To be eligible for upcoming mints you must hold
      at least one token from each of our past mints.
    </StyledText>
    <FlexBox>
      {content.map((x) => (
        <div key={x.key}>
          <Image
            alt="img-sample"
            width={365}
            height={365}
            src={images.imgSample}
          />
          <StyledP color="white" weight={bold} style={{ textAlign: 'left' }}>
            {x.name}
          </StyledP>
        </div>
      ))}
    </FlexBox>
  </Container>
)

export default ArtistSection
