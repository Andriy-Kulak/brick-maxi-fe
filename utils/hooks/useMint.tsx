import { ethers } from 'ethers'
import { useToast } from '@chakra-ui/react'
import { selectedNet } from '../web3'
import { parseEther } from 'ethers/lib/utils'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { customToast } from '../../components/utils/customToast'
import errorCapture from '../web3/errorCapture'

const useMint = async ({
  ci,
  quantity,
  setMintLoading,
  isEth,
}: {
  ci: {
    contract: ethers.Contract | null
    signer: ethers.Signer | null
    provider: ethers.providers.Web3Provider | null
    address: string
  }
  quantity: number
  setMintLoading: (state: boolean) => void
  isEth: boolean
}) => {
  const chakraToast = useToast()
  const onMint = async () => {
    if (ci.contract === null || ci.signer === null || ci.provider === null) {
      toast.error('Please sign in before minting!')
    } else {
      const { chainId } = await ci.provider.getNetwork()
      if (chainId !== selectedNet.chainId) {
        toast.error(
          `App contract is on ${selectedNet.name}. Please switch to it before minting`
        )
      }
      try {
        setMintLoading(true)
        let mintResp
        if (isEth) {
          const price = String(quantity * 0.02)
          mintResp = await ci.contract
            .connect(ci.signer)
            .mintInEth(quantity, { value: parseEther(price) })
        } else {
          mintResp = await ci.contract.connect(ci.signer).mintInApe()
        }
        if (!mintResp) {
          throw Error('There is a minting error...')
        }

        customToast({
          text: 'Transaction is pending...',
          txn: mintResp.hash,
          toast: chakraToast,
        })
        toast.info(
          `Trasnaction is minting on: https://${selectedNet.name}.etherscan.io/tx/${mintResp.hash}`
        )

        const receipt = await mintResp.wait()

        toast.success(`SUCCESS!!!!: ${mintResp.hash}`)
        customToast({
          text: 'Success',
          txn: mintResp.hash,
          toast: chakraToast,
        })
        console.log('success receipt', receipt)
        setMintLoading(false)
      } catch (e: any) {
        setMintLoading(false)
        console.error('ERROR minting ==>', e)

        errorCapture({ message: e.message, toast })
      }
    }
  }
  return [onMint]
}

export default useMint
