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

  @media screen and (max-width: ${mobileBr}) {
    margin-left: 10px;
  }
`

const FaqAcccordion = ({
  content,
}: {
  content: { key: number; title: string; p: string }[]
}) => (
  <Accordion
    allowToggle
    width={{ base: '100%', sm: '90%', md: '50%' }}
    style={{ zIndex: 20, backgroundColor: 'white' }}
  >
    {content.map((x) => (
      <AccordionItem key={x.key} style={{ backgroundColor: 'white' }}>
        <AccordionButton
          borderBottom="1px solid #808080"
          borderTop="1px solid #808080"
        >
          <AccordionIcon />
          <StyledPwMargin>{x.title}</StyledPwMargin>
        </AccordionButton>

        <AccordionPanel pb={4}>
          <StyledP weight={normal}>{x.p}</StyledP>
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
)

export default FaqAcccordion
