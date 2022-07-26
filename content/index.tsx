import brickMaxiLogo from '../public/assets/brick_maxi_logo2.png'
import bgArt1 from '../public/assets/first_section_bg.jpg'
import bgArt2 from '../public/assets/howitworks_1920x1920.png'
import teamBgMobile from '../public/assets/team_mobile_650x1920.png'
import landingBgMobile from '../public/assets/landing_mobile_650x1200.png'
import bgArt2Mobile from '../public/assets/howitworks_650x1200.png'
import artImg from '../public/assets/token_art.png'
import rewardsBg from '../public/assets/rewards_bg_full.jpeg'

import burgerIcon from '../public/assets/icons/hamburger.png'
import xIcon from '../public/assets/icons/x.png'
import whiteArrow from '../public/assets/icons/white_arrow.png'
import ethescanLogo from '../public/assets/icons/etherscan-logo.webp'
import apecoinLogo from '../public/assets/icons/apecoin.png'
import greyCube from '../public/assets/icons/grey_cube.png'
import missionTitle from '../public/assets/titles/MISSION_WHITE.png'
import howItWorksTitle from '../public/assets/titles/HOW_IT_WORKS_WHITE.png'
import upcomingDropsTitle from '../public/assets/titles/UPCOMING_DROPS_WHITE.png'
import artistsTitle from '../public/assets/titles/ARTISTS_WHITE.png'
import teamTitle from '../public/assets/titles/TEAM_WHITE.png'
import rewardsTitle from '../public/assets/titles/REWARDS_HEADING.png'
import faqWhiteTitle from '../public/assets/titles/FAQ_WHITE.png'
import faqBlackTitle from '../public/assets/titles/FAQ_BLACK.png'
import whiteSquiggleLine from '../public/assets/titles/WHITE_SQUIGGLE_LINE.png'
import imgSample from '../public/assets/brickMaxiSample.png'
import adamImg from '../public/assets/adam.gif'
import mollyImg from '../public/assets/molly.gif'
import andriyImg from '../public/assets/andriy.gif'
import mintBtn from '../public/assets/mint_button2.png'
import collectBtn from '../public/assets/collect_button.png'
import twitterLogo from '../public/assets/twitter_logo.png'
import openseaLogo from '../public/assets/opensea_logo.png'
import tezosLogo from '../public/assets/tezos_logo.png'
import questionmark from '../public/assets/questionmark.png'
import whiteLogo from '../public/assets/logo_white.png'
import looksrareLogo from '../public/assets/icons/looks_mintpage.png'
import shareIcon from '../public/assets/icons/share.png'
import superrareLogo from '../public/assets/icons/SR-mintpage.png'
import mintLineBottom from '../public/assets/mint_line_bottom.png'
import mintLineTop from '../public/assets/mint_line_top.png'
import bottomLeftCorner from '../public/assets/corners/bottom_left.png'
import bottomRightCorner from '../public/assets/corners/bottom_right.png'
import topLeftCorner from '../public/assets/corners/top_left.png'
import topRightCorner from '../public/assets/corners/top_right.png'
import leftSideMiddleCorner from '../public/assets/corners/leftside_middle.png'
import rightSideMiddleCorner from '../public/assets/corners/rightside_middle.png'
import mobileTopLeftCorner from '../public/assets/corners/mobile_top_left.png'
import mobileTopRightCorner from '../public/assets/corners/mobile_top_right.png'
import mobileBottomLeftCorner from '../public/assets/corners/mobile_bottom_left.png'
import mobileBottomRightCorner from '../public/assets/corners/mobile_bottom_right.png'

export const images = {
  brickMaxiLogo,
  bgArt1,
  bgArt2,
  artImg,
  burgerIcon,
  xIcon,
  ethescanLogo,
  apecoinLogo,
  missionTitle,
  howItWorksTitle,
  artistsTitle,
  imgSample,
  rewardsBg,
  rewardsTitle,
  mintBtn,
  collectBtn,
  faqWhiteTitle,
  faqBlackTitle,
  whiteSquiggleLine,
  upcomingDropsTitle,
  teamTitle,
  whiteLogo,
  greyCube,
  bgArt2Mobile,
  teamBgMobile,
  landingBgMobile,
  twitterLogo,
  openseaLogo,
  tezosLogo,
  whiteArrow,
  questionmark,
  looksrareLogo,
  shareIcon,
  superrareLogo,
  mintLineBottom,
  mintLineTop,
  bottomLeftCorner,
  bottomRightCorner,
  topLeftCorner,
  topRightCorner,
  leftSideMiddleCorner,
  rightSideMiddleCorner,
  mobileTopLeftCorner,
  mobileTopRightCorner,
  mobileBottomLeftCorner,
  mobileBottomRightCorner,
}

export const artistSection = [
  {
    key: 1,
    name: 'Artist 1',
  },
  {
    key: 2,
    name: 'Artist 2',
  },
  {
    key: 3,
    name: 'Artist 3',
  },
]

