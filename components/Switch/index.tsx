import { Switch, FormControl } from '@chakra-ui/react'
import { StyledP } from '../sharedstyles'

const StyledSwitch = () => (
  <FormControl display="flex" alignItems="center">
    <StyledP>ETH</StyledP>
    <Switch size="md" colorScheme="red" style={{ margin: '0px 10px 0px' }} />
    <StyledP>APE</StyledP>
  </FormControl>
)

export default StyledSwitch
