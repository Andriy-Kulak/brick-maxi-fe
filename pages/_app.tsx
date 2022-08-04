import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}
