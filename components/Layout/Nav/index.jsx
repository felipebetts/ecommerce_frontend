import { Flex } from "../../Containers"
import { NavContainer, NavItem } from "./styles"
import DropdownButton from '../../Common/DropdownButton'


const Nav = () => {

    const items = [
        'Lâmpadas',
        'Luminárias',
        'Adaptadores',
        'Lustres'
    ]

    return (
        <NavContainer>
            <Flex
                width='100%'
            >
                { items.map((e, i) => (
                    <DropdownButton
                        tertiary
                        id={`nav_item_${i}`}
                        key={`nav_item_${i}`}
                        // small
                        label={<NavItem>{e}</NavItem>}
                    >
                        Produtos
                    </DropdownButton>
                ))}
            </Flex>
        </NavContainer>
    )
}

export default Nav