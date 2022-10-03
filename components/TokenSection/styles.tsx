import styled from 'styled-components'
import { laptopSmallBr, mobileBr, tabletBr } from '../../utils/breakpoints'
import { Main, TitleH3, StyledP } from '../sharedstyles'

export const ImageContainer = styled.div`
  @media screen and (max-width: ${laptopSmallBr}) {
    width: 35%;
  }
  @media screen and (max-width: ${tabletBr}) {
    margin: 0px;
    width: auto;
  }

  @media screen and (max-width: ${tabletBr}) {
    margin: 0 20px;
    width: auto;
  }
`

export const TextContainer = styled.div`
  margin: 10px 20px 0px 25px;
  width: 40%;

  @media screen and (max-width: ${laptopSmallBr}) {
    width: 50%;
    margin-left: 20px;
  }
`

export const LiveSpan = styled.span`
  background-color: ${(props: { bgColor?: string }) =>
    props.bgColor || 'black'};
  height: 29px;
  vertical-align: baseline;
  line-height: 29px;
  color: ${(props: { color?: string }) => props.color || 'white'};
  font-weight: 600;
  margin-right: 10px;
  padding: 0px 10px;
  display: table-cell;
`

export const DesktopView = styled(Main)`
  padding: 3rem 0;
  @media screen and (max-width: ${tabletBr}) {
    display: none;
  }
`

export const MobileView = styled(Main)`
  max-width: 430px;
  margin: 0 auto;
  display: none;
  padding: 25px 0px;
  @media screen and (max-width: ${tabletBr}) {
    display: flex;
  }

  flex-flow: column nowrap;
  justify-content: center;
`

export const StyledBackground = styled.div`
  background-color: white;
  padding: 0 20px;

  height: 100vh;
  @media screen and (max-width: ${tabletBr}) {
    height: auto;
  }
  min-height: 100vh;
`

export const MobileTitleH3 = styled(TitleH3)`
  margin: 0;
  text-shadow: none;
`

export const MobileStyledP = styled(StyledP)`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`

export const MobileTextC = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SwitchC = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 10px 15px 10px;

  @media screen and (max-width: ${mobileBr}) {
    padding: 10px 0px 0px;
  }
`

export const MintSectionC = styled.div`
  display: flex;

  @media screen and (max-width: ${tabletBr}) {
    margin-top: 20px;
  }
`
