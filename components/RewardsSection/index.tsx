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
} from './styles'

const RewardsSection = ({
  connect,
  address,
}: {
  connect: () => void
  address: string
}) => (
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
        <StyledButton onClick={connect} colorScheme="black">
          Connect
        </StyledButton>
      </div>

      <DesktopTableC>
        <HeaderText>TOKENS IN WALLET: {address}</HeaderText>
        <Table />
        <BottomContainer>
          <BottomLeftC>
            <div>
              <HeaderText>CURRENT BALANCE</HeaderText>
              <HeaderText weight={700}>0.00 USDC</HeaderText>
            </div>
            <div>
              <CollectBtn onClick={() => console.log('on click')} />
            </div>
          </BottomLeftC>
          <BottomRightC>
            <HeaderText weight={600}>REWARDS</HeaderText>
            <HeaderText>COLLECTED TO DATE</HeaderText>
            <HeaderText>LAST COLLECTED</HeaderText>
          </BottomRightC>
        </BottomContainer>
      </DesktopTableC>
      <Footer>
        *Rewards balance does not transfer with the sale of your tokens on
        secondary markets.
      </Footer>
    </Main>
  </LandingC>
)

export default RewardsSection
