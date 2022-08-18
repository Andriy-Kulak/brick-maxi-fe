import { toast } from 'react-toastify'
import { contractAddress, erc20ApproveAbi, selectedNet } from './web3'
import { customToast } from '../components/utils/customToast'
import errorCapture from '../utils/web3/errorCapture'
import { ethers } from 'ethers'
import { parseEther } from 'ethers/lib/utils'

export const trimAddress = (string: string) => {
  return string.slice(0, 4) + '...' + string.slice(string.length - 4)
}

// export const onMint = async ({
//   contract,
//   signer,
//   provider,
//   setMintLoading,
//   isEth,
//   quantity,
//   address,
//   mintValues,
//   chakraToast,
// }) => {
//   if (
//     contract === null ||
//     signer === null ||
//     provider === null ||
//     mintValues?.ethPrice === null ||
//     mintValues?.apePrice === null
//   ) {
//     toast.error('Please sign in before minting!')
//   } else {
//     const { chainId } = await provider.getNetwork()
//     if (chainId !== selectedNet.chainId) {
//       toast.error(
//         `App contract is on ${selectedNet.name}. Please switch to it before minting`
//       )
//     }
//     try {
//       setMintLoading(true)
//       let mintResp
//       if (isEth) {
//         const ethTotalprice = String(quantity * mintValues.ethPrice)
//         mintResp = await contract
//           .connect(signer)
//           .mintInEth(quantity, { value: parseEther(ethTotalprice) })
//       } else {
//         const apeCost = quantity * mintValues.apePrice
//         const apeTotalPrice = parseEther(String(apeCost))

//         const erc20Contract = new ethers.Contract(
//           selectedNet.testErc20Address,
//           erc20ApproveAbi,
//           provider
//         )

//         const balance = await erc20Contract
//           .connect(signer)
//           .allowance(address, contractAddress)

//         if (Number(ethers.utils.formatEther(balance)) < apeCost) {
//           const approveResp = await erc20Contract
//             .connect(signer)
//             .approve(contractAddress, apeTotalPrice)

//           await approveResp.wait()
//         }

//         mintResp = await contract.connect(signer).mintInApe(quantity)
//       }
//       if (!mintResp) {
//         throw Error('There is a minting error...')
//       }

//       customToast({
//         text: 'Transaction is pending...',
//         txn: mintResp.hash,
//         toast: chakraToast,
//       })
//       toast.info(
//         `Transaction is minting on: https://${selectedNet.name}.etherscan.io/tx/${mintResp.hash}`
//       )

//       await mintResp.wait()

//       toast.success(`SUCCESS!!!!: ${mintResp.hash}`)
//       customToast({
//         text: 'Success',
//         txn: mintResp.hash,
//         toast: chakraToast,
//       })
//       setMintLoading(false)
//     } catch (e: any) {
//       setMintLoading(false)
//       console.error('ERROR minting ==>', e)

//       errorCapture({ message: e.message, toast })
//     }
//   }
// }
