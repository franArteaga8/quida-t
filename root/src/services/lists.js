import api from "./config"

export const getLists = async (listId) => {
    const { data } = await api.get(`/tasks/${listId}`, {
        headers: {
            Authorization: localStorage.getItem('token')
            
        }
    })
    return data
}
