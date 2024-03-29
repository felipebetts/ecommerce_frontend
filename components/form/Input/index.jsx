import { Box } from "../../Containers"
import { AssistentP, IconButton, InputContainer, StyledInput, StyledLabel } from "./styles"
import MaskedInput from 'react-text-mask'

const Input = ({
    id = 'input_id',
    type = 'text',
    value,
    onChange,
    placeholder,
    label,
    Icon,
    iconIsButton,
    onIconButtonClick,
    success,
    error,
    assistentText,
    margin = '32px 0 16px',
    pattern,
    width = '100%',
    mask
}) => {

    // console.log('error: ', error, id)

    const phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    
    const cnpjMask = [ /[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]

    if (mask) {
        return (
            <Box
                width={width}
                height='100%'
                textAlign='left'
                margin={margin}
            >
                <Box
                    margin='0 0 16px'
                >
                    <label htmlFor={id}>
                        {label}
                    </label>
                </Box>
                <InputContainer
                    error={error}
                    success={success}
                >
                    <MaskedInput
                        mask={mask === 'phone' ? phoneMask : cnpjMask}
                        // placeholder="Enter a phone number"
                        id={id}
                        name={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        render={(ref, props) => (
                            <StyledInput
                                // innerRef={ref}
                                ref={(input) => ref(input)}
                                {...props}
                            />
                            // <MyStyledInput innerRef={ref} {...props} />
                        )}
                    />

                    {Icon && (
                        <IconButton type='button' isActive={iconIsButton} onClick={onIconButtonClick}>
                            <Icon size={24} weight="thin" />
                        </IconButton>
                    )}
                </InputContainer>
                { assistentText && (
                    <AssistentP error={error}>{assistentText}</AssistentP>
                )}
            </Box>
        )
    }

    return (
        <Box
            width={width}
            height='100%'
            textAlign='left'
            margin={margin}
        >
            <Box
                margin='0 0 16px'
            >
                <label htmlFor={id}>
                    {label}
                </label>
            </Box>
            <InputContainer
                error={error}
                success={success}
            >
                <StyledInput
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    pattern={pattern}
                />
                {Icon && (
                    <IconButton type='button' isActive={iconIsButton} onClick={onIconButtonClick}>
                        <Icon size={24} weight="thin" />
                    </IconButton>
                )}
            </InputContainer>
            { assistentText && (
                <AssistentP error={error}>{assistentText}</AssistentP>
            )}
        </Box>
    )
}

export default Input