import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import Platform from "../entities/Platform";


interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
const iconMap: { [key: string] : IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
}

  return (
    <HStack margin={1}>
      {platforms.map((platflorm) => (
        <Icon key={platflorm.id} as={iconMap[platflorm.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
