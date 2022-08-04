import { Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { StyledP } from '../sharedstyles'

const StyledSwitch = () => (
  <FormControl display="flex" alignItems="center">
    <StyledP>ETH</StyledP>
    <Switch
      id="email-alerts"
      size="md"
      colorScheme="black"
      style={{ margin: '30px 10px 30px' }}
    />
    <StyledP>APE</StyledP>
  </FormControl>
)

export default StyledSwitch
