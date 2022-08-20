import { Flex, Text, Button, Image } from "@chakra-ui/react"

const Hero = () => {
    return (
        <Flex
            flexDirection='column'
            marginX={{ base: 4, md: 0 }}
            marginTop={{ base: "440px", md: 24 }}
            marginBottom={{ base: 14, md: 32 }}>
            <Text fontWeight='black'
                color={'very-dark-blue-nl'}
                lineHeight={1.2}
                textAlign={{ base: 'center', md: 'start' }}
                fontSize={{ base: '4xl', md: '7xl' }}
                maxWidth={'container.sm'}>
                More than just shorter links
            </Text>
            <Text maxWidth={'480px'}
                fontSize={'xl'}
                color='grayish-violet-nl'
                marginTop={{ base: 3, md: 2 }}
                textAlign={{ base: 'center', md: 'start' }}>
                Build your brand’s recognition and get detailed insights
                on how your links are performing.
            </Text>
            <Button width={'150px'}
                variant='primary'
                paddingX="88px"
                marginTop={8}
                alignSelf={{ base: 'center', md: 'start' }}
                fontWeight='semibold'>
                Get Started
            </Button>
        </Flex>
    )
}

export default Hero