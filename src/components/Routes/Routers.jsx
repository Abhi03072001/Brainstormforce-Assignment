import React from 'react'
import { Signup } from '../Signup';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes,Route} from 'react-router-dom'
import { Signin } from '../Signin';

export const Routers = () => {
  return (
    <div>
         <ChakraProvider>
        <Routes>
          <Route path="/" element={  <Signup />}/>
          <Route path="/signup" element={<Signin/>}/>
        </Routes>
      </ChakraProvider>
    </div>
  )
}
