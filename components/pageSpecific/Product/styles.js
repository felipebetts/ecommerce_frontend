import styled from "styled-components";


export const ProductCarouselItem = styled.div`

    height: 300px;
    ${(props) => props.imageSrc ? `background-image: url(${props.imageSrc});` : ''} 
    background-color: #343434;
    color: #eee;
    border: solid 2px #222;
    // border-radius: 5px;
    `
    
export const ProductCarouselContainer = styled.div`
    
    margin-bottom: 80px;
    height: 300px;
    width: 300px;
`
    
export const ProductInfo = styled.div`
    // padding: 1rem;


    // background-color: #343434;
    // color: #eee;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    flex-direction: column;
    width: 500px;
    height: 300px;

    p {
        font-size: 1.2rem;
    }

    ${(props) => props.noProduct ? `
        justify-content: center;
        background: inherit;
        color: inherit;
        ` : ''}

`