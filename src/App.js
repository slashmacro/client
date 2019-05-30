import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'theme'
import Routes from 'routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <CssBaseline />
          <Routes />
        </>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
