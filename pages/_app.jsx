import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UserProvider } from '../contexts/UserContext'
import Head from 'next/head'

const theme = {
  colors: {
    primary: {
      ocean: '#03BAFF',
      blue: '#5150E9',
      purple: '#5823E3',
      dark: '#0F0029',
    },
    text: {
      neutral600: '#333A46',
      neutral400: '#7E8AA4',
      neutral200: '#C5CEE0',
      white: '#FFFFFF'
    },
    status: {
      destructive: '#E13600',
      warning: '#FFB800',
      success: '#049601'
    },
    cards: {
      neutral40: '#F7F9FC',
      neutral60: '#E4E9F2',
    },
    button: {
      primary: '#5823E3',
      disabled: '#E4E9F2'
    },
    background: '#eee',
  },
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16)',
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: #eee;
    color: #333;

    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Head>
          <title>Lumiverso</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </>
  )

}

export default MyApp
