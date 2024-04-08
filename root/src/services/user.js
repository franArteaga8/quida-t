import api from "./config"

export const getProfile = async () => {
    const { data } = await api.get('/users/profile', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return data
        
  
}