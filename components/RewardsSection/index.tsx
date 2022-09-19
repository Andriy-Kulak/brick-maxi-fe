import Image from 'next/image'
import { StyledButton } from '../sharedstyles'
import { images } from '../../content'
import CollectBtn from '../CollectBtn'
import Table from '../Table'
import {
  ImageC,
  LandingC,
  Main,
  Footer,
  HeaderText,
  BottomContainer,
  BottomLeftC,
  BottomRightC,
  DesktopTableC,
  HeaderC,
  AddressDiv,
  MobileTableC,
} from './styles'
import { trimAddress } from '../../utils/helpers'
import { grey1 } from '../utils/colors'

const RewardsSection = ({
  connect,
  address,
}: {
  connect: () => void
  address: string
}) => {
  const tableC = () => (
    <>
      <HeaderC>
        <div>
          <Image alt="cube" src={images.greyCube} width={20} height={23} />
        </div>
        <div>
          <HeaderText color={grey1}>TOKENS IN WALLET:</HeaderText>
        </div>
      </HeaderC>
      <Table />
      <Footer>
        {/* *Rewards balance does not transfer with the sale of your tokens on
        secondary markets. */}
      </Footer>
      <BottomContainer>
        <BottomLeftC>
          <div>
            <HeaderText weight={700}>CURRENT BALANCE</HeaderText>
            <HeaderText weight={700}>0.00 USDC</HeaderText>
          </div>
          <div>
            <CollectBtn onClick={() => console.log('on click')} />
          </div>
        </BottomLeftC>
        <BottomRightC>
          <div>
            <HeaderText weight={600}>REWARDS</HeaderText>
            <HeaderText color={grey1}>COLLECTED TO DATE</HeaderText>
            <HeaderText color={grey1}>LAST COLLECTED</HeaderText>
          </div>
          <div>
            <HeaderText weight={600}>-</HeaderText>
            <HeaderText weight={600}>-</HeaderText>
          </div>
        </BottomRightC>
      </BottomContainer>
    </>
  )
  return (
    <LandingC>
      <Image
        alt="rewards page"
        priority
        src={images.rewardsBg}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <Main>
        <ImageC>
          <Image
            alt="Brick Maxi Logo"
            src={images.rewardsTitle}
            height={100}
            width={180}
          />
        </ImageC>
        <div>
          {address ? (
            <AddressDiv>{trimAddress(address)}</AddressDiv>
          ) : (
            <StyledButton onClick={connect} colorScheme="black">
              Connect
            </StyledButton>
          )}
        </div>

        <DesktopTableC>{tableC()}</DesktopTableC>
      </Main>

      <MobileTableC>{tableC()}</MobileTableC>
    </LandingC>
  )
}

export default RewardsSection
