import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import { images } from '../../content'

const CollectBtn = ({ onClick }: { onClick: () => void }) => (
  <Button colorScheme="white" onClick={onClick}>
    <Image width={110} height={50} src={images.collectBtn} alt="collect-btn" />
  </Button>
)

export default CollectBtn
