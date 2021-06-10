import { createContext, useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { AUTH_TOKEN, localStorageUserId } from "../utils/constants";
import { useRouter } from 'next/router'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const router = useRouter()

    const logout = () => {
        setUser(null)
        localStorage.removeItem(AUTH_TOKEN)
        router.reload()
    }

    useEffect(() => {
        // const userId = localStorage.getItem(localStorageUserId)
        // console.log('userId: ', userId)
        getCurrentUser()

    }, [[], token])

    const getCurrentUser = () => {
        setToken(localStorage.getItem(AUTH_TOKEN))
        console.log('token: ', token)

        
        if (token !== null && token !== undefined && !user) {
            const reqData = {
                body: {
                    token
                }
            }
            apiClient('post', `/users/validate`, reqData)
                .then(res => {
                    console.log(res.data.data)
                    if (res.data) {
                        setUser(res.data.data)
                    }                    
                })
                .catch(err => {
                    setUser(null)
                    localStorage.removeItem(AUTH_TOKEN)
                    console.log(err)
                })

        }
    }

    return (
        <UserContext.Provider value={{
            user,
            logout,
            getCurrentUser
        }}>
            { children }
        </UserContext.Provider>
    )
}