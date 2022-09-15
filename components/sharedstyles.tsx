import styled from 'styled-components'
import { laptopSmallBr, mobileBr, tabletBr } from '../utils/breakpoints'
import { grey1 } from './utils/colors'
import { Button, ButtonProps } from '@chakra-ui/react'
import { avenirNextCondensed, gillSans, weight } from './utils/fontConfigs'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  background-image: ${(props: { imgUrl?: string }) =>
    props.imgUrl ? `url(${props.imgUrl})` : ''};
`

const BlackContainer = styled.div`
  background-color: black;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: ${(props: { height?: string }) => props.height || '80vh'};
  min-height: ${(props: { height?: string }) => props.height || '80vh'};
`

const ColorBackground = styled.div`
  background-color: ${(props) => props.color || 'black'};
  padding: 0 0.5rem;

  height: ${(props: { height?: string }) => props.height || '100vh'};
  min-height: ${(props: { height?: string }) => props.height || '100vh'};
`

const Main100h = styled.div`
  padding: 5rem 0;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;
`

const Main = styled.div`
  position: relative;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;

  @media screen and (max-width: ${mobileBr}) {
    padding: 2rem 0;
  }
`

const TitleH1 = styled.h1`
  margin: 0;
  font-family: ${gillSans};
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: normal;
  font-weight: ${weight.semiBold};
  font-size: 36px;
  line-height: 44px;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 14px;
    line-height: 24px;
  }
`

const TitleH2 = styled.h2`
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: italic;
  font-family: ${avenirNextCondensed};
  font-weight: 600;
  font-size: 40px;
  line-height: 82px;

  @media screen and (max-width: ${tabletBr}) {
    font-size: 35px;
    line-height: 40px;
  }

  @media screen and (max-width: ${mobileBr}) {
    font-size: 20px;
    line-height: 27px;
  }
`

const TitleH2Small = styled.h2`
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: italic;
  font-family: ${avenirNextCondensed};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media screen and (max-width: ${mobileBr}) {
    font-size: 17px;
    line-height: 23px;
  }
`

const TitleH3 = styled.h3`
  margin: 0;
  line-height: 1.15;
  font-size: 24px;
  font-weight: 600;
  color: ${(props: { color?: string }) => props.color || 'black'};
  text-decoration: none;
  font-family: ${avenirNextCondensed};
  margin-bottom: 15px;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 20px;
    line-height: 23px;
  }
`

// AK_TO_DO duplicate of StyledP. will remove if designs don't change
const TitleH4 = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  color: ${(props: { color?: string }) => props.color || grey1};
  text-decoration: none;
  letter-spacing: normal;
  font-family: ${gillSans};

  font-style: normal;
`

const StyledP = styled.p`
  margin: 0;

  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  color: ${(props: { color?: string }) => props.color || 'black'};
  text-decoration: none;
  letter-spacing: normal;
  font-family: ${gillSans};
  font-style: normal;
  font-size: 14px;
  line-height: normal;

  @media screen and (max-width: ${mobileBr}) {
    font-size: 13px;
    line-height: 15px;
  }
`

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: flex-start;
`

export const StyledButton = styled(Button).attrs({
  fontSize: '14px',
  colorScheme: 'black',
  fontWeight: 500,
  border: '2px',
  borderColor: 'white',
  borderRadius: '100px',
} as ButtonProps)`
  border-radius: 30px;
  background-color: black;
  font-family: ${gillSans};
  color: white;
  border: 2px solid white;
  :hover {
    background-color: grey;
  }
` as typeof Button

const WhiteContentBox = styled.div`
  z-index: 2;
  width: 70%;
  padding: 100px 70px;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;

  @media screen and (max-width: ${laptopSmallBr}) {
    padding: 80px 30px;
  }

  @media screen and (max-width: ${tabletBr}) {
    padding: 50px 0px;
    margin: 0px 20px;
  }
`

export {
  Container,
  Main,
  TitleH2,
  TitleH2Small,
  TitleH3,
  TitleH4,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
  StyledP,
  WhiteContentBox,
  Main100h,
}
