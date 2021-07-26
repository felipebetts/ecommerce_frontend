import Carousel from "../../components/Common/Carousel"
import { Flex, MainContainer } from "../../components/Containers"
import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import Nav from "../../components/Layout/Nav"
// import Button from '../../components/Common/Button'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from "react"
import { ProductCarouselContainer, ProductCarouselItem, ProductInfo } from "../../components/pageSpecific/Product/styles"
import { apiClient } from "../../services/apiClient"
import { UserContext } from '../../contexts/UserContext'
import Button from "../../components/Common/Button"
import { addToCart } from "../../services/cartClient"


const Product = () => {

    const [carouselItems, setCarouselItems] = useState(null)
    const [product, setProduct] = useState(null)

    const router = useRouter()
    const { id } = router.query

    const { user } = useContext(UserContext)

    useEffect(async () => {
        const updatedItems = [
            <ProductCarouselItem imageSrc='https://picsum.photos/300' />,
            <ProductCarouselItem imageSrc='https://picsum.photos/300' />,
            <ProductCarouselItem imageSrc='https://picsum.photos/300' />
        ]
        if (id) {
            setCarouselItems(updatedItems)
            const thisProduct = await apiClient('get', `/products/${id}`)
            console.log(thisProduct)
            if (thisProduct.data) {
                setProduct({ ...thisProduct.data })
            } else {
                console.log()
                setProduct('null')
            }
        }
    }, [id])

    const handleAddToCart = () => {
        if (user && id) {

            addToCart(user.id, id)
                .then(res => {
                    if (res && res.data && res.status === 200) {
                        console.log('res.data: ', res.data)
                        router.reload()
                    }
                })

            
        }
    }

    if (!product && product !== 'null') {
        return (
            <>
                <Header />
                <Nav />
                <MainContainer>
                    <Flex
                        justifyContent='space-evenly'
                        alignItems='flex-start'
                        wrap='wrap'
                    >
                        <ProductCarouselContainer>
                            <Carousel
                                items={carouselItems}
                                infinite={false}
                                disableDotsControls={false}
                            />
                        </ProductCarouselContainer>
                        <ProductInfo noProduct>
                            {/* <CircularProgress /> */}
                        </ProductInfo>
                    </Flex>
                </MainContainer>
                <Footer />
            </>
        )
    }

    if (product === 'null') {
        return (
            <>
                <Header />
                <Nav />
                <MainContainer>
                    <Flex
                        justifyContent='space-evenly'
                        alignItems='flex-start'
                        wrap='wrap'
                    >
                        <ProductCarouselContainer>
                            <Carousel
                                items={carouselItems}
                                infinite={false}
                                disableDotsControls={false}
                            />
                        </ProductCarouselContainer>
                        <ProductInfo noProduct>
                            <h2>Produto não existe</h2>
                        </ProductInfo>
                    </Flex>
                </MainContainer>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <Nav />
            <MainContainer>
                <Flex
                    justifyContent='space-between'
                    alignItems='flex-start'
                    wrap='wrap'
                    margin='20px'
                >
                    <ProductCarouselContainer>
                        <Carousel
                            items={carouselItems}
                            infinite={false}
                            disableDotsControls={false}
                        />
                    </ProductCarouselContainer>
                    <ProductInfo>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <Flex column>
                            <p> <strong>R$ {product.price}</strong></p>
                            <Button
                                disabled={!user}
                                onClick={() => {
                                    console.log('add to cart')
                                    handleAddToCart()
                                }}
                            >
                                Adicionar ao carrinho
                            </Button>
                        </Flex>
                    </ProductInfo>
                </Flex>
            </MainContainer>
            <Footer />
        </>
    )
}

export default Product