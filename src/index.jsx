import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { globalStyles } from './theme/styles'
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={globalStyles}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
