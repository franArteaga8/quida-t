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

export const getAllUsers = async () => {
    const { data } = await api.get('/users/',{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return data
}

export const putPsychologist = async (id) =>{
   
    const { data } = await api.put(`/users/${id}`,{},{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
   
    return data
}

export const getAllOpenTasks = async () => {
    const { data } = await api.get('/users/tasks', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    console.log(data)
    return data
}

export const putTaskCheck = async ({id, checkbox})=>{
    console.log(id)
    console.log(checkbox)
    console.log('aqui llega?')
    const { data } = await api.put(`/users/registry/${id}/${checkbox}`, {}, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    console.log('here?')
    console.log(data)
    return data
}