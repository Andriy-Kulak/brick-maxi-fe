import Image from 'next/image'
import styled from 'styled-components'
import { StyledP } from '../sharedstyles'
import { Select, MintBtn } from '../'

import { images } from '../../content'
import { tabletBr } from '../../utils/breakpoints'
import { Box, Button } from '@chakra-ui/react'
import { selectedNet } from '../../utils/web3'
import { oswaldFont, montserratFont } from '../utils/fontConfigs'
import { MintState, MintStatus } from '../../utils/types/reactState'

export const StyledBackground = styled.div`
  background-color: white;
  padding: 0 20px;

  /* height: 80vh; */
  @media screen and (max-width: ${tabletBr}) {
    height: auto;
  }
  min-height: 80vh;
`

const ToastFlex = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  font-family: ${montserratFont};
  padding: 8px 7px 5px;
  > div:first-child {
    margin-right: 5px;
  }
`

const EtherscanLink = styled.a`
  margin-top: 15px;
  border: 2px solid white;

  image {
    padding: 3px !important;
  }
`
const MintSectionC = styled.div`
  display: flex;

  @media screen and (max-width: ${tabletBr}) {
    margin-top: 20px;
  }
`

const StyledMessage = styled(StyledP)`
  font-family: ${oswaldFont};
  font-weight: 600;
  letter-spacing: 0.5px;
`
const Main = styled.div`
  position: relative;
  padding: 0px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justifyContent?: string }) =>
    props.justifyContent || 'center'};
  align-items: center;
`

const MintSection = ({
  mintState,
  quantity,
  setQuantity,
  mint,
  setMintLoading,
}: {
  quantity: number
  setQuantity: (qty: number) => void
  mintState: MintStatus
  setMintLoading: (x: MintStatus) => void
  mint: () => void
}) => {
  return mintState.type !== MintState.NONE ? (
    // <MintProcessing>
    <Box
      color="white"
      p={3}
      id="123"
      bg="black"
      position="relative"
      width="100%"
      minHeight={90}
    >
      <Main>
        <StyledMessage color="white">{mintState.text}</StyledMessage>
        {mintState.txn && (
          <EtherscanLink
            target="_blank"
            href={`https://${selectedNet.name}.etherscan.io/tx/${mintState.txn}`}
            rel="noopener noreferrer"
          >
            <ToastFlex>
              <div>
                <Image
                  width={25}
                  height={25}
                  src={images.ethescanLogo}
                  alt="etherscan-logo"
                />
              </div>
              <div>View on Etherscan</div>
            </ToastFlex>
          </EtherscanLink>
        )}
      </Main>
      {mintState.type == MintState.MINT_SUCCESS && (
        <Button
          backgroundColor="transparent"
          position="absolute"
          _hover={{
            background: 'transparent',
          }}
          top="0"
          right="0"
          onClick={() =>
            setMintLoading({ type: MintState.NONE, text: null, txn: null })
          }
        >
          <Image
            width={15}
            height={15}
            src={images.xIcon}
            alt="mobile-menu-close"
          />
        </Button>
      )}
    </Box>
  ) : (
    <MintSectionC>
      <Select quantity={quantity} setQuantity={setQuantity} />
      <MintBtn mint={mint} />
    </MintSectionC>
  )
}

export default MintSection
