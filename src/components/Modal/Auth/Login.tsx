import { useState } from 'react'
import { Input, Button, Text, Flex } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'

type LoginProps = {

}

const Login: React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const onsubmit = () => {

    }


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {


        setLoginForm((prev) => ({
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
                />
                {/* <Text textAlign="center" mt={2} fontSize="10pt" color="red">
                    {formError ||
                        FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
                </Text> */}
                <Button
                    width="100%"
                    height="36px"
                    mb={2}
                    mt={2}
                    type="submit"
                // isLoading={loading}
                >
                    Log In
                </Button>
                {/* <Flex justifyContent="center" mb={2}>
                    <Text fontSize="9pt" mr={1}>
                        Forgot your password?
                    </Text>
                    <Text
                        fontSize="9pt"
                        color="blue.500"
                        cursor="pointer"
                        onClick={() => toggleView("resetPassword")}
                    >
                        Reset
                    </Text>
                </Flex> */}
                <Flex fontSize="9pt" justifyContent="center">
                    <Text mr={1}>New here?</Text>
                    <Text
                        color="blue.500"
                        fontWeight={700}
                        cursor="pointer"
                        onClick={() =>
                            setAuthModalState((prev) => ({
                                ...prev,
                                view: "signup"
                            }))
                        }
                    >
                        SIGN UP
                    </Text>
                </Flex>
            </form>
        </>
    )
}

export default Login