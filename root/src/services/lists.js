import api from "./config"

export const getMyLists = async () => {
    const { data } = await api.get('/lists/myLists',{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return data
}

export const getLists = async (listId) => {
    const { data } = await api.get(`/tasks/${listId}`, {
        headers: {
            Authorization: localStorage.getItem('token')
            
        }
    })
    return data
}

export const getAList = async (listId) => {
    const { data } = await api.get(`/lists/${listId}`, {
        headers: {
            Authorization: localStorage.getItem('token')
            
        }
    })

    return data
}



