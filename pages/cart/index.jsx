import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { getUserCart } from '../../services/cartClient'
import PageWrapper from '../../templates/PageWrapper'
import { Body1, Title2, Title3 } from '../../components/text'
import { Flex } from '../../components/Containers'
import Table from '../../components/Common/Table'
import { ShoppingCartSimple } from 'phosphor-react'

const CartPage = () => {


    const { user } = useContext(UserContext)

    const [cart, setCart] = useState(null)
    const [tableHeaders, setTableHeaders] = useState(null)

    useEffect(() => {
        if (user) {
            console.log('cart user: ', user)
            getUserCart(user.id)
                .then(res => {
                    console.log('page res: ', res)
                    const formattedCart = res.data.map((e, i) => ({
                        Produto: e.name,
                        Preço: e.price,
                        Quantidade: e.quantity
                    }))
                    if (res && res.data) {
                        setCart(formattedCart)
                    }
                })
        }
    }, [user])

    useEffect(() => {
        if (cart && cart[0]) {
            const headers = Object.keys(cart[0])
            setTableHeaders(headers)
        }
    }, [cart])

    if (!user) {
        return (
            <PageWrapper>
                <Flex
                    column
                    padding='16px 24px'
                >
                    <Body1>
                        Você precisa entrar na sua conta para ver o seu carrinho
                    </Body1>
                </Flex>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <Flex
                column
                width='100%'
                padding='24px'
                >
                {cart ? (
                    <Flex
                        column
                        width='100%'
                        margin='12px 0 0'
                    >
                        <Flex>
                            <ShoppingCartSimple size={24} />
                            <Title2 margin='16px'>
                                Meu Carrinho
                            </Title2>
                        </Flex>
                        <Table data={cart} headers={tableHeaders} />
                    </Flex>
                ) : (
                    <Body1>
                        Não há itens no carrinho
                    </Body1>
                )}
            </Flex>
        </PageWrapper>
    )
}

export default CartPage