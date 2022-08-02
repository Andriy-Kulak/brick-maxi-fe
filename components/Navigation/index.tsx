import styled from 'styled-components'
import Image from 'next/image'
import { Container } from '../sharedstyles'
import brickMaxiLogo from '../../public/assets/logo.png'

const StyledNav = styled.div`
  top: 0;
  left: 0;
  height: 120px;
  position: absolute;
  background-color: black;
  color: white;
  width: 100%;
`

const TopFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  div {
    margin: 0px 60px;
  }
`

const MidFlexContainer = styled.div`
  display: flex;
  justify-content: ${(props: { left?: boolean }) =>
    props.left === true ? 'flex-start' : 'flex-end'};
  align-items: center;
  flex-direction: row;

  div {
    margin: 0px 15px;
  }
`

const StypedP = styled.p`
  font-size: 20px;
`

const Nav = () => {
  return (
    <StyledNav>
      <TopFlexContainer>
        <MidFlexContainer left>
          <div>
            <StypedP>test 1</StypedP>
          </div>
          <div>
            <StypedP>test 2</StypedP>
          </div>
        </MidFlexContainer>

        <div>
          <Image
            alt="Brick Maxi Logo"
            src={brickMaxiLogo}
            height={120}
            width={120}
          />
        </div>
        <MidFlexContainer>
          <div>
            <StypedP>test 3</StypedP>
          </div>
          <div>
            <StypedP>test 4</StypedP>
          </div>
        </MidFlexContainer>
      </TopFlexContainer>
    </StyledNav>
  )
}

export default Nav
