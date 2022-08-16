import Image from 'next/image'
import styled from 'styled-components'
import { TitleH2, Main100h, StyledButton } from '../sharedstyles'
import { images, rewardsTableContent } from '../../content'
import { tabletBr } from '../../utils/breakpoints'
import { gillSans } from '../utils/fontConfigs'
import CollectBtn from '../CollectBtn'

const ImageC = styled.div`
  width: 200px;
  height: 200px;

  @media screen and (max-width: ${tabletBr}) {
    width: 150px;
    height: 160px;
  }
`

const LandingC = styled.div`
  position: relative;
  height: 90vh;

  @media screen and (max-width: ${tabletBr}) {
    height: 88vh;
  }
`

const Main = styled.div`
  padding: 5rem 0;
  z-index: 10000000;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;
  border: 5px solid blue;
  margin: 90px;
  z-index: 1;
  > div {
    margin: 10px 0px;
  }
`

const Container = styled.div`
  /* display: flex; */
  background-color: white;
  z-index: 1;
  /* border: 2px solid red; */
`

const StyledTable = styled.table`
  text-align: left;
  th {
    font-family: ${gillSans};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
    color: #808080;
  }

  td {
    font-family: ${gillSans};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: black;
  }

  thead {
    width: 100%;
    border-top: 0.5px solid #d9d9d9;
    border-bottom: 0.5px solid #d9d9d9;
  }

  tbody {
    width: 100%;
  }

  thead th:nth-child(1),
  thead th:nth-child(2),
  thead th:nth-child(3) {
    width: 16%;
  }

  thead th:nth-child(4),
  thead th:nth-child(5) {
    width: 31%;
  }

  tr {
    height: 29px;
  }

  tbody tr:nth-child(even) {
    background: white;
  }
  tbody tr:nth-child(odd) {
    background: #f5f5f5;
  }
`

const HeaderText = styled.p`
  font-family: ${gillSans};
  font-style: normal;
  font-weight: ${(props: { weight?: number }) => props.weight || 400};
  font-size: 14px;

  line-height: 16px;
  text-align: left;
  margin: 5px;
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
  width: 100%;
  margin-top: 30px;
`

const BottomLeftC = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 10px;
`
const BottomRightC = styled.div`
  background-color: #f5f5f5;
  border-radius: 20px;
  width: 250px;
  padding: 10px 18px;
`

const RewardsSection = () => (
  //   <LandingC>
  //     <Image
  //       alt="rewards page"
  //       src={images.rewardsBg}
  //       objectFit="cover"
  //       objectPosition="center"
  //       layout="fill"
  //     />
  <Main>
    <div>
      <Image
        alt="Brick Maxi Logo"
        src={images.rewardsTitle}
        height={100}
        width={180}
      />
    </div>
    <div>
      <StyledButton onClick={() => console.log('test')} colorScheme="black">
        Connect
      </StyledButton>
    </div>

    <div style={{ width: '700px', border: '2px solid green' }}>
      <HeaderText>TOKENS IN WALLET ###</HeaderText>
      <StyledTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Token Id</th>
            <th># Tokens</th>
            <th>Rewards Per Token (USDC)</th>
            <th>Total Rewards (USDC)</th>
          </tr>
        </thead>
        <tbody>
          {rewardsTableContent.map((x) => (
            <tr key={x.key}>
              <td>{x.date}</td>
              <td>{x.tokenId}</td>
              <td>{x.tokenNumbers}</td>
              <td>{x.rewardsPer}</td>
              <td>{x.rewardsTotal}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <BottomContainer>
        <BottomLeftC>
          <div>
            <HeaderText>CURRENT BALANCE</HeaderText>
            <HeaderText weight={600}>0.00 USDC</HeaderText>
          </div>
          <div>
            <CollectBtn onClick={() => console.log('on click')} />
          </div>
        </BottomLeftC>
        <BottomRightC>
          <HeaderText weight={600}>REWARDS</HeaderText>
          <HeaderText>COLLECTED TO DATE</HeaderText>
          <HeaderText>LAST COLLECTED</HeaderText>
        </BottomRightC>
      </BottomContainer>
    </div>
  </Main>
  //   </LandingC>
)

export default RewardsSection
