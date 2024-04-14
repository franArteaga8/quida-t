import { useEffect, useState } from "react"
import { getProfile, putProfile } from "../../services/user"
import { Box, Button, Card, CardContent, CardHeader, CardMedia,  TextField,  Typography } from "@mui/material"
import { Face } from "@mui/icons-material"



const Profile = () => {
  const positiveMessages = [
    "You are capable of more than you know.",
    "Every setback is a setup for a comeback.",
    "Progress, not perfection.",
    "You are enough.",
    "Embrace the journey.",
    "You have the power to create positive change in your life.",
    "Your potential is limitless.",
    "You are not alone.",
    "Celebrate your strengths and achievements."
  ];

  // State to store the currently displayed message
  const [currentMessage, setCurrentMessage] = useState('');

  // Function to generate random message
  const generateRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * positiveMessages.length);
    setCurrentMessage(positiveMessages[randomIndex]);
  };

 

  const [showEditProfile, setShowEditProfile ] = useState(false)
  const [ profile, setProfile ] = useState({})

  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [colegiate, setColegiate] = useState('')
  
  const edit = async()=>{

    const update = {}
    if(username) update.username = username
    if(name) update.name = name
    if(lastname) update.lastname = lastname
    if(colegiate) update.colegiate = colegiate

    const result = await putProfile(update)
     result && setProfile(result) 
     result && handleEditToggle() 
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
    generateRandomMessage()
  }, [])

  return (
    <>
    
    { profile &&
      
      <Box sx={{ width: '100%', display: 'flex', height:'100%', justifyContent: 'center',  backgroundColor: 'background.default'}} >
      <Card  sx={{ width:'80%', maxWidth:'1200px' ,minWidth: 275, display:'flex', gap:'20px', padding: '10px', borderRadius: '20px', height: 'min-content',color: 'white', backgroundColor: 'primary.main' }}>

        <CardMedia sx={{ display: 'flex', flexDirection: 'column' , alignItems:'center', padding: '10px', width: 'min-content',}} >
          <Face sx={{ fontSize: '8em', color:'secondary.main'}} />
          <Button color="secondary" onClick={handleEditToggle} sx={{ marginTop: 'auto', width: 'max-content', textTransform: 'none'}} size="medium" variant="outlined" >
            {showEditProfile ? 'See Profile' : 'Edit Profile'}
          </Button>
        </CardMedia>


        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', textAlign: 'left', width: '50%'}}>

          <CardHeader title={showEditProfile ? 'Edit' : 'Profile'}  />

          {showEditProfile ?
           <>   

              <TextField
               label="Username"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               sx={{color: 'whitesmoke', border: '1px inset whitesmoke', borderRadius: 2}}
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
               sx={{color: 'whitesmoke', border: '1px inset whitesmoke', borderRadius: 2}}
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
               sx={{color: 'whitesmoke', border: '1px inset whitesmoke', borderRadius: 2}}
               inputProps={
                {style: { color: '#fff'}
               }}
               InputLabelProps={
                {style: { color: '#fff'}
               }}
               defaultValue={lastname ? lastname : profile.lastname}
               onChange={(e)=> setLastName(e.target.value)}>
                
              
              </TextField>


              { !(profile.colegiate === null) && <TextField
               label="Colegiate Number"
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
               defaultValue={colegiate ? colegiate : profile.colegiate}
               onChange={(e)=> setColegiate(e.target.value)}
              >
              </TextField>}

               <Box display={'flex'} justifyContent={'end'}>
               <Button className="button "variant="contained" color="secondary"  sx={{ marginTop:'20px', width:'max-content', textTransform:'none'}} onClick={()=>edit()}>Submit Changes</Button>
               </Box>
              

              
              
          </> 
           : 
           <>
              <Typography variant="h2"  gutterBottom>
                {profile.username}
              </Typography>
              Full name:
              <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }} >
                { profile.name } { profile.lastname } 
              </Typography>
              Rol:
              <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }} >
                { profile.role }
              </Typography>

              {(profile.role === 'psychologist') &&
              <>
              Colegiate:
               <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }} >
                {profile.colegiate}
              </Typography>
              </>
              }
              
              
             

           </>}
          
         
          
          {!showEditProfile && 
          <>
          Email:
           <Typography variant="h5" sx={{ mb: 1, padding: '10px', border: '1px whitesmoke solid', borderRadius:'10px' }}>
           { profile.email}
         </Typography> 
         </>}
         
         
          
          
          
          </CardContent>
          <CardContent sx={{ width: '50%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', border: '1px whitesmoke solid', borderRadius:'10px', margin:'20px' }}>
            <Typography variant="subtitle2" sx={{ mb: 1, padding: '20px', fontSize: '1em', textDecoration:'underline' }} >
              {currentMessage}
            </Typography>
          </CardContent>
      
      </Card>
    </Box>}
    </>
    
  )
}

export default Profile