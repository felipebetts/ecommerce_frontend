import styled from "styled-components";


export const FooterContainer = styled.footer`
    width: 100%;
    padding: 1rem;

    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 1px solid ${({ theme }) => theme.colors.text.neutral400};

    background: ${({ theme }) => theme.colors.primary.dark};
`

export const FooterCol = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: #eee;
    margin: 80px;
    margin-top: 30px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    text-align: left;

    @media(max-width: 885px) {
        width: 250px;
    
    }
`

export const FooterItem = styled.div`
    cursor: pointer;
    margin-bottom: 20px;
    &:hover {
        color: ${({ theme }) => theme.colors.primary.purple};
    }
`
