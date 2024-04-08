import { Box, CssBaseline} from "@mui/material"
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Sidebar = () => {
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      
        <Box sx={{  background: green[200], display: 'flex', flexDirection: 'column', gap: 5, padding: 5, height: '100%'}}>

          <Link to={'/'} style={{ flexGrow: '1' , textDecoration: 'none', color: 'whitesmoke'}}>
            Home
          </Link>

          <Link to={'/profile'} style={{ flexGrow: '1' , textDecoration: 'none', color: 'whitesmoke'}}>
            Profile
          </Link>

          <Link to={'/lists'} style={{ flexGrow: '1' , textDecoration: 'none', color: 'whitesmoke'}}>
            Profile
          </Link>
         
     
          
        </Box>
     
     
    </Box>
  )
}

export default Sidebar