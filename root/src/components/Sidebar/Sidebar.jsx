import { AccountCircle, FormatListBulleted, Home as HomeIcon, People } from "@mui/icons-material"
import { Box, Button, CssBaseline} from "@mui/material"
import { Link } from "react-router-dom"

import { useCookies } from 'react-cookie'

const Sidebar = () => {
 
  const { user: cookieUser } = useCookies(['user'])[0]

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      
        <Box sx={{ textAlign:'left', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', padding: 5, height: '100%'}}>

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

          {cookieUser && cookieUser.validation === true ? 
           <Link to={'/patients'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
           <Button color="secondary" variant="text" size="large" startIcon={<People/>  } >
             Patients
             </Button>
           </Link> 
          : 
          null
         
         }
          
         
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