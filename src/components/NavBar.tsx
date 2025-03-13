import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/bulls-eye.webp'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'>
        </Image>
        <Text>Nav bar</Text>
    </HStack>
  )
}

export default NavBar