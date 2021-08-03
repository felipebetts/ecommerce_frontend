import { HeaderContainer, IconContainer } from "./styles"
import { ClickableDiv, Flex } from '../../Containers'
import NextLink from 'next/link'
import { UserContext } from '../../../contexts/UserContext'
import { useContext, useEffect, useState } from "react";
import { ShoppingCartSimple, User } from 'phosphor-react'
import { useRouter } from "next/router";
import Button from "../../Common/Button";

const Header = () => {

    const [cart, setCart] = useState(null);

    const router = useRouter()

    const { user, logout } = useContext(UserContext)

    return (
        <HeaderContainer>
            <NextLink href='/'>
                <ClickableDiv>
                    <h1>Lumiverso Admin</h1>
                </ClickableDiv>
            </NextLink>
            <Flex>
                <Button
                    tertiary
                    padding='0 15px'
                    width='50px'
                    onClick={() => router.push('/')}
                >
                    Retornar ao site
                </Button>
            </Flex>
        </HeaderContainer>
    )
}

export default Header