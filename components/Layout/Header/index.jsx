import { HeaderContainer, IconContainer } from "./styles"
import { ClickableDiv, Flex } from '../../Containers'
import NextLink from 'next/link'
import { UserContext } from '../../../contexts/UserContext'
import { getUserCart } from "../../../services/cartClient";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartSimple, User } from 'phosphor-react'
import DropdownButton from '../../Common/DropdownButton'
import { useRouter } from "next/router";
import CartDropdownContent from "./CartDropdownContent";
import UserAccountDropdownContent from "./UserAccountDropdownContent";
import Button from "../../Common/Button";

const Header = () => {

    const [cart, setCart] = useState(null);

    const router = useRouter()

    const { user, logout } = useContext(UserContext)

    const getCart = () => {
        if (user) {
            getUserCart(user.id)
                .then(res => {
                    if (res && res.data) {
                        console.log()
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
                <DropdownButton
                    id='user_account_dropdown_button'
                    tertiary
                    padding='0 15px'
                    width='50px'
                    label={<User size={24} />}
                    // onClick={() => router.push('/cart')}
                >
                    <UserAccountDropdownContent />
                </DropdownButton>
                {/* <DropdownButton
                    id='cart_dropdown_button'
                    tertiary
                    padding='0 15px'
                    width='50px'
                    label={<ShoppingCartSimple size={24} />}
                    // onClick={() => router.push('/cart')}
                >
                    <CartDropdownContent
                        cart={cart}
                    />
                </DropdownButton> */}
                <Button
                    tertiary
                    padding='0 15px'
                    width='50px'
                    onClick={() => router.push('/cart')}
                >
                    <div 
                        style={{ color: '#000' }}
                    >
                        <ShoppingCartSimple size={24} />
                    </div>
                </Button>
            </Flex>
        </HeaderContainer>
    )
}

export default Header