import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from "@mui/material"
import { useState } from "react"
import { postLogin, postSignup } from "../../services/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [showRegisterForm, setShowRegisterForm] = useState(false)

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
      navigate('/home')
    } else {
      const loginRes = await postLogin({ email, pass });
      console.log(loginRes)
      localStorage.setItem('token', loginRes.token)
      navigate('/home')
      
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: '500px' }} raised={true} >
        <CardHeader title={showRegisterForm ? 'Register' : 'Login'} />
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
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleFormToggle} variant="outlined" sx={{ textTransform: 'none' }} >
            {showRegisterForm ? <span> Already have an account? Login </span> : <span> Don&apos;t have an account? Sign Up </span> }
          </Button>
          <Button onClick={handleAction} variant="contained" >
            {showRegisterForm ? 'Register' : 'Login'}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Login
