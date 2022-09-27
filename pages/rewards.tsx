import { useState } from 'react'
import { ethers } from 'ethers'
import RewardsSection from '../components/RewardsSection'
import useConnect from '../utils/hooks/useConnect'
import { Nav } from '../components'
import Footer from '../components/Footer'
import HeadC from '../components/Head'
import { ContractInstance } from '../utils/types/reactState'

export default function Rewards() {
  const [ci, setContract] = useState<ContractInstance>({
    contract: null,
    signer: null,
    provider: null,
    ethAddress: '',
    ensAddress: null,
  })
  const [connectWallet, disconnect] = useConnect({ setContract })

  const displayAddress = ci.ensAddress || ci.ethAddress
  return (
    <>
      <HeadC />
      <Nav
        connectWallet={connectWallet}
        address={displayAddress}
        disconnect={disconnect}
        showLogo={true}
      />
      <RewardsSection
        connect={() => connectWallet()}
        ethAddress={ci.ethAddress}
        ensAddress={ci.ensAddress}
      />
      <Footer />
    </>
  )
}
