import { useEffect, useState } from "react"
import { apiClient } from "../../services/apiClient"
import { CardContainer, CardImage, CardContent } from "./styles"
import { Flex } from '../Containers'


const Card = ({ product }) => {

    return (
        <CardContainer>
            <CardImage imageSrc="https://picsum.photos/270/140" />
            <CardContent>
                <h4 style={{ margin: '10px'}}>{ product.name }</h4> 
                <p>R${ product.price }</p>
            </CardContent>
        </CardContainer>
    )
}

export default Card