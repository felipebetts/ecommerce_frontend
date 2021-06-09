import { useContext, useEffect, useState } from "react"
import { DropDownContainer, StyledButton } from "./styles"
import { DropdownButtonContext } from '../../../contexts/DropdownButtonContext'


const DropdownButton = ({
    id = 'dropdown_button',
    label,
    // DropdownComponent,
    children,
    secondary,
    tertiary,
    disabled,
    small,
    fontSize,
    fullWidth, 
    onClick,
    margin,
    padding
}) => {
    
    // const [showDropdown, setShowDropdown] = useState(false)

    const { showDropdown, setShowDropdown } = useContext(DropdownButtonContext)

    const [top, setTop] = useState(null)
    const [left, setLeft] = useState(null)
    const [buttonWidth, setButtonWidth] = useState(null)

    // useEffect(() => {
    //     console.log('top: ', top)
    //     console.log('left: ', left)
    // }, [top, left])
    

    return (
        <>
            <StyledButton
                id={id}
                // secondary={secondary}
                // tertiary={tertiary}
                // disabled={disabled}
                // small={small}
                fontSize={fontSize}
                // width={width}
                fullWidth={fullWidth}
                onClick={() => {
                    const buttonElement = document.getElementById(id)
                    if (buttonElement) {
                        // console.log('top: ', top)
                        // console.log('buttonElement.getBoundingClientRect(): ', buttonElement.getBoundingClientRect())
        // console.log('left: ', left)

                        setTop(buttonElement.getBoundingClientRect().top)
                        setLeft(buttonElement.getBoundingClientRect().left)
                        setButtonWidth(buttonElement.getBoundingClientRect().width)
                        showDropdown === id ? setShowDropdown(false) : setShowDropdown(id)
                    }

                }}
                margin={margin}
                padding={padding}
            >
                {label}
            </StyledButton>
            { showDropdown === id && (
                <DropDownContainer
                    top={top}
                    left={left}
                    buttonWidth={buttonWidth}
                >
                    <div></div>
                    <div>
                        { children }
                    </div>
                </DropDownContainer>
            )}
        </>
    )
}

export default DropdownButton