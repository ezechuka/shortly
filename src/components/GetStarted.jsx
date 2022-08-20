import { Flex, Text, Button } from '@chakra-ui/react'

import bgBoostDesktop from '../assets/bg-boost-desktop.svg'
import bgBoostMobile from '../assets/bg-boost-mobile.svg'

const GetStarted = () => {
    return (
        <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            paddingY={{ base: 24, md: 12 }}
            backgroundColor={'dark-violet-pr'}
            backgroundImage={{ base: bgBoostMobile, md: bgBoostDesktop }}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'center right'}>

            <Text
                fontWeight='bold'
                fontSize={{ base: '2xl', md: '4xl' }}
                color={'white'}
                textAlign={'center'}>
                Boost your links today
            </Text>

            <Button width={'150px'}
                variant='secondary'
                rounded='3xl'
                paddingX='88px'
                marginTop={4}
                fontWeight='semibold'>
                Get Started
            </Button>

        </Flex>
    )
}

export default GetStarted