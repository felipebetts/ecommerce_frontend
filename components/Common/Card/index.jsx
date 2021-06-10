import { useEffect, useState } from "react"
import { apiClient } from "../../../services/apiClient"
import { CardContainer, CardImage, CardContent } from "./styles"
import { Flex } from '../../Containers'
import NextLink from 'next/link'


const Card = ({ product, margin }) => {

    return (
        <NextLink href='/products/[id]' as={`/products/${product.id}`} key={product.id}>
            <CardContainer margin={margin}>
                <CardImage imageSrc="https://picsum.photos/270/140" />
                <CardContent>
                    <h4 style={{ margin: '10px'}}>{ product.name }</h4> 
                    <p>R${ product.price }</p>
                </CardContent>
            </CardContainer>
        </NextLink>
    )
}

export default Card