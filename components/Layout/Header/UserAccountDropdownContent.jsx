import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { Box, Flex } from "../../Containers"


const UserAccountDropdownContent = () => {

    const { user } = useContext(UserContext)

    console.log('user: ', user)

    return (
        <Flex 
            column
            height='400px'
            // width='100%'
        >
            { user ? (
                <Box> <p>User is logged in</p></Box>
                ) : (
                <Box> <p>User is not logged in</p></Box>
            )}
        </Flex>
    )
}

export default UserAccountDropdownContent