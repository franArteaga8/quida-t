import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { Menu as Menuicon, } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import { Link } from "react-router-dom";


const Header = () => {


  return (
    <>
        <Box sx={{ flexGrow: 1, height: '7%' }}>
          <AppBar position="static" sx={{ height: '100%'}} >
            <Toolbar>
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              >
              <Menuicon className="menu-icon" />
              </IconButton>

            
              
                <Link style={{ flexGrow: '1' , textDecoration: 'none', color: 'whitesmoke'}} >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                quida-t
                </Typography>
                </Link>
                

              
             
              <Link to={'/profile'} >
                <IconButton >
                  <AccountCircleIcon sx={{ color: 'whitesmoke' }} />
                </IconButton>
              </Link>
              
            </Toolbar>

          </AppBar>
        </Box>
    </>
  )
}

export default Header