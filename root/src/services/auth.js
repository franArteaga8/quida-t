import api from './config'

export const postLogin = async (loginData) => {
  const { data } = await api.post('/auth/login', loginData)
  return data
}

export const postSignup = async (signupData) => {
  const { data } = await api.post('/auth/signup', signupData)
  return data
}


