import api from "./config"

export const getProfile = async () => {
    const { data } = await api.get('/users/profile', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return data
 
}

export const putProfile = async (update)=>{
    const { data } = await api.put('/users',{
        username: update.username,
        name: update.name,
        lastname: update.lastname,
        colegiate: update.colegiate
    },{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    return data
}