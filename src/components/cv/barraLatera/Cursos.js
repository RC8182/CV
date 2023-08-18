import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { VerCertificado } from '../certificaciones/VerCertificado'
import { CvContext } from '../../../context/ContextoProvider'

export const Cursos = () => {
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
        flexWrap={'wrap'}
        flexDirection={'column'}>
        <Flex 
          className='titulo-tarjeta'
          color={'rgb(255, 154, 1)'}
          margin={'1%'}
          justifyContent={'center'}
          fontSize={'3xl'}
          >
            {idioma.cursos.titulo}
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
            gap={'25px'}
            fontSize={'2xl'}
            >

            {
            idioma?.cursos.curso.map((e,i)=>{
                return <Flex key={i} flexDirection={'column'}>
                        <VerCertificado nombre={e.nombre} certificado={e.url}/>
                       </Flex>
              })
            }
          </Flex>

        </Flex>

    </Flex>
  )
}
