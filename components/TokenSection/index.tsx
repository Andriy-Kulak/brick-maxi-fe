import Image from 'next/image'
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
import { montserratFont, weight } from '../utils/fontConfigs'
import { black, grey1 } from '../utils/colors'
import {
  DesktopView,
  ImageContainer,
  LiveSpan,
  MobileStyledP,
  MobileTextC,
  MobileTitleH3,
  MobileView,
  SwitchC,
  TextContainer,
} from './styles'

import { tabletBr } from '../../utils/breakpoints'
import { MintStatus } from '../../utils/types/reactState'
import MintSection from '../MintSection'
import { RadialSeparators, Separator } from '../Separator'
const { bold } = weight

const { title, artist, description, type } = tokenSection

export const StyledBackground = styled.div`
  background-color: white;
  padding: 0 20px;

  @media screen and (max-width: ${tabletBr}) {
    height: auto;
  }
  min-height: 80vh;
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

const imageContainer = (
  <ImageContainer>
    <StyledP weight={700} style={{ lineHeight: '13px' }}>
      <LiveSpan>LIVE</LiveSpan>
      04/28/1983 4:40PM PST
    </StyledP>
    <Image alt="art image 1" width={430} height={430} src={images.artImg} />
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

  console.log('1 - percentage', 1 - percentage)
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
            <br />

            <FlexRow justifyContent="flex-start">
              <div>
                {mintText}

                <StyledSwitch currencySwitch={currencySwitch} isEth={isEth} />
                <StyledPItalic>May require two transactions</StyledPItalic>
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
          <MobileStyledP weight={bold}>{artist}</MobileStyledP>
        </MobileTextC>
        {imageContainer}
        <SwitchC>
          <div>
            {mintText}
            <StyledSwitch currencySwitch={currencySwitch} isEth={isEth} />
          </div>
          <div>{remainingText}</div>
        </SwitchC>
        <Divider thick={1} color="#D9D9D9" />
        <FaqAcccordion
          content={[
            {
              key: 1,
              title: 'DETAILS',
              p: 'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at.',
            },
          ]}
        ></FaqAcccordion>
        <Divider thick={1} color="#D9D9D9" />
        <MintSection
          setMintLoading={setMintLoading}
          mintState={mintState}
          mint={mint}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </MobileView>
    </StyledBackground>
  )
}

export default TokenSection
