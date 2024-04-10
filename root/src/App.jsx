import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import { CssBaseline } from '@mui/material'
import { customTheme } from './theme/custom.jsx'

import './App.css'
import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { UserContext } from './context/UserData.js'

import { CookiesProvider, useCookies } from 'react-cookie'
import { getProfile } from './services/user.js'


function App() {

  const [ userData, setUserData ] = useState({})

  const [ cookies, setCookie ] = useCookies(['user'])
  const { user: cookieUser } = useCookies(['user'])[0]

  const handleCookie = async () => {
   
    const user = await getProfile()
      //user && setUserData(user)

    console.log(`log user: ${user.username}`)
    user && setCookie('user', user)

    cookies && cookieUser && console.log(cookieUser.username)
    
  };

  !cookieUser && localStorage.getItem('token') && handleCookie()


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
