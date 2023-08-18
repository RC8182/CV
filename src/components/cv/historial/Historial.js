import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Rol } from './Rol'
import { CvContext } from '../../../context/ContextoProvider'

export const Historial = () => {
  const{idioma}=useContext(CvContext);

  return (
    <Flex
        className='contenedor-historial'
        flexDir={'column'}
        margin={'2%'}
        >
        <Flex
            className='titulo'
            color={'rgb(255, 154, 1)'}
            fontSize={'3xl'}>
                {idioma.historial.titulo}
        </Flex>
        {
          idioma.historial.puesto.map((e)=>{
            return <Rol fecha={e.fecha} rol={e.rol} empresa={e.empresa} tareas={e.tareas} logros={e.logros}/>
          })
        }

 
    </Flex>
  )
}
