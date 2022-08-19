import styled from 'styled-components'
import { rewardsTableContent } from '../../content'
import { mobileBr } from '../../utils/breakpoints'

import { gillSans } from '../utils/fontConfigs'

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

  thead th {
    margin: 20px 0px;
  }

  thead th:nth-child(1),
  thead th:nth-child(2),
  thead th:nth-child(3) {
    width: 14%;

    @media screen and (max-width: ${mobileBr}) {
      width: 18%;
    }
  }

  thead th:nth-child(4),
  thead th:nth-child(5) {
    width: 26%;

    @media screen and (max-width: ${mobileBr}) {
      width: 22%;
    }
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

const Table = () => (
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
)

export default Table
