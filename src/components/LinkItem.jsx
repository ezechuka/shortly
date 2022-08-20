import { Flex, Spacer, Text, Button, Divider, useClipboard } from "@chakra-ui/react"

const LinkItem = ({originalLink, shortLink}) => {

    const {hasCopied, onCopy} = useClipboard(shortLink)

    return (
        <Flex
            paddingY={3}
            backgroundColor={'white'}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={'center'}
            alignItems={{ md: 'center' }}
            rounded={'md'}
            marginTop={4}
            marginX={{ base: 4, md: 0 }}
            boxShadow={'sm'}>

            <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color='black'
                textAlign={{ base: 'start', md: 'start' }}
                paddingX={6}>
                {originalLink}
            </Text>

            <Spacer display={{ base: 'none', md: 'block' }} />
            <Divider display={{ base: 'block', md: 'none' }}
                marginY={2}
            />

            <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color='cyan-pr'
                textAlign={{ base: 'start', md: 'start' }}
                paddingStart={{ base: 6, md: 0 }}>
                {shortLink}
            </Text>

            <Button
                variant={'secondary'}
                backgroundColor={hasCopied ? 'dark-violet-pr' : 'cyan-pr'}
                paddingX={{ md: 8 }}
                paddingY={2}
                marginTop={{ base: 4, md: 0 }}
                marginX={{ base: 6, md: 4 }}
                onClick={onCopy}>
                {hasCopied ? 'Copied!' : 'Copy'}
            </Button>

        </Flex>
    )
}

export default LinkItem