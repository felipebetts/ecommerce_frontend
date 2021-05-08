import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 0 5%;

    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 10;

    background: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

`

export const IconContainer = styled.div`

    font-size: 1.5rem;
`