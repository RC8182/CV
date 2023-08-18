import { Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { CvContext } from '../../context/ContextoProvider'
import { DescargarPdf } from '../descargarPdf/DescargarPdf'

export const Toolbar = () => {
    
    const {setIdioma, data, idioma}= useContext(CvContext);

    const ingles=()=>{
        return setIdioma(data.ingles);
    }
    const espanol=()=>{
        return setIdioma(data.espanol);
    }

    
    

  return (
    <Flex
        className='toolbar-main'
        width={'100vw'}
        minW={'970px'}
        height={'10vh'}
        backgroundColor={'rgba(90, 126, 154, 0.49)'}
        >
        <Flex 
            className='contenedor-switcher'
            width={'50%'}
            margin={'1%'} 
            alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Flex 
            className='contenedor-idiomas'
            width={'50%'}
            margin={'1%'} 
            alignItems={'center'}
            justifyContent={'flex-end'}
            >
            <Flex margin={'1%'}>
                {(idioma === data.ingles)?
                <Button colorScheme='red' onClick={espanol}>Español</Button>:
                <Button colorScheme='blue' onClick={ingles}>English</Button>}
            </Flex>

            <Flex margin={'1%'}>
                <DescargarPdf  rootElementId='cv'/>
            </Flex>
        </Flex>

    </Flex>
  )
}
