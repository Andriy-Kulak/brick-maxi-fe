import { useState } from 'react'
import { ethers } from 'ethers'
import RewardsSection from '../components/RewardsSection'
import useConnect from '../utils/hooks/useConnect'
import { Nav } from '../components'
import Footer from '../components/Footer'

export default function Rewards() {
  const [ci, setContract] = useState<{
    contract: ethers.Contract | null
    signer: ethers.Signer | null
    provider: ethers.providers.Web3Provider | null
    address: string
  }>({
    contract: null,
    signer: null,
    provider: null,
    address: '',
  })
  const [connectWallet, disconnect] = useConnect({ setContract })
  return (
    <>
      <Nav
        connectWallet={connectWallet}
        address={ci.address}
        disconnect={disconnect}
        showLogo={true}
      />
      <RewardsSection connect={() => connectWallet()} address={ci.address} />
      <Footer />
    </>
  )
}
