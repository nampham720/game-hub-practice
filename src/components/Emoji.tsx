import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumsUp from '../assets/thumbs-up.webp'

interface Props {
    rating: number; 
}

const Emoji = ({rating}: Props) => {
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: '20px'},
        4: { src: thumsUp, alt: 'recommended', boxSize: '25px'},
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px'},
    }
    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji