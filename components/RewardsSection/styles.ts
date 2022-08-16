import styled from 'styled-components'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { gillSans } from '../utils/fontConfigs'

export const ImageC = styled.div`
  padding-top: 20px;
`

export const LandingC = styled.div`
  position: relative;
  height: 90vh;

  @media screen and (max-width: ${tabletBr}) {
    height: 88vh;
  }
`

export const Main = styled.div`
  position: relative;
  padding: 60px 90px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;

  background-color: white;
  background-clip: content-box;
  z-index: 1;
  > div {
    margin: 10px 0px;
  }

  @media screen and (max-width: ${tabletBr}) {
    padding: 50px 30px;
  }
`

export const Footer = styled.p`
  font-family: ${gillSans};
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  margin-top: 30px;
  color: #808080;
  text-align: center;
`

export const HeaderText = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  font-size: 14px;

  line-height: 16px;
  text-align: left;
  margin: 5px;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  flex-direction: row;

  @media screen and (max-width: ${tabletBr}) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
`

export const BottomLeftC = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 10px;
`
export const BottomRightC = styled.div`
  background-color: #f5f5f5;
  border-radius: 20px;
  width: 250px;
  padding: 10px 18px;
`
export const DesktopTableC = styled.div`
  width: 700px;
  @media screen and (max-width: ${tabletBr}) {
    width: 100%;
    padding: 60px 20px 0px;
  }

  @media screen and (max-width: ${mobileBr}) {
    padding: 50px 0px 0px;
  }
`
