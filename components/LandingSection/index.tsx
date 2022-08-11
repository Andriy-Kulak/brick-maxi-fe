import Image from 'next/image'
import styled from 'styled-components'
import { TitleH2, Main100h } from '../sharedstyles'
import { images } from '../../content'
import { tabletBr } from '../../utils/breakpoints'

const ImageC = styled.div`
  width: 200px;
  height: 200px;

  @media screen and (max-width: ${tabletBr}) {
    width: 150px;
    height: 160px;
  }
`

const LandingSection = () => (
  <div
    style={{
      position: 'relative',
      height: '90vh',
    }}
  >
    <Image
      alt="bg-art-1"
      priority
      src={images.bgArt1}
      objectFit="cover"
      objectPosition="center"
      layout="fill"
    />
    <Main100h>
      <ImageC>
        <Image
          alt="Brick Maxi Logo"
          src={images.brickMaxiLogo}
          height={200}
          width={200}
        />
      </ImageC>
      <TitleH2 style={{ position: 'relative', zIndex: 1 }}>
        ART THAT PAYS DIVIDENS.
      </TitleH2>
    </Main100h>
  </div>
)

export default LandingSection
