import { Flex} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { IsLink } from '../IsLink';
import { CvContext } from '../../../context/ContextoProvider';

export const Rol = (props) => {
    const {data, idioma}= useContext(CvContext)
    const fecha= props.fecha;
    const rol= props.rol;
    const empresa= props.empresa
    const tareas= props.tareas;
    const logros= props.logros;

  return (
    <Flex 
        className='contenedor-rol'
        flexDirection={'column'}
        marginTop={'20px'}
        marginBottom={'20px'}>
         <Flex 
            className='fecha'
            >
            {fecha}
        </Flex>
        <Flex
            className='rol'
            fontSize={'3xl'}
            fontWeight={'bold'}
            >
                {rol}
        </Flex>
        <Flex
            className='empresa'
            fontSize={'2xl'}
            fontWeight={'bold'}
            >
                {empresa}
        </Flex>

        <Flex
            className='tareas'
            flexDir={'column'}
            margin={'2%'}
            fontSize={'2xl'}
            >
            {tareas?.map((e,i)=>{
                return  <Flex
                            flexDir={'column'}
                            key={i}>
                            <ul>
                                <li >{e}</li>
                            </ul>
                        </Flex>
            })  }

        </Flex>

        <Flex
            className='logros'
            flexDirection={'column'}
            >
            <Flex 
                fontSize={'2xl'}
                fontWeight={'bold'}>
                {(idioma === data.espanol )? <Flex> Logros</Flex> :
                                             <Flex>Achievements </Flex> }
            </Flex>
            {
                logros?.map((e,i)=>{
                    console.log(e)
                    return  <Flex 
                                key={i}
                                fontSize={'2xl'}>
                                <IsLink>
                                {'- '+e}
                                </IsLink>
                                
                                
                             
                            </Flex>
                })
            }
        </Flex>
    </Flex>
  )
}
