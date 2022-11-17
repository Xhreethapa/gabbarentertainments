import { CalendarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Bookingone = () => {
  return (
    <Box maxWidth='300' marginTop='20'marginLeft='20' border='none' boxShadow='0px 0px 5px 0px gray; 0px 0px 0px 0px gray' borderRadius='9px' py='10' position='absolute' top='200' zIndex='200' backgroundColor='white'>
        <Flex  height='350' flexDirection='column' px='5' justifyContent='space-between'>
            <Heading>Nepathya Live in Sydney</Heading>
            <Text>Don`t miss the opportunity to witness one this ledgendry band performing live.</Text>
            <Flex alignItems='center' gap='2'>
            <CalendarIcon/><Text> Feb 13th Sydney Olympic Park</Text>
            </Flex>
            <Box>Book Your Ticket Now</Box>
            <Button>Buy Ticket</Button>

        </Flex>

    </Box>
  )
}

export default Bookingone