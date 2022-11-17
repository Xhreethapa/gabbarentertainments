import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/gabbar.jpeg'

const Logo = () => {
  return (
    <Box>
        <Box display='flex' gap='3' alignItems='center'>
         <Image h='80px' width='70px' src={logo}/>
         <Heading fontSize="16">GABBAR ENTERTAINMENTS</Heading>
        </Box>
    </Box>
  )
}

export default Logo