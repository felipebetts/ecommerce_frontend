import styled from "styled-components";


export const StyledButton = styled.button`
    
    ${(props) => props.fullWidth ? 'width: 100%;' : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    height: 64px;

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    
    
    font: inherit;
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    
    border: none;
    border-radius: 8px;
    
    cursor: pointer;
    
    background: ${({ theme }) => theme.colors.button.primary };
    color: ${({ theme }) => theme.colors.text.white };
    
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    
    ${(props) => !props.secondary ? '' : `
        border: 1px solid ${props.theme.colors.button.primary};
        color: ${props.theme.colors.button.primary};
        background: inherit;
    `}

    ${(props) => !props.tertiary ? '' : `
        color: ${props.theme.colors.button.primary};
        background: inherit;

        &:hover, &:focus, &:active {
            background: #ddd;
        }
    `}


    ${(props) => !props.disabled ? '' : `
        color: ${props.theme.colors.text.neutral400};
        background: ${props.theme.colors.button.disabled};
        cursor: not-allowed;
    `}

    ${(props) => !props.small ? '' : `
        height: 48px;
        width: 120px;
    `}
    ${(props) => !props.big ? '' : `
        height: 64px;
        width: 270px;
    `}
`