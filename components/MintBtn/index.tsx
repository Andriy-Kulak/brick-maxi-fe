import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import { images } from '../../content'

const MintBtn = ({ mint }: { mint: () => void }) => (
  <Button colorScheme="white" style={{ margin: '10px 10px' }} onClick={mint}>
    <Image width={110} height={50} src={images.mintBtn} alt="mint-btn" />
  </Button>
)

export default MintBtn
