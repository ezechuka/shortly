import { Flex, Grid, HStack, Image, Link, Text } from "@chakra-ui/react"

import logo from '../assets/logo-light.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'

const LinkCTA = ({ cta }) => {
    return (
        <Link
            color={'grayish-violet-nl'}
            fontSize={'sm'}
            paddingY={1}
            textAlign={{ base: 'center', md: 'start' }}
            _hover={{ color: 'cyan-pr' }}>
            {cta}
        </Link>
    )
}

const Footer = () => {
    return (
        <Flex
            paddingY={{ base: 10, md: 14 }}
            flexDirection={{ base: 'column', md: 'row' }}
            backgroundColor={'very-dark-violet-nl'}
            justifyContent={'space-between'}
            alignItems={{ base: 'center', md: 'start' }}>

            {/* LOGO */}
            <Image src={logo}
                color={'white'}
                marginEnd={{ base: 0, md: 40 }} />

            {/* CTA */}
            <Grid
                gridTemplateColumns={{ base: 'repeat(1fr)', md: 'repeat(3, 1fr)' }}
                columnGap={16}>
                <Flex
                    flexDirection={'column'}>
                    <Text
                        fontWeight='bold'
                        fontSize={'sm'}
                        marginTop={{ base: 8, md: 0 }}
                        marginBottom={4}
                        textAlign={{ base: 'center', md: 'start' }}
                        color='white'>
                        Features
                    </Text>

                    <LinkCTA cta={'Link Shortening'} />
                    <LinkCTA cta={'Branded Links'} />
                    <LinkCTA cta={'Analytics'} />

                </Flex>

                <Flex flexDirection={'column'}>
                    <Text
                        fontWeight='bold'
                        fontSize={'sm'}
                        marginTop={{ base: 8, md: 0 }}
                        marginBottom={4}
                        textAlign={{ base: 'center', md: 'start' }}
                        color='white'>
                        Resources
                    </Text>

                    <LinkCTA cta={'Blog'} />
                    <LinkCTA cta={'Developers'} />
                    <LinkCTA cta={'Support'} />

                </Flex>

                <Flex flexDirection={'column'}>
                    <Text
                        fontWeight='bold'
                        fontSize={'sm'}
                        marginTop={{ base: 8, md: 0 }}
                        marginBottom={4}
                        textAlign={{ base: 'center', md: 'start' }}
                        color='white'>
                        Company
                    </Text>

                    <LinkCTA cta={'About'} />
                    <LinkCTA cta={'Our Team'} />
                    <LinkCTA cta={'Careers'} />
                    <LinkCTA cta={'Contact'} />

                </Flex>

            </Grid>

            {/* SOCIAL LINKS */}
            <HStack
                spacing={6}
                marginTop={{ base: 12, md: 0 }}>
                
                <Image
                    src={facebook}
                    _hover={{
                        color: 'cyan-pr',
                        cursor: 'pointer'
                    }}
                />
                <Image
                    src={twitter}
                    _hover={{
                        color: 'cyan-pr',
                        cursor: 'pointer'
                    }}
                />
                <Image
                    src={pinterest}
                    _hover={{
                        color: 'cyan-pr',
                        cursor: 'pointer'
                    }}
                />
                <Image
                    src={instagram}
                    _hover={{
                        color: 'cyan-pr',
                        cursor: 'pointer'
                    }}
                />
            </HStack>

        </Flex>
    )
}

export default Footer