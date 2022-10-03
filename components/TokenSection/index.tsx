import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import { Tooltip } from '@chakra-ui/react'
import 'react-circular-progressbar/dist/styles.css'
import { TitleH3, FlexRow, TitleH4, StyledP } from '../sharedstyles'
import FaqAcccordion from '../FaqAcccordion'
import { Divider, StyledSwitch } from '../'

import { images, tokenSection } from '../../content'
import { montserratFont, oswaldFont, weight } from '../utils/fontConfigs'
import { black, grey1 } from '../utils/colors'
import {
  DesktopView,
  ImageContainer,
  LiveSpan,
  MobileTextC,
  MobileTitleH3,
  MobileView,
  SwitchC,
  TextContainer,
} from './styles'

import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { MintStatus } from '../../utils/types/reactState'
import MintSection from '../MintSection'
import { Separator } from '../Separator'
import AbsoluteImg from '../AbsoluteImg'
const { bold } = weight

const { title, artist, description } = tokenSection

export const StyledBackground = styled.div`
  background-color: white;
  padding: 0 20px;

  @media screen and (max-width: ${tabletBr}) {
    height: auto;
  }
`

const ApeContainer = styled.div`
  display: flex;
  align-items: center;
  > h4:first-child {
    margin-right: 4px;
  }
`

const StyledPItalic = styled.p`
  font-size: 10px;
  font-family: ${montserratFont};
  font-weight: 600;
  font-style: italic;
  width: 100%;
  text-align: left;
`

const StyledProgress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div:first-child {
    width: 65px;
    margin-right: 10px;
  }

  > div:nth-child(3) {
    margin-left: 5px;
    height: 20px;
  }
`

const ArtLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > a {
    margin-left: 3px;
  }
`

const MiniTextC = styled.div`
  background-color: black;
  width: 100%;
  padding: 20px 50px 0px;
  margin: 0;

  @media screen and (max-width: ${mobileBr}) {
    padding: 10px 0px 0px;
  }
`

const TitleH2Small = styled.h2`
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: italic;
  font-family: ${oswaldFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media screen and (max-width: ${mobileBr}) {
    font-size: 17px;
    line-height: 23px;
  }
`

const ArtistStyledP = styled(StyledP)`
  > a {
    margin-left: 3px;
  }

  display: flex;

  @media screen and (max-width: ${tabletBr}) {
    font-size: 15px;
  }
`

const artistTitle = (
  <ArtistStyledP weight={bold}>
    {artist}
    <a href={tokenSection.superRareUrl} target="blank">
      <Image
        src={images.superrareLogo}
        width={16}
        height={16}
        alt="superrare logo"
      />
    </a>
    <a href={tokenSection.twitterUrl} target="blank">
      <Image
        src={images.twitterLogo}
        width={16}
        height={16}
        alt="twitter logo"
      />
    </a>
  </ArtistStyledP>
)

const imageContainer = (
  <ImageContainer>
    <AbsoluteImg
      top={-24}
      left={-20}
      width={15}
      height={20}
      img={images.mintLineTop}
      showDesktop
      alt="top decorative line"
    />
    <AbsoluteImg
      bottom={-2}
      width={15}
      height={20}
      left={-20}
      img={images.mintLineBottom}
      showDesktop
      alt="bottom decorative line"
    />
    <StyledP weight={600} style={{ lineHeight: '29px' }}>
      <LiveSpan>LIVE</LiveSpan>
      <LiveSpan bgColor="white" color="black">
        04/28/23 4:40PM PST
      </LiveSpan>
    </StyledP>
    <Image alt="art image 1" width={430} height={430} src={images.artImg} />
    <ArtLinksContainer>
      <a href={tokenSection.looksrareUrl} target="blank">
        <Image
          src={images.looksrareLogo}
          width={16}
          height={16}
          alt="looksrare logo"
        />
      </a>
      <a href={tokenSection.openseaUrl} target="blank">
        <Image
          src={images.openseaLogo}
          width={16}
          height={16}
          alt="opensea logo"
        />
      </a>
    </ArtLinksContainer>
  </ImageContainer>
)

