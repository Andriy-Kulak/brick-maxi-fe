import { ethers } from 'ethers'

export enum MintState {
  NONE,
  MINT_IN_POGRESS,
  MINT_SUCCESS,
  ERC20_ALLOWANCE_IN_PROGRESS,
}

export type MintStatus = {
  type: MintState
  text: null | string
  txn: null | string
}

export type ContractInstance = {
  contract: ethers.Contract | null
  signer: ethers.Signer | null
  provider: ethers.providers.Web3Provider | null
  ethAddress: string
  ensAddress: null | string
}

export enum MintPhases {
  COMING_SOON,
  ALLOW_LIST,
  LIVE,
  CLOSED,
}
