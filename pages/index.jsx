import { useContext, useEffect, useState } from "react"
// import Button from "../components/Common/Button"
import Card from "../components/Common/Card"
import Carousel from "../components/Common/Carousel"
import { Box, CardsContainer, Flex, MainContainer } from "../components/Containers"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Nav from "../components/Layout/Nav"
import { apiClient } from "../services/apiClient"
import { localStorageUserId } from "../utils/constants"
import { UserContext } from '../contexts/UserContext'
import PageWrapper from "../templates/PageWrapper"
import Button from "../components/Common/Button"
import { getPaginatedProductsByDate } from "../services/productClient"


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    786: { items: 3 },
    1024: { items: 4 },
};


const Main = () => {

    const [carouselProducts, setCarouselProducts] = useState(null)
    const [spotlightProducts, setSpotlightProducts] = useState(null)

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


    useEffect(async () => {
        const productsByDate = await getPaginatedProductsByDate(10)
        if (productsByDate && productsByDate.data && productsByDate.data.products) {
            setSpotlightProducts(productsByDate.data.products)
        }
    }, [])

    useEffect(() => {
        if (spotlightProducts) {
            const carouselItems = spotlightProducts.map((e, i) => (
                <Card margin='20px auto' product={e} key={i} onClick={() => console.log('click')}/>
            ))
            setCarouselProducts(carouselItems)
        }
    }, [spotlightProducts])

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
        <PageWrapper>
            <Flex>
            <Carousel
                disableDotsControls
            />
            </Flex>
            <Flex
                column
                width='100%'
            >
                <Flex
                    width='90%'
                    margin='30px 0 0 0'    
                >
                    <Carousel 
                        items={carouselProducts ? carouselProducts : null}
                        responsive={responsive}
                        autoPlayInterval={3000}
                    />
                </Flex>
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
                <Button
                    small
                    onClick={() => {
                        console.log('click')
                        handleLoadMore()
                    }}
                >
                    Load More
                </Button>
            </Flex>
        </PageWrapper>
    )
}

export default Main