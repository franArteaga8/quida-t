import { Box, Button, CssBaseline} from "@mui/material"
import { green, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Sidebar = () => {
 
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      
        <Box sx={{  background: green[400], display: 'flex', flexDirection: 'column', gap: 3, padding: 5, height: '100%'}}>

          <Link to={'/'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Home
          </Link>

          <Link to={'/profile'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Profile
          </Link>

          <Link to={'/lists'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            Lists
          </Link>
         
          <Button variant="contained" sx={{ background: purple[400] , marginTop: 'auto' }} onClick={() => {
            localStorage.removeItem('token')
            location.reload()
        }} >
            Logout
          </Button>
          
        </Box>
     
     
    </Box>
  )
}

export default Sidebar