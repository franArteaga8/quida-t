import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import { CssBaseline } from '@mui/material'
import { customTheme } from './theme/custom.jsx'

import './App.css'
import { ThemeProvider } from '@emotion/react'

function App() {

  return (
    <>
      <ThemeProvider theme={customTheme} >
        <CssBaseline/>
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
