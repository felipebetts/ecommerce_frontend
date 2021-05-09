import styled from "styled-components";


export const CardContainer = styled.div`
    margin: 20px;

    background: #fff;

    width: 270px;
    height: 200px;        

    border-radius: 5px;

    cursor: pointer;
    
    -webkit-box-shadow: ${({ theme }) => theme.boxShadow.primary};
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    
    transition-duration: 0.5s;
    
    &:hover {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    
    &:active, &:focus {
        -webkit-box-shadow: ${({ theme }) => theme.boxShadow.inset};
        box-shadow: ${({ theme }) => theme.boxShadow.inset};
    }
`
// 
export const CardImage = styled.div`
    
    height: 70%;

    background-color: #cccccc;
    ${(props) => props.imageSrc ? `background-image: url(${props.imageSrc});` : ''}
    

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    padding: 1.5em;    

`

export const CardContent = styled.div`

    padding: 0.5em;    
    height: 30%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 1.2rem;
        font-weight: 500;
    }
    
    h4 {
        font-size: 1.1rem;
        font-weight: 700;
    }
`