import { apiClient } from "./apiClient"


export const getUserCart = (userId) => {
    return apiClient('get', `/carts/${userId}`)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}

export const addToCart = (user_id, product_id) => {

    const reqData = {
        body: {
            user_id,
            product_id
        }
    }

    return apiClient('post', '/carts/add', reqData)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}