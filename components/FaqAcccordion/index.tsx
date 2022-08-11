import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { mobileBr } from '../../utils/breakpoints'
import { StyledP } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'

const { normal } = weight

const StyledPwMargin = styled(StyledP)`
  margin-left: 20px;
  background-color: transparent !important;

  color: ${(props: { black?: boolean }) =>
    props.black ? 'white' : 'black'} !important;

  @media screen and (max-width: ${mobileBr}) {
    margin-left: 10px;
  }
`

const StyledText = styled(StyledP)`
  color: ${(props: { black?: boolean }) =>
    props.black ? 'white' : 'black'} !important;
`

const isBlack = (bool: boolean | undefined) => {
  return bool
    ? { width: '95%', backgroundColor: 'black', color: 'white' }
    : { zIndex: 20, width: '80%', backgroundColor: 'white' }
}

const FaqAcccordion = ({
  content,
  black,
}: {
  content: { key: number; title: string; p: string }[]
  black?: boolean
}) => (
  <Accordion
    allowToggle
    // width={{ base: '100%', sm: '90%', md: '50%' }}
    style={isBlack(black)}
  >
    {content.map((x) => (
      <AccordionItem key={x.key}>
        <AccordionButton>
          <AccordionIcon />
          <StyledPwMargin black={black}>{x.title}</StyledPwMargin>
        </AccordionButton>

        <AccordionPanel pb={4}>
          <StyledText black={black} weight={normal}>
            {x.p}
          </StyledText>
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
)

export default FaqAcccordion
