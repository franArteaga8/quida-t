import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { Menu as Menuicon, } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar>
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              >
              <Menuicon/>
              </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  quida-t
                </Typography>
              <IconButton>
                <AccountCircleIcon sx={{ color: 'whitesmoke' }} />
                
              </IconButton>
              
            </Toolbar>

          </AppBar>
        </Box>
    </>
  )
}

export default Header