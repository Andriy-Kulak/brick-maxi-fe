import { Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { StyledP } from '../sharedstyles'

const StyledSwitch = () => (
  <FormControl display="flex" alignItems="center">
    <StyledP style={{ margin: '30px 0px 0px' }}>ETH</StyledP>
    <Switch
      id="email-alerts"
      size="md"
      colorScheme="black"
      style={{ margin: '30px 10px 0px' }}
    />
    <StyledP style={{ margin: '30px 0px 0px' }}>APE</StyledP>
  </FormControl>
)

export default StyledSwitch
