import { useEffect, useState } from "react"
import { getProfile } from "../../services/user"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia,  TextField,  Typography } from "@mui/material"
import { Face } from "@mui/icons-material"




const Profile = () => {

  const [showEditProfile, setShowEditProfile ] = useState(false)
  const [ profile, setProfile ] = useState({})

  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [pass, setPass] = useState('')
  const [colegiate, setColegiate] = useState('')
  
  const edit = ()=>{
    console.log(username)
    console.log(name)
    console.log(lastname)
    console.log(pass)
  }
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
      <Card sx={{ minWidth: 275, display:'flex', gap:'20px', padding: '10px', borderRadius: '20px', height: 'min-content',color: 'white', backgroundColor: 'primary.main' }}>

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
               sx={{color: 'whitesmoke', width:' max-content', border: '1px inset whitesmoke', borderRadius: 2}}
               inputProps={
                {style: { color: '#fff'}
               }}
               InputLabelProps={
                {style: { color: '#fff'}
               }}
               defaultValue={username ? username : profile.username}
               onChange={(e)=> setUserName(e.target.value)}>
                
              
              </TextField>
               
              <TextField
               label="Name"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               sx={{color: 'whitesmoke', width:' max-content', border: '1px inset whitesmoke', borderRadius: 2}}
               inputProps={
                {style: { color: '#fff'}
               }}
               InputLabelProps={
                {style: { color: '#fff'}
               }}
                defaultValue={name ? name : profile.name}
               onChange={(e)=> setName(e.target.value)}>
                
              </TextField>

              <TextField
               label="Lastname"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               sx={{color: 'whitesmoke', width:' max-content', border: '1px inset whitesmoke', borderRadius: 2}}
               inputProps={
                {style: { color: '#fff'}
               }}
               InputLabelProps={
                {style: { color: '#fff'}
               }}
               defaultValue={lastname ? lastname : profile.lastname}
               onChange={(e)=> setLastName(e.target.value)}>
                
              
              </TextField>

              <TextField
               label="Password"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               sx={{color: 'whitesmoke', width:' max-content', border: '1px inset whitesmoke', borderRadius: 2}}
               inputProps={
                {style: { color: '#fff'}
               }}
               InputLabelProps={
                {style: { color: '#fff'}
               }}
               defaultValue={pass && pass }
               onChange={(e)=> setPass(e.target.value)}
              >
              </TextField>

              <TextField
               label="Number colegiate"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               sx={{color: 'whitesmoke', width:' max-content', border: '1px inset whitesmoke', borderRadius: 2}}
               inputProps={
                {style: { color: '#fff'}
               }}
               InputLabelProps={
                {style: { color: '#fff'}
               }}
               defaultValue={colegiate && colegiate }
               onChange={(e)=> setColegiate(e.target.value)}
              >
              </TextField>

             <button onClick={()=> edit()}>submit changes</button>
              
              
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

              {!(profile.colegiate === null) &&
              <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }} >
                {profile.colegiate}
              </Typography>}

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