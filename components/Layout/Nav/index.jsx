import { Flex } from "../../Containers"
import { NavContainer, NavItem } from "./styles"


const Nav = () => {

    const items = [
        'Lâmpadas',
        'Luminárias',
        'Adaptadores',
        'Lustres'
    ]

    return (
        <NavContainer>
            <Flex>
                { items.map((e, i) => (
                    <NavItem key={i}>{e}</NavItem>
                ))}
            </Flex>
        </NavContainer>
    )
}

export default Nav