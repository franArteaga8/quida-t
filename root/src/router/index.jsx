import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MainLayout from '../layout/MainLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        loader: () => localStorage.getItem('token') ? null : redirect('/login') ,
        children: [
            {
                path: 'home',
                element: <Home/>,
            }
        ]

    },
    {
        path: '/login',
        element: <Login />
    },
  
])

export default router