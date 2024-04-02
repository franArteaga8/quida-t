import { api } from './config.js'

export async function login(loginData) {
    const response = await api.post('/auth/login', loginData)
    return response
  }

  export async function signup(signupData) {
    const response = await api.post('/auth/signup', signupData)
    return response
  }