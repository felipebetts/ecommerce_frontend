import styled from "styled-components";


export const FooterContainer = styled.footer`
    width: 100%;
    padding: 1rem;

    display:flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid ${({ theme }) => theme.colors.text.neutral400};

`