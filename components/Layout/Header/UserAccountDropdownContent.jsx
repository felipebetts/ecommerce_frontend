import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { DropdownButtonContext } from "../../../contexts/DropdownButtonContext"
import { UserContext } from "../../../contexts/UserContext"
import Button from "../../Common/Button"
import { Box, Flex } from "../../Containers"


const UserAccountDropdownContent = () => {

    const { user, getCurrentUser } = useContext(UserContext)
    const { setShowDropdown } = useContext(DropdownButtonContext)

    const router = useRouter()

    useEffect(() => {
        if (!user) {
            getCurrentUser()
        }
    }, [user])

    console.log('user: ', user)

    return (
        <Flex 
            column
            // height='400px'
            // width='100%'
        >
            { user ? (
                <Box> <p>User is logged in</p></Box>
                ) : (
                <Flex
                    column
                >
                    <p>User is not logged in</p>
                    <Button
                        small
                        margin='10px 0'
                        onClick={() => {
                            setShowDropdown(false)
                            router.push('/login')
                        }}
                    >
                        Login
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}

export default UserAccountDropdownContent