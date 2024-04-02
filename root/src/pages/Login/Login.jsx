import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { login } from '../../services/auth'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Typography
} from '@mui/material'

function Login({ goToRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  async function onLogin() {
    try {
      const loginResponse = await login({email, password})
  
    } catch (error) {
        console.log('Error')
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
        {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => goToRegister()}>Register</Button>
        <Button onClick={() => onLogin()} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default Login
