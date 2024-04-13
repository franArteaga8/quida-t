import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Icon, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Lock, Mail, Visibility, VisibilityOff } from '@mui/icons-material'
import { useContext, useState } from "react"
import { postLogin, postSignup } from "../../services/auth"
import { useNavigate } from "react-router-dom"
import { getProfile } from "../../services/user"
import { UserContext } from "../../context/UserData"

import { useCookies } from 'react-cookie'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  const [isPassVisible, setIsPassVisible]  = useState(false)

  const { setUserData } = useContext(UserContext)

  const [ cookies, setCookie ] = useCookies(['user'])

  const navigate = useNavigate()

  const handleFormToggle = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleAction = async () => {
    if (showRegisterForm) {
      const signupRes = await postSignup({ email, pass, name, username });
      console.log(signupRes)
      localStorage.setItem('token', signupRes.token)
      navigate('/')
      const user = await getProfile()
      user && setUserData(user)
      user && setCookie('user', user)
      
    } else {
      const loginRes = await postLogin({ email, pass });

      localStorage.setItem('token', loginRes.token)
      
      navigate('/')

      const user = await getProfile()

      user && setCookie('user', user)
      
    }
  };

  

  return (
    <Box backgroundColor={'primary.main'} sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center',alignItems: 'center', width: '100vw', height: '100vh'}} >

      <Typography color={'secondary'}  top={'20%'} variant="h1" marginBottom={'100px'} >quida-t</Typography>

      <Card sx={{ maxWidth: '500px', height: 'min-content', backgroundColor: 'background.main', borderRadius: '1.5em', marginBottom:'10%',  padding: '30px' }} raised={true} >
        <CardHeader sx={{color: 'primary.main'}} title={showRegisterForm ?  <Typography variant="h3" > Register </Typography> : <Typography variant="h3" > Login </Typography>} />
        <CardContent>
          {showRegisterForm && (
            <>
              <TextField
                label="Name"
                variant="outlined"
                margin="dense"
                fullWidth={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Username"
                variant="outlined"
                margin="dense"
                fullWidth={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
              />
            </>
          )}
          <TextField
            label="Email"
            variant="outlined"
            margin="dense"
            fullWidth={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <Icon sx={{ marginRight:'10px'}}>
                    <Mail color="primary" />
                  </Icon>
                </InputAdornment>
              )}}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="dense"
            fullWidth={true}
            type={isPassVisible ? 'text' : 'password'}
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAction()}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <Icon color="primary"  sx={{ marginRight:'10px'}}>
                    <Lock />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment  >
                  <IconButton color="primary"
                   onClick={() => {
                    setIsPassVisible((oldState) => !oldState)
                  }}>
                     {isPassVisible ? <Visibility  /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </CardContent>
        <Divider sx={{margin:'auto'}} />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop:'20px' }}>
          <Button onClick={handleFormToggle} variant="outlined" color="primary" sx={{ textTransform: 'none', color: 'primary', borderColor: 'primary', borderRadius: '1em', padding:'10px 20px' }} >
            {showRegisterForm ? <span> Already have an account? Login </span> : <span> Don&apos;t have an account? Sign Up </span> }
          </Button>
          <Button onClick={handleAction} variant="contained" color="primary" sx={{ color: 'whitesmoke', padding:'10px 20px' , borderRadius: '1em'}} >
            {showRegisterForm ? 'Register' : 'Login'}
            
          </Button>
        </CardActions>
        
      </Card>
      
    </Box>
  )
}

export default Login
