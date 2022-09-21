import styled from 'styled-components'

// this is used to compensate for the fact that navbar is 70px so we need to position an element 70 before the actual section.
const AnchorSpan = styled.span`
  position: absolute;
  top: -70px;
`

export default AnchorSpan
