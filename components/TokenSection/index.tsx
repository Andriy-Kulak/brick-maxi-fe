import Image from 'next/image'
import styled from 'styled-components'
import { TitleH3, FlexRow, TitleH4, StyledP } from '../sharedstyles'
import FaqAcccordion from '../FaqAcccordion'
import { Divider, Select, StyledSwitch, MintBtn } from '../'

import { images, tokenSection } from '../../content'
import { weight } from '../utils/fontConfigs'
import { black } from '../utils/colors'
import {
  DesktopView,
  ImageContainer,
  LiveSpan,
  MintSectionC,
  MobileStyledP,
  MobileTextC,
  MobileTitleH3,
  MobileView,
  StyledBackground,
  SwitchC,
  TextContainer,
} from './styles'
import { BeatLoader } from 'react-spinners'
const { bold } = weight

const { title, artist, description, type } = tokenSection

const ApeContainer = styled.div`
  display: flex;
  > h4:first-child {
    margin-right: 4px;
  }
`

const imageContainer = (
  <ImageContainer>
    <StyledP weight={700}>
      <LiveSpan>LIVE</LiveSpan>
      04/28/1983 4:40PM PST
    </StyledP>
    <Image alt="art image 1" width={500} height={500} src={images.artImg} />
  </ImageContainer>
)

const remainingText = (
  <>
    <TitleH4>REMAINING</TitleH4>
    <StyledP weight={bold}>100 / 100</StyledP>
  </>
)

const TokenSection = ({
  mint,
  isMintLoading,
  currencySwitch,
  isEth,
}: {
  mint: () => void
  isMintLoading: boolean
  currencySwitch: () => void
  isEth: boolean
}) => {
  const mintSection = () => (
    <MintSectionC>
      <Select />
      {isMintLoading === true ? (
        <BeatLoader
          speedMultiplier={0.5}
          cssOverride={{ margin: '30px 0px 0px 20px' }}
        />
      ) : (
        <MintBtn mint={mint} />
      )}
    </MintSectionC>
  )

  const mintText = isEth ? (
    <TitleH4 color={black} weight={bold} style={{ margin: '5px 0px' }}>
      MINT PRICE:1.5Ξ
    </TitleH4>
  ) : (
    <ApeContainer>
      <TitleH4 color={black} weight={bold}>
        MINT PRICE: 200
      </TitleH4>
      <Image
        style={{ margin: '0px 0px' }}
        width={25}
        height={25}
        src={images.apecoinLogo}
        alt="apecoin-logo"
      />
    </ApeContainer>
  )

  return (
    <StyledBackground>
      <DesktopView>
        <FlexRow>
          {imageContainer}
          <TextContainer>
            <TitleH3>{title}</TitleH3>
            <div>
              <TitleH4>ARTIST</TitleH4>
              <StyledP weight={bold}>{artist}</StyledP>
              <br />
            </div>

            <TitleH4>DESCRIPTION</TitleH4>
            <StyledP>{description}</StyledP>
            <Divider />

            <FlexRow>
              <div style={{ width: '40%' }}>
                {mintText}
                <br />
                <StyledSwitch currencySwitch={currencySwitch} />
              </div>
              <div style={{ width: '30%' }}>{remainingText}</div>
              <div style={{ width: '30%' }}>
                <TitleH4>ASSET TYPE</TitleH4>
                <StyledP weight={bold}>{type}</StyledP>
              </div>
            </FlexRow>
            <Divider thick={1} />
            {mintSection()}
          </TextContainer>
        </FlexRow>
      </DesktopView>
      <MobileView>
        <>
          <MobileTextC>
            <MobileTitleH3>{title}</MobileTitleH3>
            <MobileStyledP weight={bold}>{artist}</MobileStyledP>
          </MobileTextC>
          {imageContainer}
          <SwitchC>
            <div>
              {mintText}
              <StyledSwitch currencySwitch={currencySwitch} />
            </div>
            <div>{remainingText}</div>
          </SwitchC>
          <FaqAcccordion
            content={[
              {
                key: 1,
                title: 'DETAILS',
                p: 'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at.',
              },
            ]}
          ></FaqAcccordion>
          {mintSection()}
        </>
      </MobileView>
    </StyledBackground>
  )
}

export default TokenSection