export const faqAccordion = [
  {
    title: 'How are rewards earned?',
    p: 'Rewards are earned by holding a token that’s linked to a real estate asset that’s earning income. The more tokens you hold, the greater your share of the income. When a distribution is available, we’ll take a snapshot of holder wallets and USDC rewards will be made available for claim through BrickMaxi.com. Brick Maxi does not guarantee that any amount of rewards will be earned by token holders or that a given mint will generate sufficient funds for an allocation to be made.',
    key: 2,
  },
  {
    title: 'How are mint funds allocated?',
    p: 'Artists have first priority to mint funds. These fees are negotiated on a case by case basis as they vary greatly from artist to artist. Any mint funds collected in excess of the artist fees will be available for collector investment and platform fees.',
    key: 3,
  },
  {
    title: 'Platform fees',
    p: 'The platform earns 15% of the mint and tokens. These fees support our efforts across product development, facilitation of governance, artist outreach, community, marketing, and more.',
    key: 4,
  },
  {
    title: 'Where are communications managed?',
    p: 'As of now, Twitter (twitter.com/brickmaxi) is our primary channel for communication. In the future, token specific updates will be managed through the website. Additional channels for community discussions will be added as needed.',
    key: 5,
  },
  {
    title: 'What happens when an asset is liquidated?',
    p: 'Once an asset is liquidated, holders will receive their final distributions and the token’s status will then be updated to reflect that it is no longer earning rewards. Most importantly, token holders get to keep their art.',
    key: 6,
  },
  {
    title: 'Are tokens considered securities?',
    p: `
    Brick Maxi tokens are not considered securities. We’re a marketplace that connects buyers and sellers. As a buyer, you’re obligated to actively manage your own assets by voting in a governance program with other buyers. This is not passive income. \nBrick Maxi does not make any management decisions on your behalf and has no ability to affect the income or appreciation generated by the underlying real estate. This is equivalent to you purchasing a rental property with friends and collectively managing it together, which is one of the most common forms of real estate investing in the US and has historically never been regulated by the SEC.`,
    key: 7,
  },
  {
    title: 'How do artists apply?',
    p: 'We love meeting new artists! Please send us a dm via twitter (twitter.com/brickmaxi) and share links to both your social media and any marketplaces where you’ve listed your works. We’ll do our best to respond to each and every one of you.',
    key: 8,
  },
]

export const tokenSection = {
  title: 'TOKEN NAME',
  artist: 'bottoproject',
  description:
    'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at. This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at. This is the info that goes here that is the info that',
  type: 'Residential',
  superRareUrl: 'https://www.instagram.com/savemolly',
  twitterUrl: 'https://www.instagram.com/savemolly',
  looksrareUrl: 'https://www.instagram.com/savemolly',
  openseaUrl: 'https://www.instagram.com/savemolly',
}

export const teamProfiles = [
  {
    name: 'ADAM FOGEL',
    role: 'founder',
    key: 1,
    imgSrc: adamImg,
    twitterUrl: 'https://twitter.com/adamfogel',
    openseaUrl: 'https://bit.ly/3eyeG9s',
    tezosUrl:
      'https://objkt.com/profile/adamf/owned?sort=lowest_ask:desc&page=1',
  },
  {
    name: 'MOLLY DICKSON',
    role: 'lead designer',
    key: 2,
    imgSrc: mollyImg,
    twitterUrl: 'https://twitter.com/savemolly',
  },
  {
    name: 'ANDRIY KULAK',
    role: 'lead engineer',
    key: 3,
    imgSrc: andriyImg,
    twitterUrl: 'https://twitter.com/andriy3k',
  },
]

export const rewardsTableContent = [
  {
    date: '-',
    tokenId: '-',
    tokenNumbers: '-',
    rewardsTotal: '-',
    key: 1,
  },
  {
    date: '-',
    tokenId: '-',
    tokenNumbers: '-',
    rewardsPer: '-',
    rewardsTotal: '-',
    key: 2,
  },
  {
    date: '-',
    tokenId: '-',
    tokenNumbers: '-',
    rewardsPer: '-',
    rewardsTotal: '-',
    key: 3,
  },
]

export const howItWorksContent = [
  {
    title: 'COLLECT & VAULT',
    desc: "Brick Maxi aligns everyone to the long term, so collectors can pass their works on to the next generation. If a mint is successful, collectors vote to determine how mint funds will be invested across real world, real estate assets. The artworks represent ownership stakes in these assets and grant holders unlimited USDC rewards from income that's earned.",
    key: 1,
  },
  {
    title: 'THE MINT',
    desc: "Each artist is given our undivided attention. We only mint one project at a time and keep its economics separate from other projects. Mint proceeds go exclusively to the artist until their fee is fully paid. Any additional funds are made available for collector investment and the platform's fee.",
    key: 2,
  },
  {
    title: 'KEEPING IT ON-CHAIN',
    desc: 'Real estate is a $320 trillion industry that’s being disrupted by the blockchain, resulting in dozens of on-chain investment opportunities with varying risk/reward profiles. These include investment marketplaces, lending protocols, real estate backed stablecoins, and more. Keeping it on-chain means reducing asymmetry of information, maintaining transparency, and lowering transaction costs.',
    key: 3,
  },
]
