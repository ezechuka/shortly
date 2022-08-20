import { Flex, Spacer, Text } from "@chakra-ui/layout"

import InsightCard from './InsightCard'
import { images } from '../utils/data'
import { titles } from '../utils/data'
import { descriptions } from '../utils/data'

const Insight = () => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            paddingY={{ base: 20, md: 24 }}
            marginX={{ base: 4, md: 0 }}>
            <Text
                fontWeight='bold'
                color={'very-dark-blue-nl'}
                fontSize={{ base: '2xl', md: '4xl' }}
                textAlign={'center'}>
                Advanced Statistics
            </Text>

            <Text
                fontSize={'md'}
                color='grayish-violet-nl'
                marginTop={{ base: 3, md: 2 }}
                marginBottom={24}
                maxWidth={{ base: 'container.lg', md: '480px' }}
                textAlign={'center'}>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </Text>

            <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={{ base: 'center', md: 'space-between' }}>
                <InsightCard imageInsight={images[0]}
                    title={titles[0]}
                    description={descriptions[0]}
                    showIndicator={true} />
                <InsightCard
                    imageInsight={images[1]}
                    title={titles[1]}
                    description={descriptions[1]}
                    marginStart={{ base: 0, md: 8 }}
                    marginTop={{ base: 28, md: 10 }} />
                <InsightCard
                    imageInsight={images[2]}
                    title={titles[2]}
                    description={descriptions[2]}
                    marginStart={{ base: 0, md: 8 }}
                    marginTop={{ base: 28, md: 20 }} />
            </Flex>
        </Flex>
    )
}

export default Insight