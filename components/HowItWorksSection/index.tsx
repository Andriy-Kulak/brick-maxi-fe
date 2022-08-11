import Image from 'next/image'
import { Main, BlackContainer, TitleH1, TitleH2Small } from '../sharedstyles'
import { Divider, ShadedTextBox } from '../'
import { images } from '../../content'
import { weight } from '../utils/fontConfigs'
import { black } from '../utils/colors'

const { bold } = weight

const HowItWorksSection = () => (
  <>
    <BlackContainer>
      <div
        style={{
          width: '100%',
          padding: '0px 50px',
        }}
      >
        <br />
        <TitleH2Small>ART THAT PAYS DIVIDENDS.</TitleH2Small>
        <Divider thick={1} color="white" />
      </div>
      <Main>
        <TitleH1>You collect art.</TitleH1>
        <TitleH1>We purchase real estate.</TitleH1>
        <TitleH1>You earn USDC rewards.</TitleH1>
      </Main>
    </BlackContainer>
    <div
      style={{
        position: 'relative',
        height: '200vh',
        backgroundColor: black,
      }}
    >
      <Image
        alt="bg-art-2"
        src={images.bgArt2}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <ShadedTextBox />
    </div>
  </>
)

export default HowItWorksSection
