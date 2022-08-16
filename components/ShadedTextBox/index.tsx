import styled from 'styled-components'
import { avenirNextCondensed, gillSans } from '../utils/fontConfigs'
import {
  laptopLargeBr,
  laptopSmallBr,
  mobileBr,
  tabletBr,
} from '../../utils/breakpoints'

const H1 = styled.h1`
  font-family: ${avenirNextCondensed};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: black;
  @media screen and (max-width: ${mobileBr}) {
    font-size: 20px;
    line-height: 27px;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: 2;
`

const StyledP = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;

  text-align: center;

  color: #000000;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 13px;
    line-height: 15px;
  }
`

const StyledPItalic = styled.p`
  font-family: ${gillSans};
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #808080;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 8px;
    line-height: 9px;
  }
`

const FlexBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    background: rgba(255, 255, 255, 0.95);
    margin: 50px 10px;
    padding: 50px;
    width: 60%;
    @media screen and (max-width: ${tabletBr}) {
      width: auto;
      margin: 10px 20px;
    }

    @media screen and (max-width: ${mobileBr}) {
      padding: 30px 20px;
    }
  }

  > div > div {
    margin: 10px 50px;
    margin: 50px 70px;
    @media screen and (max-width: ${laptopLargeBr}) {
      margin: 10px 40px;
    }

    @media screen and (max-width: ${tabletBr}) {
      margin: 20px 20px;
    }
  }
`

const Divider = styled.hr`
  border: 0.5px solid black;
  margin: 50px 150px;

  @media screen and (max-width: ${laptopSmallBr}) {
    margin: 30px 100px;
  }

  @media screen and (max-width: ${tabletBr}) {
    margin: 30px 50px;
  }

  @media screen and (max-width: ${mobileBr}) {
    margin: 10px 20px;
  }
`

const ShadedTextBox = () => {
  return (
    <StyledContainer id="mission-section">
      <FlexBox>
        <div>
          <div>
            <H1>COLLECT ART YOU LOVE</H1>
            <StyledP>
              We&apos;ve formed partnerships with our favorite artists, so you
              can add exclusive new works to your collections.
            </StyledP>
          </div>
          <div>
            <H1>MINT FUNDS ARE INVESTED</H1>
            <StyledP>
              Fractionalized real estate has arrived. We use mint funds to
              purchase real estate assets that generate income. Your tokens
              effectively represent shares of these assets and the income that
              they earn.
            </StyledP>
          </div>
          <div>
            <H1>EARN REWARDS</H1>
            <StyledP>
              Investment income is regularly distributed back to token holders,
              like receiving rent checks every month. When these assets are
              liquidated, token holders receive their share. We hope to see
              positive returns, which means that over time you could potentially
              receive rewards in excessive of your original token price… and you
              get to keep the art.*
            </StyledP>
          </div>
          <Divider />
          <div>
            <StyledPItalic>
              *Actual rewards are based on each individual asset&apos;s
              performance. Due to risks associated with these types of
              investments, Brick Maxi does not guarantee any amount of rewards.
              Further, asset performance is heavily impacted by governance
              decisions made by token holders.
            </StyledPItalic>
          </div>
        </div>
        <div>
          <div>
            <H1>DECENTRALIZED GOVERNANCE</H1>
            <StyledP>
              Token holders control their own fate. A truly decentralized
              approach means that meaningful decisions are voted on by the
              community. How should reserve funds be allocated? Should property
              improvements be made? Should a buy-out offer be accepted? <br />
              <br />A dedicated governance website will help facilitate these
              decisions and many more.
            </StyledP>
          </div>
        </div>
      </FlexBox>
    </StyledContainer>
  )
}

export default ShadedTextBox
