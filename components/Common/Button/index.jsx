import { StyledButton } from "./styles"


const Button = ({
    children,
    secondary,
    tertiary,
    disabled,
    small,
    fontSize,
    fullWidth,
    onClick,
    margin,
    padding,
    height
}) => {
    
    return (
        <StyledButton
            secondary={secondary}
            tertiary={tertiary}
            disabled={disabled}
            small={small}
            fontSize={fontSize}
            fullWidth={fullWidth}
            onClick={onClick}
            margin={margin}
            padding={padding}
            height={height}
        >
            { children }
        </StyledButton>
    )
}

export default Button