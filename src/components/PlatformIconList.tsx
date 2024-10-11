import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaLinux,
  FaApple,
  FaIoxhost,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from "../Hook/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {

    const IconMap : {[key : string] : IconType} ={
        pc : FaWindows ,
        playsation : FaPlaystation,
        android : FaAndroid ,
        linux: FaLinux,
        mac : FaApple ,
        xbox: FaXbox,
        ios : MdPhoneIphone,
        nintendo : SiNintendo ,
        web : BsGlobe


    }
  return (
    <>
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={IconMap[platform.slug]} color={"gray.500"}/>
      ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
