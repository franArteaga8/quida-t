import api from './config'

export const login = async (loginData) => {
  const { data } = await api.post('/auth/login', loginData)
  console.log(data)
    return data
}

export const signup = async (signupData) => {
  const response = await api.post('/auth/signup', signupData)
    return response
}


