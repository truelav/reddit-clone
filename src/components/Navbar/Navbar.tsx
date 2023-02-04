import { Flex } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

import SearchInput from './SearchInput'

const Navbar: React.FC = () => {
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex align="center">
                <Image
                    src="/images/redditFace.svg"
                    height="30"
                    width="30"
                    alt="Reddit Logo"
                />
                <Image
                    src="/images/redditText.svg"
                    height="30"
                    width="60"
                    display={{ base: "none", md: "unset" }}
                    alt="reddit text"
                />
            </Flex>
            <SearchInput />
            {/* <Directory />
            <SearchInput />
            <RightContent /> */}
        </Flex>
    )
}

export default Navbar