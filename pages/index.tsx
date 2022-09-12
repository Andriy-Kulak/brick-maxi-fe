import { useState, useLayoutEffect, useRef } from 'react'
import { ethers } from 'ethers'
import { ToastContainer, toast } from 'react-toastify'
import { Nav, ArtistSection } from '../components'

import { artistSection } from '../content'
import TokenSection from '../components/TokenSection'
import HowItWorksSection from '../components/HowItWorksSection'
import LandingSection from '../components/LandingSection'
import FaqSection from '../components/FaqSection'
import {
  contract,
  contractAddress,
  erc20ApproveAbi,
  selectedNet,
} from '../utils/web3'
import { parseEther } from 'ethers/lib/utils'

import 'react-toastify/dist/ReactToastify.css'
import { customToast } from '../components/utils/customToast'
import errorCapture from '../utils/web3/errorCapture'
import useConnect from '../utils/hooks/useConnect'
import useMintValues from '../utils/hooks/useMintValues'
import UpcomingDropsSection from '../components/UpcomingDropsSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

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

type ContractInstance = {
  contract: ethers.Contract | null
  signer: ethers.Signer | null
  provider: ethers.providers.Web3Provider | null
  address: string
}

export type LogoParamProps = {
  w: number
  h: number
  imgMarginLeft: number
  imgMarginRight: number
  scrollY: number
  isSwitchLogo: boolean
}

export default function Home() {
  const [mintState, setMintLoading] = useState<MintStatus>({
    type: MintState.NONE, // mintSuccess // erc20Allowance
    text: null,
    txn: null,
  })
  const [isEth, setEth] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [ci, setContract] = useState<ContractInstance>({
    contract: null,
    signer: null,
    provider: null,
    address: '',
  })

  const [mintValues, setMintValues] = useState<{
    apePrice: null | number
    ethPrice: null | number
    tokensLeft: null | number
    maxSupply: null | number
  }>({
    apePrice: null,
    ethPrice: null,
    maxSupply: null,
    tokensLeft: null,
  })

  const logoRef = useRef<HTMLDivElement>(null)
  const [connectWallet, disconnect] = useConnect({ setContract })

  useMintValues({ contract, setMintValues })

  const [logoParams, setLogoParams] = useState<LogoParamProps>({
    w: 200,
    h: 200,
    imgMarginLeft: 0,
    imgMarginRight: 0,
    scrollY: 0,
    isSwitchLogo: false,
  })
  const handleScroll = () => {
    // Get the current scrollY point
    const sY = window.scrollY

    // explination of math
    // logo starts at 200 (w) by 200 (h) in desktop mode
    // in mobile the logo is 77 (w) by 77 (h)

    // at 0 should be 200  by 200
    // 276 should be 77 by 77
    // 200-55 = 145

    // calculating where the logo is in relationsh to top of viewport
    const top = logoRef?.current?.getBoundingClientRect()?.top as number

    // calc1 determines how proprtionaly we should increase or decrease size of logo as user scroll
    const calc1 = 200 - 145 * (sY / 260)

    // calc2 determines how much to move the image to left with margin on desktop to make it smooth
    const calc2 = 145 * (sY / 260)

    // cal3 determines how much to move the image to right with margin on mobile to make it smooth
    // i am using innewidth to proportionally adjust margin depending on different screen sizes
    const calc3 = (sY * window.innerWidth) / 520
    const calc1Min = Math.max(77, calc1)

    setLogoParams({
      w: calc1Min,
      h: calc1Min,

      // padding should never be more than 200. if it is, it will affect mobile on scroll since most screens are <= 400 pixels
      imgMarginLeft: Math.min(200, calc2),
      imgMarginRight: calc3,
      scrollY: window.scrollY,
      isSwitchLogo: typeof top === 'number' && top < 0 ? true : false,
    })
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  // this will be used once mint is live
  const onMint = async () => {
    if (
      ci.contract === null ||
      ci.signer === null ||
      ci.provider === null ||
      mintValues?.ethPrice === null ||
      mintValues?.apePrice === null
    ) {
      toast.error('Please sign in before minting!')
    } else {
      const { chainId } = await ci.provider.getNetwork()
      if (chainId !== selectedNet.chainId) {
        toast.error(
          `App contract is on ${selectedNet.name}. Please switch to it before minting`
        )
      }
      try {
        let mintResp
        if (isEth) {
          const ethTotalprice = String(quantity * mintValues.ethPrice)
          mintResp = await ci.contract
            .connect(ci.signer)
            .mintInEth(quantity, { value: parseEther(ethTotalprice) })
        } else {
          const apeCost = quantity * mintValues.apePrice
          const apeTotalPrice = parseEther(String(apeCost))

          const erc20Contract = new ethers.Contract(
            selectedNet.testErc20Address,
            erc20ApproveAbi,
            ci.provider
          )

          const balance = await erc20Contract
            .connect(ci.signer)
            .allowance(ci.address, contractAddress)

          toast.info(`Transaction is pending!`)
          if (Number(ethers.utils.formatEther(balance)) < apeCost) {
            const approveResp = await erc20Contract
              .connect(ci.signer)
              .approve(contractAddress, apeTotalPrice)

            setMintLoading({
              type: MintState.ERC20_ALLOWANCE_IN_PROGRESS,
              text: 'Approving ERC20',
              txn: approveResp.hash,
            })

            await approveResp.wait()
          }

          mintResp = await ci.contract.connect(ci.signer).mintInApe(quantity)
        }
        if (!mintResp) {
          throw Error('There is a minting error...')
        }

        setMintLoading({
          type: MintState.MINT_IN_POGRESS,
          text: 'Mint In Progress',
          txn: mintResp.hash,
        })
        toast.info(`Transaction is pending!`)

        await mintResp.wait()

        toast.success(`Transaction success!`)

        setMintLoading({
          type: MintState.MINT_SUCCESS,
          text: 'Success!',
          txn: mintResp.hash,
        })
      } catch (e: any) {
        setMintLoading({
          type: MintState.NONE,
          text: null,
          txn: null,
        })
        console.error('ERROR minting ==>', e)

        errorCapture({ message: e.message, toast })
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <Nav
        connectWallet={connectWallet}
        address={ci.address}
        disconnect={disconnect}
        showLogo={logoParams.isSwitchLogo}
      />
      <LandingSection logoParams={logoParams} logoRef={logoRef} />
      {/* <TokenSection
        mintValues={mintValues}
        isEth={isEth}
        currencySwitch={() => setEth(!isEth)}
        mint={() => onMint()}
        mintState={mintState}
        setMintLoading={setMintLoading}
        quantity={quantity}
        setQuantity={setQuantity}
      /> */}

      <HowItWorksSection />
      <UpcomingDropsSection />
      <TeamSection />
      {/* <ArtistSection content={artistSection} /> */}
      <FaqSection />
      <Footer />
    </>
  )
}
