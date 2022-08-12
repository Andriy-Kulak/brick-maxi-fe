import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import mintBtn from '../../public/assets/mint_button.png'

const MintBtn = ({ mint }: { mint: () => void }) => (
  <Button colorScheme="white" style={{ margin: ' 10px 10px' }} onClick={mint}>
    <Image width={124} height={58} src={mintBtn} alt="mint-btn" />
  </Button>
)

export default MintBtn
