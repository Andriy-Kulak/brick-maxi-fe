import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const FaqAcccordion = () => (
  <Accordion allowToggle style={{ zIndex: 20, backgroundColor: 'white' }}>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            How Investments are made
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Each artwork minted through the platform represents a unique investment,
        with its own set of token holders, P&L, and subsequent rewards. As part
        of our services, we vet and negotiate investment oppurtunities, hire
        day-to-day management, and facilitate the voting process. In some cases,
        we may consolidate funds from multiple mints into one investment.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Earning Rewards
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>tbd...</AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Where are communitied managed?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>tbd...</AccordionPanel>
    </AccordionItem>
  </Accordion>
)

export default FaqAcccordion
