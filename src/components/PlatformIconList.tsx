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
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

type Props = {
  platforms: Platform[];
};

// instead of worrying about rendering some icons. First let's just render some text. and see if we can integrate
// this component with our GameCard properly

// to map name of each platform with its icon. For that we won't write bunch  of if statements thats ugly. Instead we should use object as a map.

const PlatformIconList = ({ platforms = [] }: Props) => {
  // In this iconMap obj we will have keys that represent slug of each platform.
  // each platform has
  // name : PlayStation
  // slug : playstation (think of slug as textual id.) generally speaking it's better to rely on slug because it is not suppose to change.

  // we use index signature to define type of keys that we have.
  const iconMap: { [key: string]: IconType } = {
    // so here we will map slug of each platform to an icon.
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    // if we set it to numeric value it will be multiple of theme.space value which is 4px in chakra.
    // so if we pass 1 here result would be 4px.
    // generally speaking it is better to use numeric value to be consistent thought our application.
    // but sometimes we need precious control at that time we can use px.
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        // currently title and icon have same color. So giving icon different color to reduce visual noise. and some margin to create separation
      ))}
    </HStack>
  );
};

export default PlatformIconList;
