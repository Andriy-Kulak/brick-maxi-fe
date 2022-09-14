import Image from 'next/image'
import styled from 'styled-components'
import { mobileBr } from '../../utils/breakpoints'

export const NextDesktopBgImg = styled(Image)`
  @media screen and (max-width: ${mobileBr}) {
    display: none !important;
  }
`

export const NextMobileBgImg = styled(Image)`
  @media screen and (min-width: ${mobileBr}) {
    display: none !important;
  }
`
