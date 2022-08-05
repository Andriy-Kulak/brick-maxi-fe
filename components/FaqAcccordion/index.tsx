import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { StyledP } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'

const { normal } = weight

const StyledPwMargin = styled(StyledP)`
  margin-left: 20px;
`

const FaqAcccordion = ({
  content,
}: {
  content: { key: number; title: string; p: string }[]
}) => (
  <Accordion
    allowToggle
    style={{ zIndex: 20, backgroundColor: 'white', width: '80%' }}
  >
    {content.map((x) => (
      <AccordionItem key={x.key}>
        <AccordionButton>
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
