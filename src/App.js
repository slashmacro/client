import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import Routes from 'routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <Routes />
        </>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
