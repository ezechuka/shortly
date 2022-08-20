import { Box, Flex, Text } from '@chakra-ui/react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import illustrationWorking from './assets/illustration-working.svg'
import Main from './components/Main'
import Insight from './components/Insight'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {

  return (
    <Box
      backgroundImage={illustrationWorking}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={{ base: '-15% 3%', md: '114% 9%' }}
      backgroundSize={{ base: '550px', md: '600px' }}>
      <Flex
        mx='auto'
        maxWidth={['container.lg']}
        flexDirection='column'>
        <Navbar />
        <Hero />
      </Flex>

      <Box backgroundColor={'gray.100'} marginTop={{ base: 32, md: 16 }}>
        <Flex
          mx='auto'
          maxWidth={['container.lg']}
          flexDirection='column'>
          <Main />
          <Insight />
        </Flex>

        <Flex flexDirection='column'>
          <GetStarted />
        </Flex>

      </Box>

      <Box as={'footer'} backgroundColor={'very-dark-violet-nl'}>
        <Flex mx='auto'
          maxWidth={['container.lg']}
          flexDirection='column'>
          <Footer />
        </Flex>
      </Box>

    </Box>
  )
}

export default App