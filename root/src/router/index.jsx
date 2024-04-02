import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Lists from '../pages/Lists/Lists'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/lists',
        element: <Lists />
    }
])

export default router