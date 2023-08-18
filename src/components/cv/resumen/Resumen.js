import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CvContext } from '../../../context/ContextoProvider'

export const Resumen = () => {
  const {idioma}= useContext(CvContext)
  return (
    <Flex
        className='contenedor-resumen'
        flexDir={'column'}
        margin={'2%'}
        >
        <Flex
            className='titulo'
            color={'rgb(255, 154, 1)'}
            fontSize={'3xl'}>
                {idioma.resumen.titulo}
        </Flex>
        <Flex
        fontSize={'2xl'}>
                <text>
                    {idioma.resumen.resumen.map((e)=>{
                      return <p>{e}</p> 
                    })}
                </text>   
        </Flex>
 
    </Flex>
  )
}
