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
  HeaderC,
  AddressDiv,
  TableContainer,
} from './styles'
import { trimAddress } from '../../utils/helpers'
import { grey1 } from '../utils/colors'

const RewardsSection = ({
  connect,
  ethAddress,
  ensAddress,
}: {
  connect: () => void
  ethAddress: string
  ensAddress: string | null
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
            <HeaderText extra weight={700}>
              CURRENT BALANCE
            </HeaderText>
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
      <Main justifyContent="flex-start">
        <ImageC>
          <Image
            alt="Brick Maxi Logo"
            src={images.rewardsTitle}
            height={100}
            width={180}
          />
        </ImageC>
        <div>
          {ethAddress ? (
            <AddressDiv>{ensAddress || trimAddress(ethAddress)}</AddressDiv>
          ) : (
            <StyledButton fontSize="14px" onClick={connect} colorScheme="black">
              Connect
            </StyledButton>
          )}
        </div>

        <TableContainer>{tableC()}</TableContainer>
      </Main>
    </LandingC>
  )
}

export default RewardsSection
