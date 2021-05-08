import styled from "styled-components";


export const NavContainer = styled.nav`
    margin: auto;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const NavItem = styled.div`
    margin: 10px 20px;
`