import { CircularProgress, CircularProgressLabel, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CvContext } from '../../../context/ContextoProvider'

export const Idiomas = () => {
    const {idioma}= useContext(CvContext) 
  return (
    <Flex
        className='contenedor-tarjeta'
        margin={'1%'}
        padding={'2%'}
        width={'450px'}
        border={'1px solid rgba(17, 17, 33, 0.267)'}
        borderRadius={'8px'}
        backgroundColor={'rgba(17, 17, 33, 0.267)'}
        flexDirection={'column'}>
                <Flex 
          className='titulo-tarjeta'
          color={'rgb(255, 154, 1)'}
          margin={'1%'}
          justifyContent={'center'}
          fontSize={'3xl'}
          >
            {idioma.idiomas.titulo}
        </Flex>
        <Flex 
          className='contenedor-contenido'
          margin={'2%'}
          alignItems={'center'}
          >
          <Flex 
            className='contenido'
            flexDir={'column'}
            margin={'1%'}
            gap={'50px'}
            fontSize={'2xl'}
            >
            
            {
              idioma?.idiomas.idioma.map((e,i)=>{
              return <Flex key={i}>{e}</Flex> 
            })
            }
            
          </Flex>
          <Flex 
          className='contenido2'
          flexDir={'column'}
          margin={'1%'}
          padding={'2%'}
          >
          {
            idioma?.idiomas.nivel.map((e,i)=>{
            return <Flex key={i}>
                    <CircularProgress value={e*10} color='green.400' size={'80px'}>
                    <CircularProgressLabel>{e}</CircularProgressLabel>
                    </CircularProgress>
                   </Flex> 
          })
          }
        </Flex>
        </Flex>

    
    </Flex>
  )
}
