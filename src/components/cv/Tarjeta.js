import { Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Info } from './info/Info'
import { CvContext } from '../../context/ContextoProvider'
// import { DescargarPdf } from '../descargarPdf/DescargarPdf'

export const Tarjeta = () => {
  const{idioma}= useContext(CvContext)

  const movil= idioma.infoPersonal.contacto[0];
  const email= idioma.infoPersonal.contacto[1];
  const ubicacion=idioma.infoPersonal.contacto[2];
  const github= idioma.infoPersonal.contacto[4];
  const linkedin= idioma.infoPersonal.contacto[3];
  return (
    <Flex
      className='contenedor-tarjeta'
      margin={'1%'}
      width={{base:'850px', md:'1800px'}}
      flexDirection={{base:'column', md:'column', lg:'row'}}
      backgroundColor={'rgba(17, 17, 33, 0.267)'}
      borderRadius={'5px'}>
      <Flex 
        className='foto'
        justifyContent={'center'}
        margin={{base:'1%', md:'0'}}>
        <Image
          border={'1px'}
          borderColor={'rgba(17, 17, 33, 0.267)'}
          borderLeftRadius={'5px'}
          objectFit='cover'
          width={{base:'150px', sm:'300px', md:'500px'}}
          justifyContent={{base:'center', lg:'flex-start'}}
          src= {require('./icons/usuario.png')}
          alt='Foto Javier Visconti'
        />
      </Flex>
      <Flex
        className='cuerpo-tarjeta'
        flexDirection={{base:'column'}}
        margin={'1%'}
        padding={'1%'}
        width={'auto'}
        >
        <Flex
          className='nombre'
          justifyContent={'center'}
          fontSize={'7xl'}>
          {idioma.infoPersonal.nombre}
        </Flex>
        <Flex
          className='profesion'
          justifyContent={'center'}
          fontSize={'4xl'}
          margin={'1%'}>
          {idioma.infoPersonal.profesion}
        </Flex>
        <Flex
          className='contenedor-info'
          flexDirection={{base:'column', md:'row'}}
          flexWrap={'wrap'}
          >
          <Flex 
            className='columna-info1'
            flexDirection={'column'}
            fontSize={'2xl'}
            >
              <Flex >
                  <Info 
                      icono='movil.png' 
                      clave={movil}
                      valor= '+34 648 616 513'    
                      />
              </Flex>
              <Flex>
                  <Info 
                      icono='email.png' 
                      clave={email}
                      valor= 'javiervisconti7@gmail.com'    
                      />
              </Flex>

          </Flex>
          <Flex 
            className='columna-info2'
            flexDirection={'column'}
            fontSize={'2xl'}>
              <Flex>
                  <Info 
                      icono='ubicacion.png' 
                      clave={ubicacion}
                      valor= 'Tenerife'    
                      />
              </Flex>
              <Flex>
              <Info 
                  icono='git.png' 
                  clave={github}
                  valor= 'https://github.com/RC8182/'
                  link='true'    
                  />
              </Flex>
          </Flex>
          <Flex 
            className='columna-info3'
            flexDirection={'column'}
            fontSize={'2xl'}
            >
              <Flex>
                  <Info 
                  icono='in.png' 
                  clave={linkedin}
                  valor= 'https://www.linkedin.com/in/javier-visconti-1a5b73178/'  
                  link='true' 
                  />
              </Flex>

          </Flex>          
        </Flex>
        {/* <Flex
          className='boton'
          justifyContent={'center'}>
         
         <DescargarPdf downloadFileName="CustomPdf" rootElementId='cv'/>

        </Flex> */}
      </Flex>
    </Flex>
  )
}
