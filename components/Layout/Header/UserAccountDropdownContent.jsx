import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { DropdownButtonContext } from "../../../contexts/DropdownButtonContext"
import { UserContext } from "../../../contexts/UserContext"
import Button from "../../Common/Button"
import { Box, Flex } from "../../Containers"
import { logout } from '../../../services/authClient'


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
                <Flex
                    column
                >
                    <p>Minha Conta</p>
                    <Button
                        secondary
                        onClick={() => {
                            logout()
                            router.reload()
                        }}
                    >
                        Sair
                    </Button>
                </Flex>
                ) : (
                <Flex
                    column
                >
                    <p>Você ainda não entrou na sua conta</p>
                    <Button
                        small
                        margin='10px 0'
                        onClick={() => {
                            setShowDropdown(false)
                            router.push('/login')
                        }}
                    >
                        Entrar
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}

export default UserAccountDropdownContent