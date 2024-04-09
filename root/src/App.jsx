import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import { CssBaseline } from '@mui/material'
import { customTheme } from './theme/custom.jsx'

import './App.css'
import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { UserContext } from './context/UserData.js'

import { CookiesProvider } from 'react-cookie'


function App() {

  const [ userData, setUserData ] = useState({})

  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/'}} >

        <UserContext.Provider value={{userData, setUserData}} >
          <ThemeProvider theme={customTheme} >
            <CssBaseline/>
              <RouterProvider router={router} />
          </ThemeProvider>
        </UserContext.Provider>

      </CookiesProvider>
    </>
  )
}

export default App
