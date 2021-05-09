import styled from "styled-components"

export const CarouselItem = styled.div`
    height: 500px;
    background: #343434;
    border: solid 1px #444;
    color: ${({ theme }) => theme.colors.border};


    display: flex;
    align-items: center;
    justify-content: center;
`

export const Dots = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    
    background: ${({ theme }) => theme.colors.border};
    opacity: 1;

    margin-right: 12px;

    ${props => (props.isActive ? `background: ${props.theme.colors.font};` : "")}
`