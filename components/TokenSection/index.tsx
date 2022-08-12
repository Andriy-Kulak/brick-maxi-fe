import Image from 'next/image'

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
  Test,
  TextContainer,
} from './styles'
import { BeatLoader } from 'react-spinners'
const { bold } = weight

const { title, artist, description, mintPrice, type } = tokenSection

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

const mintText = (
  <TitleH4 color={black} weight={bold}>
    {mintPrice}
  </TitleH4>
)

const TokenSection = ({
  mint,
  isMintLoading,
}: {
  mint: () => void
  isMintLoading: boolean
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
              <div style={{ width: '33%' }}>
                {mintText}
                <br />
                <StyledSwitch />
              </div>
              <div style={{ width: '33%' }}>{remainingText}</div>
              <div style={{ width: '33%' }}>
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
        <MobileTextC>
          <MobileTitleH3>{title}</MobileTitleH3>
          <MobileStyledP weight={bold}>{artist}</MobileStyledP>
        </MobileTextC>
        {imageContainer}
        <Test>
          <div>
            {mintText}
            <StyledSwitch />
          </div>
          <div>{remainingText}</div>
        </Test>
        <FaqAcccordion
          content={[
            {
              key: 1,
              title: 'DETAILS',
              p: 'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at.',
            },
          ]}
        ></FaqAcccordion>
        {mintSection}
      </MobileView>
    </StyledBackground>
  )
}

export default TokenSection
