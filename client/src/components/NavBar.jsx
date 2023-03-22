import {
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Image,
  HStack,
  Icon,
} from "@chakra-ui/react";
import logo from "../assets/xedit.png";
import React from "react";
import { BiSave } from "react-icons/bi";

export default function NavBar() {
  return (
    <HStack bg="#CEE3D4" p={3} justifyContent={"space-between"} borderRadius=".3rem .3rem 0 0">
      <Box>
        <HStack>
          <Image src={logo} width={"35px"} />
          <Editable px={2} defaultValue="Untitled Document">
            <EditablePreview />
            <EditableInput px={2} />
          </Editable>
        </HStack>
      </Box>
      {/* <Icon
        as={BiSave}
        color={"#298CFF"}
        backgroundColor={"#62FDFF"}
        boxSize={10}
        p={2}
        borderRadius={"full"}
        _hover={{
          backgroundColor: "white",
          color: "teal.500",
        }}
      /> */}
    </HStack>
  );
}
