import { AccountCircle, FormatListBulleted, Home as HomeIcon } from "@mui/icons-material";
import { Box, Button, CssBaseline} from "@mui/material"
import { Link } from "react-router-dom";

const Sidebar = () => {
 
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      
        <Box sx={{ textAlign:'left', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', gap: 3, padding: 5, height: '100%'}}>

          <Link to={'/'} style={{  textDecoration: 'none', color: 'whitesmoke'}}>
            <Button color="secondary" variant="text" size="large" startIcon={<HomeIcon/>  } >
            Home
            </Button>
            
          </Link>

          <Link to={'/profile'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <Button color="secondary" variant="text" size="large" startIcon={<AccountCircle/>  } >
            Profile
            </Button>
          </Link>

          <Link to={'/lists'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
          <Button color="secondary" variant="text" size="large" startIcon={<FormatListBulleted/>  } >
            Lists
            </Button>
          </Link>
         
          <Button variant="contained" color="secondary"  sx={{ marginTop: 'auto',  textTransform:'none' }} onClick={() => {
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