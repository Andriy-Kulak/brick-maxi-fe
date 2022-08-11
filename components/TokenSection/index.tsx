import Image from 'next/image'
import styled from 'styled-components'
import {
  Main,
  TitleH3,
  ColorBackground,
  FlexRow,
  TitleH4,
  StyledP,
} from '../sharedstyles'

import { Divider, Select, StyledSwitch, MintBtn } from '../'

import { images } from '../../content'
import { weight } from '../utils/fontConfigs'
import { black } from '../utils/colors'
import { laptopSmallBr } from '../../utils/breakpoints'
const { bold } = weight

const ImageContainer = styled.div`
  margin: 0px 60px;

  @media screen and (max-width: ${laptopSmallBr}) {
    margin: 0px 20px;
  }
  border: 2px solid red;
`

const TextContainer = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  width: 40%;

  @media screen and (max-width: ${laptopSmallBr}) {
    width: 50%;
  }
`

const LiveSpan = styled.span`
  background-color: black;
  color: white;
  font-weight: 400;
  margin-right: 10px;
  padding: 0px 10px;
`

const TokenSection = () => (
  <ColorBackground color="white">
    <Main>
      <FlexRow>
        <ImageContainer>
          <div>
            <StyledP weight={700}>
              <LiveSpan>LIVE</LiveSpan>
              04/28/1983 4:40PM PST
            </StyledP>
          </div>

          <Image
            alt="art image 1"
            width={500}
            height={500}
            src={images.artImg}
          />
        </ImageContainer>
        <TextContainer>
          <TitleH3>TOKEN NAME</TitleH3>
          <div>
            <TitleH4>ARTIST</TitleH4>
            <StyledP weight={bold}>bottoproject</StyledP>
            <br />
          </div>

          <TitleH4>DESCRIPTION</TitleH4>
          <StyledP>
            This is the info that goes here that is the info that people want to
            know when they are looking for all the info about what they are
            looking at.
          </StyledP>
          <Divider />

          <FlexRow>
            <div style={{ width: '33%' }}>
              <TitleH4 color={black} weight={bold}>
                MINT PRICE 1.5Ξ
              </TitleH4>
              <StyledSwitch />
            </div>
            <div style={{ width: '33%' }}>
              <TitleH4>REMAINING</TitleH4>
              <StyledP weight={bold}>100 / 100</StyledP>
            </div>
            <div style={{ width: '33%' }}>
              <TitleH4>ASSET TYPE</TitleH4>
              <StyledP weight={bold}>Residential</StyledP>
            </div>
          </FlexRow>
          <Divider thick={1} />
          <div style={{ display: 'flex' }}>
            <Select />
            <MintBtn />
          </div>
        </TextContainer>
      </FlexRow>
    </Main>
  </ColorBackground>
)

export default TokenSection
