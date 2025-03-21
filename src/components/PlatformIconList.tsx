import { Platform } from "../hooks/usePlatform";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";


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
