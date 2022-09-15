import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowDownIcon } from '@chakra-ui/icons'
import styled from 'styled-components'
import { mobileBr } from '../../utils/breakpoints'
import { StyledP } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'

const { normal } = weight

const StyledPwMargin = styled(StyledP)`
  font-size: 13px;
  margin-left: 20px;
  font-weight: ${(props: { weight?: number }) =>
    props.weight || 400} !important;
  background-color: transparent !important;

  color: ${(props: { black?: boolean }) =>
    props.black ? 'white' : 'black'} !important;

  @media screen and (max-width: ${mobileBr}) {
    margin-left: 10px;
  }
`

const StyledText = styled(StyledP)`
  margin-left: 30px;
  font-size: 12px;
  line-height: 20px;
  @media screen and (max-width: ${mobileBr}) {
    margin-left: 22px;
  }
  color: ${(props: { black?: boolean }) =>
    props.black ? 'white' : 'black'} !important;
`

const isBlack = (bool: boolean | undefined) => {
  return bool
    ? { width: '95%', backgroundColor: 'black', color: 'white' }
    : { zIndex: 20, width: '100%', backgroundColor: 'white' }
}

const FaqAcccordion = ({
  content,
  black,
}: {
  content: { key: number; title: string; p: string }[]
  black?: boolean
}) => (
  <Accordion allowToggle style={isBlack(black)}>
    {content.map((x) => (
      <AccordionItem key={x.key} border="0px">
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              {isExpanded ? (
                <ArrowDownIcon fontSize="12px" />
              ) : (
                <ArrowForwardIcon fontSize="12px" />
              )}
              <StyledPwMargin black={black} weight={isExpanded ? 600 : 400}>
                {x.title}
              </StyledPwMargin>
            </AccordionButton>

            <AccordionPanel pb={4}>
              <StyledText black={black} weight={normal}>
                {x.p}
              </StyledText>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    ))}
  </Accordion>
)

export default FaqAcccordion
