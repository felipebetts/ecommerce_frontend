import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { getUserCart } from '../../services/cartClient'
import PageWrapper from '../../templates/PageWrapper'
import { Body1, Title3 } from '../../components/text'
import { Flex } from '../../components/Containers'

const CartPage = () => {


    const { user } = useContext(UserContext)

    const [cart, setCart] = useState(null)

    useEffect(() => {
        if (user) {
            console.log('cart user: ', user)
            getUserCart(user.id)
                .then(res => {
                    console.log('page res: ', res)
                    if (res && res.data) {
                        setCart(res.data)
                    }
                })
        }
    }, [user])

    return (
        <PageWrapper>
            <Flex
                column
                padding='16px 24px'    
            >
                {user ? (
                    <>
                        {cart ? cart.map((e, i) => (
                            <Title3>
                                { e.name }
                            </Title3>
                        )) : (
                            <Body1>
                                Não há itens no carrinho
                            </Body1>
                        )}
                    </>
                ) : (
                    <Body1>
                        Você precisa entrar na sua conta para ver o seu carrinho
                    </Body1>
                )}
            </Flex>
        </PageWrapper>
    )
}

export default CartPage