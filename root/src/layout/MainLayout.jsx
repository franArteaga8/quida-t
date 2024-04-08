import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import { Box } from "@mui/material"

const MainLayout = () => {
  // probar grid: 100px 1fr (header, resto)
  return (
    <Box sx={{ height: '100vh', display: 'flex'}} >
      <Sidebar/>
        
      <div style={{ width:'100%', height:'100vh', display:'flex', flexDirection:'column'  }}>

        <Header />
        <Outlet />
        
      </div>

    </Box>
   
  )
}

export default MainLayout