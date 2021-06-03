import { HeaderContainer, IconContainer } from "./styles"

import { ClickableDiv, Flex } from '../../Containers'



import NextLink from 'next/link'
import { UserContext } from '../../../contexts/UserContext'
import { getUserCart } from "../../../services/cartClient";
import { useContext, useEffect, useState } from "react";

const Header = () => {

    const [cart, setCart] = useState(false);


    const { user, logout } = useContext(UserContext)

    const getCart = () => {
        if (user) {
            getUserCart(user.id)
                .then(res => {
                    if (res && res.data) {
                        setCart(res.data)
                    }
                })
        }
    }

    useEffect(() => {
        getCart()
    }, [user])

    useEffect(() => {
        if (cart) {
            console.log('cart: ', cart)
        }
    }, [cart])

    return (
        <HeaderContainer>
            <NextLink href='/'>
                <ClickableDiv>
                    <h1>Lumiverso</h1>
                </ClickableDiv>
            </NextLink>
            <Flex>
                
            </Flex>
        </HeaderContainer>
    )
}

export default Header