const TokenSection = ({
  mint,
  mintState,
  currencySwitch,
  isEth,
  quantity,
  setQuantity,
  mintValues,
  setMintLoading,
}: {
  mint: () => void
  mintState: MintStatus
  currencySwitch: () => void
  isEth: boolean
  setQuantity: (qty: number) => void
  quantity: number
  setMintLoading: (x: MintStatus) => void
  mintValues: {
    apePrice: null | number
    ethPrice: null | number
    maxSupply: null | number
    tokensLeft: null | number
  }
}) => {
  const percentage =
    mintValues.tokensLeft && mintValues.maxSupply
      ? mintValues.tokensLeft / mintValues.maxSupply
      : 0
  const remainingText = (
    <>
      <StyledProgress>
        <CircularProgressbarWithChildren
          value={1 - percentage}
          maxValue={1}
          strokeWidth={14}
          text={`${Math.round(100 - percentage * 100)}%`}
          styles={buildStyles({
            pathColor: 'black',
            textSize: '20px',
            trailColor: '#eee',
            textColor: 'black',
            strokeLinecap: 'butt',
          })}
        >
          <Separator
            turns={0.25}
            style={{
              background: 'black',
              textColor: 'black',
              width: '2px',
              height: `${14}%`,
            }}
          />
        </CircularProgressbarWithChildren>

        <TitleH4 weight={weight.bold} color="black">
          MINTED
        </TitleH4>
        <div>
          <Tooltip label="Text explaining how much an artist gets">
            <span>
              <Image
                src={images.questionmark}
                width={16}
                height={16}
                alt="questionmark"
              />
            </span>
          </Tooltip>
        </div>
      </StyledProgress>
    </>
  )

  const mintText = isEth ? (
    <TitleH4 color={black} weight={bold}>
      MINT PRICE: {mintValues.ethPrice}Ξ
    </TitleH4>
  ) : (
    <ApeContainer>
      <TitleH4 color={black} weight={bold}>
        MINT PRICE: {mintValues.apePrice}
      </TitleH4>
      <Image
        width={25}
        height={25}
        src={images.apecoinLogo}
        alt="apecoin-logo"
      />
    </ApeContainer>
  )

  return (
    <>
      <StyledBackground>
        <DesktopView>
          <FlexRow>
            {imageContainer}
            <TextContainer>
              <TitleH3>{title}</TitleH3>
              <div>
                <TitleH4 weight={bold}>ARTIST</TitleH4>
                {artistTitle}
                <br />
              </div>

              <TitleH4 weight={bold}>DESCRIPTION</TitleH4>
              <StyledP weight={bold}>{description}</StyledP>
              <br />

              <FlexRow justifyContent="flex-start">
                <div>
                  {mintText}

                  <StyledSwitch currencySwitch={currencySwitch} isEth={isEth} />
                  {!isEth && (
                    <StyledPItalic>May require two transactions</StyledPItalic>
                  )}
                </div>
                <div>{remainingText}</div>
              </FlexRow>
              <Divider thick={0.5} color={grey1} />
              <MintSection
                setMintLoading={setMintLoading}
                mintState={mintState}
                mint={mint}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </TextContainer>
          </FlexRow>
        </DesktopView>
        <MobileView>
          <MobileTextC>
            <MobileTitleH3>{title}</MobileTitleH3>
            {artistTitle}
          </MobileTextC>
          {imageContainer}
          <SwitchC>
            <div>
              {mintText}
              <StyledSwitch currencySwitch={currencySwitch} isEth={isEth} />
            </div>

            <div>{remainingText}</div>
          </SwitchC>
          {!isEth && (
            <StyledPItalic>May require two transactions</StyledPItalic>
          )}
          <Divider
            thick={1}
            marginMobile="5px"
            marginDesktop="5px"
            color="#D9D9D9"
          />
          <FaqAcccordion
            content={[
              {
                key: 1,
                title: 'DETAILS',
                p: 'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at.',
              },
            ]}
          />
          <Divider
            thick={1}
            marginMobile="5px"
            marginDesktop="5px"
            color="#D9D9D9"
          />
          <MintSection
            setMintLoading={setMintLoading}
            mintState={mintState}
            mint={mint}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </MobileView>
      </StyledBackground>

      <MiniTextC>
        <TitleH2Small>ART THAT PAYS DIVIDENDS.</TitleH2Small>
        <Divider
          thick={0.5}
          marginMobile="10px 0px 0px"
          marginDesktop="15px 0px 0px"
          color="white"
        />
      </MiniTextC>
    </>
  )
}

export default TokenSection
