import styled from "styled-components";


export const StyledButton = styled.button`
    
    ${(props) => props.fullWidth ? 'width: 100%;' : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    // height: 64px;

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    
    
    font: inherit;
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    
    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background: #ddd;
    }
    
    // background: ${({ theme }) => theme.colors.button.primary };
    // color: ${({ theme }) => theme.colors.text.white };
    
    // ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    
    // ${(props) => !props.secondary ? '' : `
    //     border: 1px solid ${props.theme.colors.button.primary};
    //     color: ${props.theme.colors.button.primary};
    //     background: inherit;
    // `}

    // ${(props) => !props.tertiary ? '' : `
    //     color: ${props.theme.colors.button.primary};
    //     background: inherit;

    //     `}
        


    // ${(props) => !props.disabled ? '' : `
    //     color: ${props.theme.colors.text.neutral400};
    //     background: ${props.theme.colors.button.disabled};
    //     cursor: not-allowed;
    // `}

    // ${(props) => !props.small ? '' : `
    //     height: 48px;
    //     width: 120px;
    // `}
    // ${(props) => !props.big ? '' : `
    //     height: 64px;
    //     width: 270px;
    // `}
`

export const DropDownContainer = styled.div`

    position: absolute;
    top: 64px; 
    ${(props) => !props.top ? '' : `top: ${props.top + 32 }px;`}
    ${(props) => !props.left ? '' : `left: ${props.left - 116 + (props.buttonWidth/2)}px;`}

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    div.card {
        width: 200px;
        ${(props) => props.width ? `width: ${props.width};` : ''}

        border-radius: 8px;
        // height: 100%;

        padding: 1rem;
    
        background: #fff;
        box-shadow: ${({ theme }) => theme.boxShadow };
        
        z-index: 4;
    }
    
    div.triangle {
        background: none;
        box-shadow: none;

        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 7.5px 10px 7.5px;
        border-color: transparent transparent #fff transparent;
        z-index: 5;
    }

`