import { AUTH_TOKEN } from "../utils/constants"
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
            console.log(res)
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem(AUTH_TOKEN, res.data.token)
                return res
            }
        })
}


export const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    const didNotLogout = localStorage.getItem(AUTH_TOKEN)

    if (didNotLogout) {
        return false
    } else {
        return true
    }
}