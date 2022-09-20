import styled from 'styled-components'
import { avenirNextCondensed, gillSans } from '../utils/fontConfigs'
import {
  laptopLargeBr,
  laptopSmallBr,
  mobileBr,
  tabletBr,
} from '../../utils/breakpoints'
import { howItWorksContent } from '../../content'

const H1 = styled.h1`
  font-family: ${avenirNextCondensed};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
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
  font-size: 12px;
  line-height: 17px;

  text-align: center;

  color: #000000;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 11px;
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
    line-height: 10px;
    color: black;
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
    margin: 30px 10px;
    padding: 30px;
    width: 60%;
    @media screen and (max-width: ${tabletBr}) {
      width: auto;
      margin: 10px 20px;
    }

    @media screen and (max-width: ${mobileBr}) {
      padding: 10px 10px;
    }
  }

  > div > div {
    margin: 50px 70px;
    @media screen and (max-width: ${laptopLargeBr}) {
      margin: 40px 40px;
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
          {howItWorksContent.map((x) => (
            <div key={x.key}>
              <H1>{x.title}</H1>
              <StyledP>{x.desc}</StyledP>
            </div>
          ))}
          <Divider />
          <div>
            <StyledPItalic>
              *Actual rewards are based on each asset’s performance. Brick Maxi
              does not guarantee any amount of rewards or that a given mint will
              generate sufficient proceeds for there to be any funds available
              for allocation at all.
            </StyledPItalic>
          </div>
        </div>
        <div>
          <div>
            <H1>DECENTRALIZED GOVERNANCE</H1>
            <StyledP>
              Token holders control their own fate.
              <br />
              <br />
              A fully decentralized approach means that token holders vote on
              proposals to control every step of the process. How should funds
              be allocated? Should improvements be made? Is now the right time
              to liquidate?
              <br />
              <br />
              Brick Maxi provides the technology for collectors to join forces
              and maximize their rewards. We don’t offer financial advice or
              management services of any kind.
            </StyledP>
          </div>
        </div>
      </FlexBox>
    </StyledContainer>
  )
}

export default ShadedTextBox
