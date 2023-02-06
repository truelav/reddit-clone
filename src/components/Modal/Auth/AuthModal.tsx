import React, { useEffect } from "react";
import {
    useDisclosure,
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => {
        setModalState((prev) => ({ ...prev, open: false }))
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {modalState.view === 'login' && 'Log In'}
                        {modalState.view === 'signup' && 'Sign Up'}
                        {modalState.view === 'resetPassword' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            width="70%"
                            border="1px solid red"
                        >

                            {/* <ResetPassword /> */}
                            <OAuthButtons />
                            <AuthInputs />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        This is Modal Body
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </>

    )
}

export default AuthModal
