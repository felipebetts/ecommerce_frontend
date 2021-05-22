import { apiClient } from "./apiClient"


export const getUserCart = (userId) => {
    return apiClient('get', `/carts/${userId}`)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}