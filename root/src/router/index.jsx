import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MainLayout from '../layouts/MainLayout'
import Profile from '../pages/Profile/Profile'
import Lists from '../pages/Lists/Lists'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        loader: () => localStorage.getItem('token') ? null : redirect('/login') ,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'lists',
                element: <Lists />
            }
        ]

    },
    {
        path: '/login',
        element: <Login />
    },
    
  
])

export default router