import brickMaxiLogo from '../public/assets/brick_maxi_logo2.png'
import bgArt1 from '../public/assets/first_section_bg.jpg'
import bgArt2 from '../public/assets/howitworks_1920x1920.png'

import teamBgMobile from '../public/assets/team_mobile_650x1920.png'

import bgArt2Mobile from '../public/assets/howitworks_650x1200.png'
import artImg from '../public/assets/token_art.png'
import burgerIcon from '../public/assets/icons/hamburger.png'
import xIcon from '../public/assets/icons/x.png'
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
import rewardsBg from '../public/assets/rewards_bg_3.png'
import mintBtn from '../public/assets/mint_button2.png'
import collectBtn from '../public/assets/collect_button.png'
import twitterLogo from '../public/assets/twitter_logo.png'
import openseaLogo from '../public/assets/opensea_logo.png'
import animatedLogo from '../public/assets/BRICKMAXI_LOGO_ANIMATED.gif'

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
  animatedLogo,
  greyCube,
  bgArt2Mobile,
  teamBgMobile,
  twitterLogo,
  openseaLogo,
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
    title: 'How Investments are made?',
    p: `  Each artwork minted through the platform represents a unique
investment, with its own set of token holders, P&L, and subsequent
rewards. As part of our services, we vet and negotiate investment
oppurtunities, hire day-to-day management, and facilitate the voting
process. In some cases, we may consolidate funds from multiple mints
into one investment.`,
    key: 1,
  },
  { title: 'Earning rewards', p: '...tbd', key: 2 },
  {
    title: 'Where are communications managed?',
    p: '...tbd',
    key: 3,
  },
  {
    title: 'Are token holders required to vote on proposals?',
    p: '...tbd',
    key: 4,
  },
  {
    title: 'What happens after an investment is liquidated?',
    p: '...tbd',
    key: 5,
  },
  {
    title: 'How do artists apply to Brick Maxi?',
    p: '...tbd',
    key: 6,
  },
  { title: 'Are there platform fees?', p: '...tbd', key: 7 },
  { title: 'Contact us', p: '...tbd', key: 8 },
]

export const tokenSection = {
  title: 'TOKEN NAME',
  artist: 'bottoproject',
  description:
    'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at. This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at. This is the info that goes here that is the info that',
  type: 'Residential',
}

export const teamProfiles = [
  {
    name: 'ADAM FOGEL',
    role: 'founder',
    key: 1,
    imgSrc: adamImg,
    twitterUrl: 'https://twitter.com/adamfogel',
    openseaUrl: 'https://opensea.io/adamfvault',
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
    title: 'VAULT YOUR ART',
    desc: 'We’ve built a technology that brings collectors together and puts the reward earning power in their hands. After minting works by leading artists, collectors have the freedom to allocate mint funds as they see fit across IRL real estate assets. Income that’s earned by those assets is then shared among token holders, including funds from liquidation.',
    key: 1,
  },
  {
    title: 'THE MINT',
    desc: 'We only mint one token at a time through the site, giving each artist their time and space. The entire design of the site gets taken over by the artist’s work, a homage to their history. Artist fees are prioritized when mint funds are collected, the platform takes its cut, and the rest is available for allocation.',
    key: 2,
  },
  {
    title: 'REWARDS',
    desc: 'Imagine a rental property that collects rent checks every month (or perhaps a REIT paying regular dividends), paired with a technology that distributes that income to token holders. The more tokens you hold, the greater your rewards.',
    key: 3,
  },
]
