import { Box, Flex, MainContainer } from "../components/Containers"
import Footer from "../components/admin/Footer"
import Header from "../components/admin/Header"
import Nav from "../components/Layout/Nav"


const AdminWrapper = ({ children, noNav }) => {
    return (
        <Flex
            column
            width='100%'
            minHeight='100vh'
            justifyContent='space-between'
        >
            <Box width='100%'>
                <Header />
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

export default AdminWrapper