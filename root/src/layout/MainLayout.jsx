import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import { Box } from "@mui/material"

const MainLayout = () => {
  return (
    <Box sx={{ height: '100vh'}} >
        <Header/>
        <div style={{display:'flex', height: '100%'}}>

          <Sidebar/>
          <Outlet />
        </div>
    </Box>
   
  )
}

export default MainLayout