import { useEffect, useState } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import { Flex, MainContainer } from "../components/Containers"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Nav from "../components/Layout/Nav"
import { apiClient } from "../services/apiClient"


const Main = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        apiClient('get', 'http://localhost:4000/products/6')
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
        const cursor = products[products.length - 1]

        const reqData = {
            body: {
                cursor
            }
        }

        apiClient('get', 'http://localhost:4000/products/6', reqData)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Header />
            <Nav />
            <Flex width="100%" margin='auto'>
            <Carousel />
            </Flex>
            <MainContainer>
                { !products ? null : (
                    products.map((e, i) => (
                        <Card product={e} key={i}/>
                    ))
                )}
            </MainContainer>
            <Flex margin='20px'>
                <Button
                    onClick={() => {
                        console.log('click')
                        handleLoadMore()
                    }}
                >
                    Load More
                </Button>
            </Flex>
            <Footer />
        </>
    )
}

export default Main