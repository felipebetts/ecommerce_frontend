import { FooterCol, FooterContainer, FooterItem } from "./styles"


const Footer = () => {
    return (
        <FooterContainer>
            <FooterCol>
                Copyright &copy; 2021
                <br/>
                <br/>
                <i>Lumiverso</i>
            </FooterCol>
            <FooterCol>
                <FooterItem>Curso Jardinagem Fácil</FooterItem>
                <FooterItem>eBook</FooterItem>
                <FooterItem>Produto</FooterItem>
            </FooterCol>
            <FooterCol>
                <FooterItem>Empresa</FooterItem>
                <FooterItem>Sobre</FooterItem>
                <FooterItem>Notícias</FooterItem>
                <FooterItem>Contato</FooterItem>
            </FooterCol>
        </FooterContainer>
    )
}

export default Footer