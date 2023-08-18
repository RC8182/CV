import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,
} from '@chakra-ui/react';

import { CV } from './components/cv/CV';
import { Toolbar } from './components/toolbar/Toolbar';
import { ContextoProvider } from './context/ContextoProvider';





function App() {

  return (
    <ChakraProvider theme={theme}>
      <ContextoProvider>
        <Flex className='main' 
          width={'100vw'}
          height={'100vh'}
          flexDirection={'column'}  
          >
          <Toolbar />
          <CV />
        </Flex>
      </ContextoProvider>
    </ChakraProvider>
  );
}

export default App;
