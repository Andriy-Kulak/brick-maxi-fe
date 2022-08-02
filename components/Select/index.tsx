import * as React from 'react'
import Box from '@mui/material/Box'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

const QuantitySelect = () => {
  const [quantity, setQuantity] = React.useState(1)

  const handleChange = (event: SelectChangeEvent) => {
    console.log('yyyy event.target.value', event.target.value)
    setQuantity(event.target.value as any as number)
  }
  const valArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity.toString()}
          label="Quantity"
          onChange={handleChange}
        >
          {valArray.map((x: number) => (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default QuantitySelect
