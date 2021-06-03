import { useContext, useEffect, useState } from "react"
// import Button from "../components/Common/Button"
import Card from "../components/Common/Card"
import Carousel from "../components/Common/Carousel"
import { CardsContainer, Flex, MainContainer } from "../components/Containers"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Nav from "../components/Layout/Nav"
import { apiClient } from "../services/apiClient"
import { localStorageUserId } from "../utils/constants"
import { UserContext } from '../contexts/UserContext'


const Main = () => {

    const [products, setProducts] = useState(null)
    const { user } = useContext(UserContext)

    useEffect(() => {
        console.log('user: ', user)
        apiClient('get', '/products/price/6')
            .then(res => {
                if (res.data) {
                    setProducts([...res.data.products])
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleLoadMore = () => {
        const cursor = { ...products[products.length - 1] }

        const reqData = {
            body: {
                cursor: cursor.price
            }
        }
        const productLength = products.length  
        apiClient('get', `/products/price/${productLength + 6}`, reqData)
            .then(res => {
                console.log(res)
                if (res.data) {
                    setProducts(res.data.products)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Header />
            <Nav />
            {/* width="100%" margin='auto' */}
            <Flex>
            <Carousel />
            </Flex>
            <MainContainer>
                <CardsContainer>
                    { !products ? null : (
                        products.map((e, i) => (
                            <Card product={e} key={i} onClick={() => console.log('click')}/>
                        ))
                    )}
                </CardsContainer>
            </MainContainer>
            <Flex margin='20px'>
                {/* <Button
                    onClick={() => {
                        console.log('click')
                        handleLoadMore()
                    }}
                >
                    Load More
                </Button> */}
            </Flex>
            <Footer />
        </>
    )
}

export default Main