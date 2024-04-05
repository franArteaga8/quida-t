import './Home.css'
import {Box, AppBar, Toolbar,Typography, Button} from '@mui/material';

const Home = () => {
  return (
    <>
    <div className="position">

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </>
  )
}

export default Home