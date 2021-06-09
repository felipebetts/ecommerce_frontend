import { createContext, useEffect, useState } from "react"


export const DropdownButtonContext = createContext()


export const DropdownButtonContextProvider = ({ children }) => {

    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <DropdownButtonContext.Provider value={{
            showDropdown,
            setShowDropdown
        }}>
            { children}
        </DropdownButtonContext.Provider>
    )
}
