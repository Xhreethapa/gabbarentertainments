import { Box, useDisclosure,Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  
    const[ open , setOpen]= useState(false)
    const { isOpen,onOpen, onClose } = useDisclosure();

    
    const handleClick=()=>{
        setOpen(true);
        onOpen()
    }
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        position='sticky'
        top='0'
        zIndex="200"
        height="100px"
        alignItems="center"
        width="100%"
        px={{base:'5',sm:'10', md:'20'}}
       backgroundColor='white'
      >
        <Logo />
        <Box onClick={handleClick} display="flex" flexDirection="column" gap="1">
          <Box border="1px solid black" w="20px"></Box>
          <Box border="1px solid black" w="20px"></Box>
          <Box border="1px solid black" w="20px"></Box>
        </Box>
      </Box>
      { open  && <> <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><Logo/></DrawerHeader>
          <DrawerBody>
            <Box display="flex" flexWrap='wrap'>
            <p>Home</p>
            <p>View Upcoming Events</p>
            <p>About Us </p>
            <p>Contact Us</p>
            <p>Blogs</p>
            <p>Login</p>
            <p>SignUp</p>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer></>}
    </>
  );
};

export default Navbar;
