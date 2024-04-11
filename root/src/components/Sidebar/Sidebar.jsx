import { AccountCircle, FormatListBulleted, Home as HomeIcon, People } from "@mui/icons-material"
import { Box, Button, CssBaseline, Typography} from "@mui/material"
import { Link } from "react-router-dom"

import { useCookies } from 'react-cookie'

const Sidebar = () => {
 
  const { user: cookieUser } = useCookies(['user'])[0]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ textAlign:'left', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', padding: 5, height: '100%'}}>

        <Link to={'/'} style={{  textDecoration: 'none', color: 'whitesmoke'}}>
          <Button color="secondary" variant="text" size="large" startIcon={<HomeIcon/>}>
            <Typography variant="subtitle1" >Home</Typography>
          </Button>
        </Link>

        <Link to={'/profile'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            <Button color="secondary" variant="text" size="large" startIcon={<AccountCircle/>}>
              <Typography variant="subtitle1" >Profile</Typography>
            </Button>
        </Link>

        <Link to={'/lists'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            <Button color="secondary" variant="text" size="large" startIcon={<FormatListBulleted/>}>
              <Typography variant="subtitle1" >Lists</Typography>
            </Button>
        </Link>

        {cookieUser && cookieUser.validation === true ? 
          <Link to={'/patients'} style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            <Button color="secondary" variant="text" size="large" startIcon={<People/>}>
              <Typography variant="subtitle1" >Patients</Typography>
            </Button>
          </Link> 
          : 
          null
        }
         
        <Button variant="contained" color="secondary" sx={{ marginTop: 'auto', textTransform:'none' }} onClick={() => {
            localStorage.removeItem('token')
            location.reload()
        }}>
          <Typography variant="subtitle1" >Logout</Typography>
        </Button>
          
      </Box>
     
    </Box>
  )
}

export default Sidebar