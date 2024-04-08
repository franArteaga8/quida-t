import { useEffect, useState } from "react"
import { getProfile } from "../../services/user"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia,  TextField,  Typography } from "@mui/material"
import { Face } from "@mui/icons-material"




const Profile = () => {

  const [showEditProfile, setShowEditProfile ] = useState(false)
  const [ profile, setProfile ] = useState({})

  const handleEditToggle = () => {
    setShowEditProfile(!showEditProfile);
  };

  const handleProfile = async () => {
    const result = await getProfile()
    result && setProfile(result)
  }

  useEffect(() => {
    handleProfile()
  }, [])

  return (
    <Box sx={{ display: 'flex', height:'100%', justifyContent: 'center',  backgroundColor: 'background.default'}} >
      <Card sx={{ minWidth: 275, width: '85%' , display:'flex', gap:'20px', padding: '10px', marginTop:'100px', borderRadius: '20px', height: 'min-content',color: 'white', backgroundColor: 'primary.main' }}>

        <CardMedia sx={{ display: 'flex', flexDirection: 'column' , alignItems:'center', padding: '10px', width: 'min-content'}} >
          <Face sx={{ fontSize: '8em'}} />
          <Button color="secondary" onClick={handleEditToggle} sx={{ marginTop: 'auto', width: 'max-content', textTransform: 'none'}} size="medium" variant="contained" >
            {showEditProfile ? 'See Profile' : 'Edit Profile'}
          </Button>
        </CardMedia>


        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', textAlign: 'left', width: 'max-content'}}>

          <CardHeader title={showEditProfile ? 'Edit' : 'Profile'}  />

          {showEditProfile ?
           <>
              <TextField
               label="Username"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               value={profile.username}>
                
              {profile.username} 
              </TextField>

              <TextField
               label="Name"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               value={profile.name}>
                
              </TextField>

              <TextField
               label="Lastname"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               value={profile.lastname}>
                
              {profile.username} 
              </TextField>

              <TextField
               label="Password"
               variant="outlined"
               margin="dense"
               fullWidth={true}
              >
                
              {profile.username} 
              </TextField>

             
              
              
          </> 
           : 
           <>
              <Typography variant="h2"  gutterBottom>
                {profile.username}
              </Typography>
              <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }} >
                { profile.name } { profile.lastname }
              </Typography>
              <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }} >
                { profile.role }
              </Typography>
           </>}
          
         
          
          {!showEditProfile && 
           <Typography variant="h5"  sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }}>
           { profile.email}
         </Typography> }
         
          
          
          
          <CardActions>
        </CardActions>
          </CardContent>
          <CardContent sx={{ width: '100%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            <Typography variant="body2" sx={{ mb: 1, padding: '20px', border: '1px whitesmoke solid', borderRadius:'10px', fontSize: '1em' }} >
              well meaning and kindly.
            </Typography>
          </CardContent>
      
      </Card>
    </Box>
    
    
  )
}

export default Profile