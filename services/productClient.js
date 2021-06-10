import { apiClient } from "./apiClient"


export const getPaginatedProductsByDate = (amount, cursorDate) => {

    if (cursorDate) {
        const reqBody = {
            cursor: cursorDate
        }

        return apiClient('get', `/products/date/${amount}`, reqBody)
            .then(res => {
                console.log('res: ', res)
                return res
            })
    } else {
        return apiClient('get', `/products/date/${amount}`)
            .then(res => {
                console.log('res: ', res)
                return res
            })
    }

}