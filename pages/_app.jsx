import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UserProvider } from '../contexts/UserContext'

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
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
        <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
        </UserProvider>
    </>
  )
  
}

export default MyApp
