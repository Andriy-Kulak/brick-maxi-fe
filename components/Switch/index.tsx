import { Switch, FormControl } from '@chakra-ui/react'
import { StyledP } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'

const StyledSwitch = ({
  currencySwitch,
  isEth,
}: {
  currencySwitch: () => void
  isEth: boolean
}) => (
  <FormControl display="flex" alignItems="center" margin="8px 0px">
    <StyledP weight={isEth ? weight.bold : weight.normal}>ETH</StyledP>
    <Switch
      isChecked={!isEth} // isEth === true means switch needs to be false
      onChange={currencySwitch}
      size="md"
      colorScheme="red"
      style={{ margin: '0px 10px 0px' }}
    />
    <StyledP weight={isEth ? weight.normal : weight.bold}>APE</StyledP>
  </FormControl>
)

export default StyledSwitch
