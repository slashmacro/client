import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme, { FontStyles } from 'theme'
import Routes from 'routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <GlobalStyles />
          <FontStyles />
          <Routes />
        </>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
  }
`
