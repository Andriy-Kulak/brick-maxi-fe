import { Main } from '../sharedstyles'
import styled from 'styled-components'
import { avenirNextCondensed, gillSans } from '../utils/fontConfigs'

const H1 = styled.h1`
  font-family: ${avenirNextCondensed};
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: black;
`

const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 2;
`

const StyledP = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  text-align: center;

  color: #000000;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  div {
    background-color: rgba(255, 255, 255, 0.95);
    margin: 50px 75px;
  }
`

const ShadedTextBox = () => {
  return (
    <StyledContainer>
      <FlexBox>
        <div>
          <div>
            <H1>COLLECT ART YOU LOVE</H1>
            <StyledP>
              We've formed partnerships with our favorite artists, so you can
              add exclusive new works to your collections.
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
