import styled from 'styled-components'
import { laptopSmallBr, tabletBr } from '../../utils/breakpoints'
import { Main, TitleH3, StyledP } from '../sharedstyles'

export const ImageContainer = styled.div`
  margin: 0px 60px 0px 0px;

  @media screen and (max-width: ${laptopSmallBr}) {
    /* margin: 0px 20px; */
    margin: 0px 20px 0px 0px;
    width: 35%;
  }
  @media screen and (max-width: ${tabletBr}) {
    margin: 0px;
    width: auto;
  }
`

export const TextContainer = styled.div`
  margin-top: 10px;
  margin-right: 20px;
  width: 40%;

  @media screen and (max-width: ${laptopSmallBr}) {
    width: 50%;
  }
`

export const LiveSpan = styled.span`
  background-color: black;
  color: white;
  font-weight: 400;
  margin-right: 10px;
  padding: 0px 10px;
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
`

export const SwitchC = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 10px 15px 20px;
`

export const MintSectionC = styled.div`
  display: flex;

  @media screen and (max-width: ${tabletBr}) {
    margin-top: 20px;
  }
`
