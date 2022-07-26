import styled from 'styled-components'
import { mobileBr, tabletBr } from '../../utils/breakpoints'
import { montserratFont, weight } from '../utils/fontConfigs'

export const ImageC = styled.div`
  padding-top: 20px;
  margin-bottom: 0px !important;
`

export const LandingC = styled.div`
  position: relative;
  min-height: calc(100vh - 55px);
  padding-bottom: 30px;

  position: relative;
  top: -70px;
  margin-bottom: -70px;

  @media screen and (max-width: ${tabletBr}) {
    top: 0px;
    margin-bottom: 0px;

    min-height: calc(100vh - 125px);
  }
`

export const Main = styled.div`
  position: relative;
  padding: 130px 80px 0px;
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
    padding: 30px 30px 0px;
  }

  max-width: 1050px;
  margin: 0 auto;
`

export const Main2 = styled.div`
  position: relative;
  margin: 60px 90px;
  background-color: white;
  width: 100%;
`

export const Footer = styled.p`
  font-family: ${montserratFont};
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  margin-top: 30px;
  color: #808080;
  text-align: left;
`

type HeaderTextType = {
  weight?: number
  extra?: boolean
  color?: string
}

export const HeaderText = styled.p<HeaderTextType>`
  font-family: ${montserratFont};
  font-style: normal;
  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  font-size: ${(props: { extra?: boolean }) => (props.extra ? '13px' : '12px')};
  color: ${(props: { color?: string }) => props.color || 'black'};

  line-height: 17px;
  text-align: left;
  margin: 5px;

  @media screen and (max-width: ${tabletBr}) {
    font-size: 12px;
    line-height: 14px;
  }
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
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 20px;
  width: 250px;
  padding: 10px 18px;
`
export const TableContainer = styled.div`
  /* position: relative; */
  /* height: 100%; */
  width: 700px;
  padding-bottom: 30px;
  @media screen and (max-width: ${tabletBr}) {
    width: 100%;
    padding: 60px 20px 30px;
  }
`

export const HeaderC = styled.div`
  display: flex;
`

export const AddressDiv = styled.div`
  font-size: 14px;
  font-weight: ${weight.bold};
  font-family: ${montserratFont};
  color: black;
  text-align: center;
  height: 35px;
  line-height: 35px;
`
