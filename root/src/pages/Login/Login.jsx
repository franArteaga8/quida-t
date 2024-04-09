import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { postLogin, postSignup } from "../../services/auth"
import { useNavigate } from "react-router-dom"
import { getProfile } from "../../services/user"
import { UserContext } from "../../context/UserData"

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  const { setUserData } = useContext(UserContext)

  const navigate = useNavigate()

  const handleFormToggle = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleAction = async () => {
    console.log('entró')
    if (showRegisterForm) {
      const signupRes = await postSignup({ email, pass, name, username });
      console.log(signupRes)
      localStorage.setItem('token', signupRes.token)
      navigate('/')
      const user = await getProfile()
      user && setUserData(user)
      
    } else {
      const loginRes = await postLogin({ email, pass });
      console.log(loginRes)
      
      localStorage.setItem('token', loginRes.token)


      navigate('/')

      const user = await getProfile()
      user && setUserData(user)
      console.log(user)
      
    }
  };

  

  return (
    <Box backgroundColor={'primary.main'} sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center',alignItems: 'center', width: '100vw', height: '100vh'}} >
      <Card sx={{ maxWidth: '500px', height: 'min-content', backgroundColor: 'background.main', borderRadius: '5%', padding: '10px' }} raised={true} >
        <CardHeader sx={{color: 'primary.main'}} title={showRegisterForm ?  'Register' : 'Login'} />
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
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="dense"
            fullWidth={true}
            type="password"
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAction()}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleFormToggle} variant="outlined" color="primary" sx={{ textTransform: 'none', color: 'black', borderColor: 'primary.main'}} >
            {showRegisterForm ? <span> Already have an account? Login </span> : <span> Don&apos;t have an account? Sign Up </span> }
          </Button>
          <Button onClick={handleAction} variant="contained" color="primary" sx={{ color: 'whitesmoke'}} >
            {showRegisterForm ? 'Register' : 'Login'}
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Login
