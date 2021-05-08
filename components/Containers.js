import styled from 'styled-components'

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-wrap: wrap;

    max-width: 1000px;
    margin: auto;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => props.column ? 'flex-direction: column;' : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}

`