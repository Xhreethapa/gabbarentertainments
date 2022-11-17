import { Box } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Bookingone from './Compo/Bookingone';
import Mainimg from './Compo/Mainimg';
import Navbar from './Compo/Navbar';
import Upcoming from './Compo/Upcoming';

function App() {
  return (
    
    <Box >
      
        <Navbar/>
        <Mainimg/>
        
        <Bookingone/>

        {/* <Upcoming/> */}
      
        
       
    </Box>
  );
}

export default App;
