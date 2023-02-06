import { useState } from 'react'
import { Input, Button, Text, Flex } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'


const Signup: React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onsubmit = () => {

    }


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSignUpForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <>
            <form onSubmit={onsubmit}>
                <Input
                    name="email"
                    placeholder="email"
                    type="text"
                    mb={2}
                    onChange={onChange}
                />
                <Input
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={onChange}
                    mb={2}
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                        bg: "white",
                        border: "1px solid",
                        borderColor: "blue.500"
                    }}
                    bg="gray.50"
                />
                <Input
                    name="confirmPassword"
                    placeholder="confirm password"
                    type="password"
                    onChange={onChange}
                    mb={2}
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                        bg: "white",
                        border: "1px solid",
                        borderColor: "blue.500"
                    }}
                    bg="gray.50"
                />
                <Button
                    width="100%"
                    height="36px"
                    mb={2}
                    mt={2}
                    type="submit"
                >
                    Sign Up
                </Button>
                <Flex fontSize="9pt" justifyContent="center">
                    <Text mr={1}>Already a redditor?</Text>
                    <Text
                        color="blue.500"
                        fontWeight={700}
                        cursor="pointer"
                        onClick={() =>
                            setAuthModalState((prev) => ({
                                ...prev,
                                view: "login"
                            }))
                        }
                    >
                        Log In
                    </Text>
                </Flex>
            </form>
        </>
    )
}

export default Signup