import {  Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Tarjeta } from './Tarjeta'
import { Resumen } from './resumen/Resumen'
import { Historial } from './historial/Historial'
import { Idiomas } from './barraLatera/Idiomas'
import { Aptitudes } from './barraLatera/Aptitudes'
import { Habilidades } from './barraLatera/Habilidades'
import { Cursos } from './barraLatera/Cursos'

export const CV = () => {
    const fondoTrans= '#014DA1'
    const radio= '15px'
    const fondo= useColorModeValue('#1A202C', 'white');

  return (
    <Flex>
    
    <Flex 
    id={'cv'}
    className='cv'
    flexDirection={'column'}
    margin={'auto'} 
    marginTop={'1%'}
    width={'auto'}
    minWidth={'970px'} 
    height={'auto'} 
    color={'white'}
    backgroundColor={fondo}
    borderRadius={'5px'}
    >   

        <Flex 
            className='contenedor-superior'
            margin={'1%'}
            width={'auto'}
            minW={'940px'}
            height={'auto'}
            backgroundColor={fondoTrans}
            borderRadius={radio}
            justifyContent={'center'}
            >
            <Tarjeta />

        </Flex>

        <Flex className='contenedor-lateral'
            flexDirection={'row'}
            marginBottom={'1%'}
            width={'auto'}
            height={'auto'}
            >
            <Flex 
                className='contenedor-lateral1'
                margin={'1%'}
                width={'500px'}
                minWidth={'450px'}
                height={'auto'}
                backgroundColor={fondoTrans}
                borderRadius={radio}
                justifyContent={'center'}
                >
                <Flex 
                    className='contenedor-skills'
                    flexDirection={'column'}
                    margin={'2%'}
                    >
                    <Flex 
                    className='contenedor-tarjeta-idiomas'
                    margin={'1%'}
                    >
                <Idiomas />
                
                </Flex>
                <Flex 
                    className='contenedor-aptitudes'
                    margin={'1%'}
                    >
                <Aptitudes />
                        
                </Flex>
                <Flex 
                    className='contenedor-habilidades'
                    margin={'1%'}
                    >
                <Habilidades />
                </Flex>
                <Flex 
                    className='contenedor-cursos'
                    margin={'1%'}
                    >
                <Cursos/>
                </Flex>



                </Flex>
                

            </Flex>

            <Flex 
                className='contenedor-lateral2'
                marginTop={'1%'}
                marginRight={'1%'}
                marginBottom={'1%'}
                width={'1300px'}
                minWidth={'500px'}
                height={'auto'}
                border={'2px'}
                borderRadius={radio}
                backgroundColor={'white'}
                color={'black'}
                borderColor={useColorModeValue('#014DA1','#014DA1')}
                >
                    <Flex 
                        className='hoja-principal'
                        flexDirection={'column'} 
                        margin={'1%'}
                        >


                        <Flex
                            className='resumen-profesional'
                            flexDirection={'column'}
                            marginTop={'2%'}
                            >

                            <Resumen/>

                        </Flex>
                        <Flex
                            className='historia-laboral'
                            flexDirection={'column'}
                            >

                            <Historial />

                        </Flex>


                    </Flex>


            </Flex>  

    </Flex>

    

    </Flex>
    </Flex>    

  )
}
