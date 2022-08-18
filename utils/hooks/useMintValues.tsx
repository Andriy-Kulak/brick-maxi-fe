import { useEffect } from 'react'
import { ethers } from 'ethers'

function useMintValues({
  setMintValues,
  contract,
}: {
  contract: ethers.Contract
  setMintValues(x: {
    apePrice: null | number
    ethPrice: null | number
    maxSupply: null | number
    tokensLeft: null | number
  }): void
}) {
  useEffect(() => {
    ;(async () => {
      const [apePriceRaw, ethPriceRaw, tokensLeft, maxSupply] =
        await Promise.all([
          contract.PRICE_APE(),
          contract.PRICE_ETH(),
          contract.getTokensLeft(),
          contract.CURRENT_MAX_SUPPLY(),
        ])

      const apePrice = ethers.utils.formatEther(apePriceRaw)
      const ethPrice = ethers.utils.formatEther(ethPriceRaw)

      setMintValues({
        apePrice: Number(apePrice),
        ethPrice: Number(ethPrice),
        tokensLeft,
        maxSupply,
      })

      contract.on('MintSuccess', async () => {
        const tokensLeft = await contract.getTokensLeft()
        setMintValues({
          apePrice: Number(apePrice),
          ethPrice: Number(ethPrice),
          tokensLeft,
          maxSupply,
        })
      })
    })()
  }, [])
}

export default useMintValues
