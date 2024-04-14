import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} width="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

// searchInput is not the direct child of our 'app component'. It is inside the navbar So we are passing function from app component to navbar and then
// from navbar to the searchInput.
// But this can be a issue if we have a deeply nested structure ?
// > we learn how to handle issue like this in the next part.
