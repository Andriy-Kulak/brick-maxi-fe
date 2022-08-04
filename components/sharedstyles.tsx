import styled from 'styled-components'
import { grey1 } from './utils/colors'
import { avenirNextCondensed, gillSans } from './utils/fontConfigs'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  /* background-size: 100% auto; */
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
  height: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;
`

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const TitleH1 = styled.h1`
  margin: 0;
  font-family: ${gillSans};
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 95px;
`

const TitleH2 = styled.h2`
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: italic;
  font-family: ${avenirNextCondensed};
  font-weight: 600;
  font-size: 60px;
  line-height: 82px;
`

const TitleH2Small = styled.h2`
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: white;
  font-style: italic;
  font-family: ${avenirNextCondensed};
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
`

const TitleH3 = styled.h3`
  margin: 0;
  line-height: 1.15;
  font-size: 36px;
  font-weight: 600;
  color: ${(props: { color?: string }) => props.color || 'black'};
  text-decoration: none;
  font-family: ${avenirNextCondensed};
  margin-bottom: 15px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const TitleH4 = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  color: ${(props: { color?: string }) => props.color || grey1};
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-family: ${gillSans};

  font-style: normal;
  line-height: 23px;
`

const StyledP = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  color: ${(props: { color?: string }) => props.color || 'black'};
  text-decoration: none;
  letter-spacing: normal;
  font-family: ${gillSans};

  font-style: normal;
  font-size: 20px;
  line-height: 23px;
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: flex-start;
`

// const FlexColumn = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   /* justify-content: ${(props: { justifyContent?: string }) =>
//     props.justifyContent || 'center'};
//   align-items: center; */
// `

const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

const WhiteContentBox = styled.div`
  z-index: 2;
  width: 80%;
  padding: 100px 70px;
  /* height: 80%; */
  /* height: 100%; */
  background-color: white;
  flex: 1;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;
`

export {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  TitleH2,
  TitleH2Small,
  TitleH3,
  TitleH4,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
  StyledP,
  // FlexColumn,
  WhiteContentBox,
  Main100h,
}
