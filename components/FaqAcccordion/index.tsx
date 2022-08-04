import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { StyledP } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'

const { normal } = weight

const StyledPwMargin = styled(StyledP)`
  margin-left: 20px;
`

const content = [
  {
    title: 'How Investments are made?',
    p: `  Each artwork minted through the platform represents a unique
  investment, with its own set of token holders, P&L, and subsequent
  rewards. As part of our services, we vet and negotiate investment
  oppurtunities, hire day-to-day management, and facilitate the voting
  process. In some cases, we may consolidate funds from multiple mints
  into one investment.`,
    key: 1,
  },
  { title: 'Earning rewards', p: '...tbd', key: 2 },
  { title: 'Where are communications managed?', p: '...tbd', key: 3 },
  {
    title: 'Are token holders required to vote on proposals?',
    p: '...tbd',
    key: 4,
  },
  {
    title: 'What happens after an investment is liquidated?',
    p: '...tbd',
    key: 5,
  },
  { title: 'How do artists apply to Brick Maxi?', p: '...tbd', key: 6 },
  { title: 'Are there platform fees?', p: '...tbd', key: 7 },
  { title: 'Contact us', p: '...tbd', key: 8 },
] as const

const FaqAcccordion = () => (
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
