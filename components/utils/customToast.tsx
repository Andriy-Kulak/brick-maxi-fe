import React from 'react'
import styled from 'styled-components'
import { Button, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { images } from '../../content'
import { StyledP, Main } from '../sharedstyles'

const EtherscanLink = styled.a`
  margin-top: 15px;
  border: 2px solid white;

  image {
    padding: 3px !important;
  }
`

const ToastFlex = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 8px 7px 5px;
  > div:first-child {
    margin-right: 5px;
  }
`

const customToast = ({
  toast,
  text,
  txn,
}: {
  toast: any
  text: string
  txn?: string
}) => {
  return toast({
    duration: 15000,
    position: 'bottom',
    render: () => (
      <Box
        color="white"
        p={3}
        id="123"
        bg="black"
        position="relative"
        width={355}
        minHeight={137}
      >
        <Main>
          <StyledP color="white">{text}</StyledP>
          {txn && (
            <EtherscanLink
              target="_blank"
              href={`https://goerli.etherscan.io/tx/${txn}`}
              rel="noopener noreferrer"
            >
              <ToastFlex>
                <div>
                  <Image
                    width={25}
                    height={25}
                    src={images.ethescanLogo}
                    alt="mobile-menu-open"
                  />
                </div>
                <div>View On Etherscan</div>
              </ToastFlex>
            </EtherscanLink>
          )}
        </Main>
        <Button
          backgroundColor="transparent"
          position="absolute"
          _hover={{
            background: 'transparent',
          }}
          top="0"
          right="0"
          onClick={() => toast.closeAll()}
        >
          <Image
            width={15}
            height={15}
            src={images.xIcon}
            alt="mobile-menu-close"
          />
        </Button>
      </Box>
    ),
  })
}

export { customToast }
