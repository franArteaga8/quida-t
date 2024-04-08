import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { Menu as Menuicon, } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import { Link } from "react-router-dom";


const Header = () => {


  return (
    <>
        <Box sx={{  height: '50px', width: '100%',  }}>
          <AppBar position="static" elevation={0} sx={{ height: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'secondary.main'}} >
            <Toolbar >
              <IconButton
              size="large"
              edge="start"
              color="primary.main"
              aria-label="menu"
              sx={{ mr: 2 }}
              >
              <Menuicon className="menu-icon" />
              </IconButton>

            
              
                <Link style={{ flexGrow: '1' , textDecoration: 'none'}} >
                <Typography variant="h5" component="div" color={'primary.main'}  sx={{ flexGrow: 1 }}>
                quida-t
                </Typography>
                </Link>
                

              
             
              <Link to={'/profile'} >
                <IconButton >
                  <AccountCircleIcon sx={{ color: 'primary.main' }} />
                </IconButton>
              </Link>
              
            </Toolbar>

          </AppBar>
        </Box>
    </>
  )
}

export default Header