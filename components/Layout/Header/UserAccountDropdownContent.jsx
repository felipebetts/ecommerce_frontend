import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { Flex } from "../../Containers"


const UserAccountDropdownContent = () => {

    const { user } = useContext(UserContext)

    console.log('user: ', user)

    return (
        <Flex 
            column
            width='100%'
        >
            User
        </Flex>
    )
}

export default UserAccountDropdownContent