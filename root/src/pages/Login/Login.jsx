import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Icon, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Face, Lock, Mail, Person, Visibility, VisibilityOff } from '@mui/icons-material'
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
  const [lastname, setLastname] = useState('')
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  const [isPassVisible, setIsPassVisible]  = useState(false)

  const { setUserData } = useContext(UserContext)

  // eslint-disable-next-line no-unused-vars
  const [ cookies, setCookie ] = useCookies(['user'])

  const navigate = useNavigate()

  const handleFormToggle = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleAction = async () => {
    if (showRegisterForm) {
      const signupRes = await postSignup({ email, pass, name, lastname, username });
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

      <Typography color={'secondary'}  variant="h1"  >quida-t</Typography>

      <Card sx={{ maxWidth: '500px', backgroundColor: 'background.main', borderRadius: '1.5em', padding:'20px', margin:'5vh'}} raised={true} >
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <Icon  sx={{ marginRight:'10px'}} >
                        <Face color="primary" />
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Lastname"
                variant="outlined"
                margin="dense"
                fullWidth={true}
                value={name}
                onChange={(e) => setLastname(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <Icon  sx={{ marginRight:'10px'}} >
                        <Face color="primary" />
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Username"
                variant="outlined"
                margin="dense"
                fullWidth={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <Icon  sx={{ marginRight:'10px'}} >
                        <Person color="primary" />
                      </Icon>
                    </InputAdornment>
                  )
                }}
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
            {showRegisterForm ? <span> Already have an account? Log In </span> : <span> Don&apos;t have an account? Sign Up </span> }
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
