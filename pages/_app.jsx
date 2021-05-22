import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UserProvider } from '../contexts/UserContext'
import Head from 'next/head'

const theme = {
  colors: {
    background: '#eee',
    font: '#333',
    border: '#bcbcbc'
  },
  boxShadow: {
    primary: `  
    5px 5px 15px 5px rgba(0,0,0,0.15)
    `,
    bottom: '0 8px 6px -6px black',
    inset: 'inset 0 0 10px rgba(0,0,0,0.35)'
  },
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

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
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
