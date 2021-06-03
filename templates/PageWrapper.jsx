import { Box, Flex, MainContainer } from "../components/Containers"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Nav from "../components/Layout/Nav"


const PageWrapper = ({ children, noNav }) => {
    return (
        <Flex
            column
            width='100%'
            minHeight='100vh'
            justifyContent='space-between'
        >
            <Box width='100%'>
                <Header />
                { noNav ? null : (
                    <Nav />
                )}
                { children }
            </Box>
            {/* <Box width='100%'>
            </Box> */}
            <Box width='100%'>
                <Footer />
            </Box>
        </Flex>
    )
}

export default PageWrapper