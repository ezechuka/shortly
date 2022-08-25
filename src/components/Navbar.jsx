import { Button, Divider, Flex, IconButton, Image, Spacer, Text, VStack } from '@chakra-ui/react'

import logo from '../assets/logo.svg'
import iconHamburger from '../assets/icon-hamburger.svg'
import { useState } from 'react'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const showMobileMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    return (
        <Flex paddingTop={{ base: 8, md: 12 }} paddingX={{ base: 6, md: 0 }}
            alignItems='center' justifyContent='space-between'>
            <Image src={logo} />

            {/* Display for md && above */}
            <Flex marginStart={10} display={{ base: 'none', md: 'flex' }}>
                <Text mx={3} fontWeight='bold' fontSize={'sm'} color='grayish-violet-nl' _hover={{ color: 'black', cursor: 'pointer' }}>
                    Features
                </Text>
                <Text mx={3} fontWeight='bold' fontSize={'sm'} color='grayish-violet-nl' _hover={{ color: 'black', cursor: 'pointer' }}>
                    Pricing
                </Text>
                <Text mx={3} fontWeight='bold' fontSize={'sm'} color='grayish-violet-nl' _hover={{ color: 'black', cursor: 'pointer' }}>
                    Resources
                </Text>
            </Flex>
            <Spacer />
            <Flex alignItems='center' display={{ base: 'none', md: 'flex' }}>
                <Text fontWeight='bold' fontSize={'sm'} color='grayish-violet-nl' marginEnd={10} _hover={{ color: 'black', cursor: 'pointer' }}>
                    Login
                </Text>
                <Button variant='primary' paddingX={6}>
                    Sign Up
                </Button>
            </Flex>

            {/* Display for base to small only */}
            <Image
                src={iconHamburger}
                onClick={showMobileMenu}
                display={{ base: 'block', md: 'none' }}
                _hover={{ cursor: 'pointer' }}
            />

            {showMenu && <Flex
                position={'absolute'}
                top={24}
                left={6}
                right={6}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                rounded={'lg'}
                backgroundColor={'dark-violet-pr'}
                paddingX={8}
                paddingY={10}>

                <VStack spacing={6}>
                    <Text fontWeight='bold'
                        fontSize={'md'}
                        color='white'>
                        Features
                    </Text>
                    <Text fontWeight='bold'
                        fontSize={'md'}
                        color='white'>
                        Pricing
                     </Text>
                    <Text fontWeight='bold'
                        fontSize={'md'}
                        color='white'>
                        Resources
                    </Text>
                </VStack>

                <Divider marginY={8} />

                <VStack spacing={6}
                    width={'100%'}>
                    <Text fontWeight='bold'
                        fontSize={'md'}
                        color='white'>
                        Login
                    </Text>

                    <Button variant='primary'
                        paddingX={6}
                        width={'100%'}>
                        Sign Up
                    </Button>
                </VStack>

            </Flex>}
        </Flex>
    )
}

export default Navbar