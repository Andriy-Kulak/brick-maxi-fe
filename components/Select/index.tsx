import { Select } from '@chakra-ui/react'
import { StyledP } from '../sharedstyles'

const QuantitySelect = ({
  quantity,
  setQuantity,
}: {
  setQuantity: (qty: number) => void
  quantity: number
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(event.target.value as any as number)
  }
  const valArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div style={{ width: '70px' }}>
      <StyledP style={{ textAlign: 'left' }}>QTY</StyledP>
      <Select onChange={handleChange} value={quantity.toString()}>
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
