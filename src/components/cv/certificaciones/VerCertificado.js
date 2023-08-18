import { Button, Flex, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const VerCertificado = (props) => {
    const nombre= props.nombre;
    const certificado= props.certificado;
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Link onClick={onOpen}>{nombre}</Link>  
      <Modal onClose={onClose} isOpen={isOpen} size={'6xl'}  isCentered >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader  >{'Certificación de curso '+ nombre +' completado '}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex >
              <Image src={require('./certificados/'+ certificado)} alt={nombre} />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
