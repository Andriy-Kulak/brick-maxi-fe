import styled from 'styled-components'
import { oswaldFont, montserratFont } from '../utils/fontConfigs'
import {
  laptopLargeBr,
  laptopSmallBr,
  mobileBr,
  tabletBr,
} from '../../utils/breakpoints'
import { howItWorksContent, images } from '../../content'
import AbsoluteImg from '../AbsoluteImg'

const H1 = styled.h1`
  font-family: ${oswaldFont};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: black;
  margin-bottom: 3px;
  @media screen and (max-width: ${mobileBr}) {
    font-size: 20px;
    line-height: 27px;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 2;
`

const StyledP = styled.p`
  font-family: ${montserratFont};
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
  font-family: ${montserratFont};
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

  .white-box {
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    margin: 30px 10px;
    padding: 30px;
    width: 60%;
    max-width: 750px;
    @media screen and (max-width: ${tabletBr}) {
      width: auto;
      margin: 10px 20px;
    }

    @media screen and (max-width: ${mobileBr}) {
      padding: 10px 10px;
    }
  }

  .inner-p {
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
  margin: 50px 70px;

  @media screen and (max-width: ${laptopSmallBr}) {
    margin: 30px 40px;
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
        <div className="white-box">
          {howItWorksContent.map((x) => (
            <div key={x.key} className="inner-p">
              <H1>{x.title}</H1>
              <StyledP>{x.desc}</StyledP>
            </div>
          ))}
          <Divider />
          <div>
            <StyledPItalic>
              *Actual rewards are based on each asset’s performance. Brick Maxi
              does not guarantee that any amount of rewards will be earned by
              collectors or that a given project will generate sufficient funds
              for an investment to be made.
            </StyledPItalic>
          </div>
          <AbsoluteImg
            showDesktop
            img={images.topLeftCorner}
            width={28}
            height={28}
            top={-20}
            left={-20}
            alt="top left corner 2"
          />
          <AbsoluteImg
            showDesktop
            img={images.topRightCorner}
            width={28}
            height={28}
            top={-20}
            right={-20}
            alt="top right corner 2"
          />

          <AbsoluteImg
            showDesktop
            img={images.leftSideMiddleCorner}
            width={29}
            height={28}
            bottom={-50}
            left={-20}
            alt="middle left corner 2"
          />
          <AbsoluteImg
            showDesktop
            img={images.rightSideMiddleCorner}
            width={29}
            height={28}
            bottom={-50}
            right={-20}
            alt="middle right corner 2"
          />

          <AbsoluteImg
            showMobile
            showTablet
            img={images.mobileTopLeftCorner}
            width={15}
            height={15}
            top={10}
            left={10}
            alt="mobile top left corner 3"
          />
          <AbsoluteImg
            showMobile
            showTablet
            img={images.mobileTopRightCorner}
            width={15}
            height={15}
            top={10}
            right={10}
            alt="mobile top right corner 3"
          />
        </div>
        <div className="white-box">
          <div className="inner-p">
            <H1>GOVERNANCE</H1>
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
          <AbsoluteImg
            showDesktop
            img={images.bottomLeftCorner}
            width={28}
            height={28}
            bottom={-25}
            left={-20}
            alt="bottom left corner 2"
          />
          <AbsoluteImg
            showDesktop
            img={images.bottomRightCorner}
            width={28}
            height={28}
            bottom={-25}
            right={-20}
            alt="bottom right corner 2"
          />

          <AbsoluteImg
            showMobile
            showTablet
            img={images.mobileBottomLeftCorner}
            width={15}
            height={15}
            bottom={10}
            left={10}
            alt="mobile bottom left corner 3"
          />
          <AbsoluteImg
            showMobile
            showTablet
            img={images.mobileBottomRightCorner}
            width={15}
            height={15}
            bottom={10}
            right={10}
            alt="mobile bottom right corner 3"
          />
        </div>
      </FlexBox>
    </StyledContainer>
  )
}

export default ShadedTextBox
