import { apiClient } from "./apiClient"


export const register = ({ name, email, password }) => {
    const reqData = {
        body: {
            name,
            email,
            password
        }
    }

    return apiClient('post', '/users/create', reqData)
}

export const login = (userLogin) => {
    console.log(userLogin)

    const reqData = {
        body: {
            ...userLogin
        }
    }

    return apiClient('post', '/users/login', reqData)
        .then(res => {
            console.log('res: ', res)
            return res
        })
}