import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"

const MainLayout = () => {
  return (
    <>
        <Header/>
    <div style={{display:'flex'}}>

        <Sidebar/>
        <Outlet/>
    </div>
    </>
   
  )
}

export default MainLayout