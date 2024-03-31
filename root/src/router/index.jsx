import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../components/Login/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]

    }
])

export default router