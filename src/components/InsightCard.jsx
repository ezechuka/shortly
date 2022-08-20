import { Circle, Flex, Image, Text, Box } from "@chakra-ui/react"

const InsightCard = ({ imageInsight, title, description, marginStart, marginTop, showIndicator }) => {
    return (
        <Flex
            flexDirection={'column'}
            alignItems={{ base: 'center', md: 'start' }}
            justifyContent={'center'}
            bg={'white'}
            paddingX={8}
            height={'240px'}
            marginStart={marginStart}
            marginTop={marginTop}
            rounded={'md'}
            boxShadow={'sm'}
            position={'relative'}>
            <Circle
                size={'84px'}
                marginTop={'-80px'}
                bg={'dark-violet-pr'}>
                <Image src={imageInsight} />
            </Circle>

            <Text
                fontWeight='bold'
                color={'very-dark-blue-nl'}
                fontSize={'xl'}
                marginTop={8}
                textAlign={'center'}>
                {title}
            </Text>

            <Text
                fontSize={'sm'}
                color='grayish-violet-nl'
                marginTop={3}
                lineHeight={1.6}
                textAlign={{ base: 'center', md: 'start' }}>
                {description}
            </Text>

            {showIndicator && <Box position='absolute'
                top={'50%'}
                left={'100%'}
                width={'400px'}
                height={2}
                bgColor={'cyan-pr'}
                display={{base: 'none', md: 'block'}}></Box> }

            {showIndicator && <Box position='absolute'
                top={'100%'}
                left={'49%'}
                width={2}
                height={'450px'}
                bgColor={'cyan-pr'}
                display={{base: 'block', md: 'none'}}></Box> }

        </Flex>
    )
}

InsightCard.defaultProps = {
    marginStart: 0,
    marginTop: 0,
    showIndicator: false
}

export default InsightCard