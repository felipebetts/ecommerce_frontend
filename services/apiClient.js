import { AUTH_TOKEN } from "../utils/constants";
import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://localhost:4000',
    timeout: 3000,
})

export const apiClient = (method, url, { body, ...customConfig } = {}) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    const headers = { 'content-type': 'application/json'}
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }

    return axios[method](url, body, { ...config })
}