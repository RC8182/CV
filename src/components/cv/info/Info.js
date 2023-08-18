import { Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'

export const Info = (props) => {
    const clave= props.clave
    const valor= props.valor
    const icono= props.icono
    const islink=props.link


  return (
    <Flex
        width={'auto'}
        height={'auto'}
        margin={'2%'}
        gap={'2%'}
        alignItems={'center'}>
        <Flex 
            className='icon'
            width={'auto'}
            >
            <Image
                borderRadius='md'
                src={require('../icons/'+ icono)}
                alt='icon'
                minWidth={'15px'}
                maxWidth={'20px'}
                />
        </Flex>
        <Flex 
            className='clave'
            width={'auto'}
            margin={'1%'}
            >
            {clave}
        </Flex>
        <Flex 
            className='valor'
            minW={{base:'200px', sm:'250', md:'400px'}}
            alignContent={'center'}
            margin={'1%'}
            >
            {(islink === 'true')?
            <Link href={valor} isExternal>{valor}</Link> :
            <h1>{valor}</h1>}
        </Flex>
    </Flex>
  )
}
