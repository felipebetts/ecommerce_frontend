import styled from 'styled-components'

export const MainContainer = styled.main`
    max-width: 1000px;
    margin: 30px auto;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    
    
    ${(props) => props.column ? 'flex-direction: column;' : ''}
    ${(props) => props.wrap ? `flex-wrap: ${props.wrap};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.grow ? `flex-grow: ${props.grow};` : ''}
    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minWidth ? `min-width: ${props.minWidth};` : ''}
`

export const Box = styled.div`

    ${(props) => props.width ? `width: ${props.width};` : ''}

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}

    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minWidth ? `min-width: ${props.minWidth};` : ''}

`

export const ClickableDiv = styled.div`

    cursor: pointer;

` 

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-wrap: wrap;
`

export const Page = styled.div`
    min-height: 90vh;
`