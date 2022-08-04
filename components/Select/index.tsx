import * as React from 'react'
import styled from 'styled-components'
import { Select } from '@chakra-ui/react'
import { StyledP } from '../sharedstyles'
import { gillSans } from '../utils/fontConfigs'

const QuantitySelect = () => {
  const [quantity, setQuantity] = React.useState(1)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('yyyy event.target.value', event.target.value)
    setQuantity(event.target.value as any as number)
  }
  const valArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const StyledOption = styled.option`
    font-family: ${gillSans};
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  `

  return (
    <div style={{ width: '70px' }}>
      <StyledP style={{ textAlign: 'center' }}>QTY</StyledP>
      <Select
        placeholder="Select Quantity"
        onChange={handleChange}
        value={quantity.toString()}
      >
        {valArray.map((x: number) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default QuantitySelect
