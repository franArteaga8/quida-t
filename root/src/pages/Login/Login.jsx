import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'

const Login = () => {

  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const onLogin = async () => {
    try {
      const loginResponse = await login({email, pass})
     //Do something with the response
     console.log(loginResponse)
    } catch (error) {
     //Handle the error
    }
  }
  
  return (
    <Card sx={{ maxWidth: '500px' }}>
    <CardHeader title="Login" />
    <CardContent>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
        fullWidth={true}
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        variant="outlined"
        fullWidth={true}
      />
      {/* {errorMessage && (
        <Typography color="error" textAlign="center" mt={2}>
          {errorMessage}
        </Typography>
      )} */}
    </CardContent>
    <Divider />
    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button /* onClick={() => goToRegister()} */>Register</Button>
      <Button onClick={() => onLogin()} color="success">
        Login
      </Button>
    </CardActions>
  </Card>

  )
}

export default Login