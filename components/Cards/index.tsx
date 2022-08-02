import styled from 'styled-components'
import Link from 'next/link'
import { FlexContainer, Card, StyledA } from './styled'

const StyledLink = ({ href, name }: { href: string; name: string }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
)

export default function Cards() {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/about" name="About Page &rarr;" />
      </Card>
    </FlexContainer>
  )
}
