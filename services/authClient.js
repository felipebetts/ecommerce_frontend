import { apiClient } from "./apiClient"


export const register = ({ name, email, password }) => {
    const reqData = { body: {
        name,
        email,
        password
    }}

    return apiClient('post', '/users/create', reqData)
}