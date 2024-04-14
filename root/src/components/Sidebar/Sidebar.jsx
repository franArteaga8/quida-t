import { AccountCircle, FormatListBulleted, Home as HomeIcon, People } from "@mui/icons-material"
import { Box, Button, CssBaseline, Typography} from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { useCookies } from 'react-cookie'

const Sidebar = () => {
 
  const { user: cookieUser } = useCookies(['user'])[0]
  const navigate = useNavigate()

 const location = useLocation()
 console.log(location.pathname)


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      
     { cookieUser &&
     
     <Box sx={{ width:'200px', textAlign:'left', backgroundColor:'primary.main',
      ...cookieUser.validation === true && {
    
      backgroundColor: 'primary.darker',
    }, display: 'flex', flexDirection: 'column', height: '100%'}}>

        <Link to={'/'} style={{  textDecoration: 'none', backgroundColor: location.pathname == '/' ? '#837A93' : '', padding: '5px 20px', marginTop:'60px'}}>
          <Button color={"secondary"} variant="text" size="large" startIcon={<HomeIcon/>}>
            <Typography variant="subtitle1" textTransform={'none'} >Home</Typography>
          </Button>
        </Link>

        <Link to={'/profile'} style={{ textDecoration: 'none', color: 'whitesmoke', padding: '5px 20px', backgroundColor: location.pathname == '/profile' ? '#837A93' : ''}}>
            <Button color="secondary" variant="text" size="large" startIcon={<AccountCircle/>}>
              <Typography variant="subtitle1" textTransform={'none'} >Profile</Typography>
            </Button>
        </Link>

        <Link to={'/lists'} style={{ textDecoration: 'none',  color: 'whitesmoke', padding: '5px 20px', backgroundColor: location.pathname == '/lists' ? '#837A93' : ''}}>
            <Button color="secondary" variant="text" size="large" startIcon={<FormatListBulleted/>}>
              <Typography variant="subtitle1" textTransform={'none'} >Lists</Typography>
            </Button>
        </Link>

        {cookieUser && cookieUser.validation === true ? 
          <Link to={'/patients'} style={{ textDecoration: 'none', color: 'whitesmoke', padding: '5px 20px',backgroundColor: location.pathname == '/patients' ? '#837A93' : ''}}>
            <Button color="secondary" variant="text" size="large" startIcon={<People/>}>
              <Typography variant="subtitle1" textTransform={'none'} >Patients</Typography>
            </Button>
          </Link> 
          : 
          null
        }
         
        <Button variant="contained" color="secondary" sx={{ textTransform:'none', margin:'auto 40px 50px 40px' }} onClick={() => {
            localStorage.removeItem('token')
            !localStorage.getItem('token') && navigate('/login')
        }}>
          <Typography variant="subtitle1" >Logout</Typography>
        </Button>
          
      </Box>

    }
     
    </Box>
    
  )
}

export default Sidebar