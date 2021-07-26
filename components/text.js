import styled from "styled-components"


// export const H1 = styled.h1`

// `

// export const H2 = styled.h2``

// export const H3 = styled.h3`
//     color: ${({ theme }) => theme.colors.text.neutral600 };
//     ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
//     ${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
//     ${(props) => props.margin ? `margin: ${props.margin};` : ''}
// `

// export const H4 = styled.h4`


// `

// export const H5 = styled.h5``

export const Parag = styled.p`

    color: ${({ theme }) => theme.colors.text.neutral600 };
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

`

export const Title1 = styled.h1`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 32px;
    line-height: 1.25;
    font-weight: 400;
`

export const Title2 = styled.h2`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 24px;
    line-height: 1.25;
    font-weight: 400;
`

export const Title3 = styled.h3`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 16px;
    line-height: 1.25;
    font-weight: 700;
`

export const Title4 = styled.h4`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 12px;
    line-height: 1.25;
    font-weight: 700;
`

export const Body1 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}
${(props) => props.isActive ? `color: ${props.theme.colors.primary.purple};` : ''}

    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
`

export const Body2 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
`

export const Body3 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
`

export const Caption1 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 12px;
    line-height: 1.25;
    font-weight: 400;
`

export const Label1 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}


    font-size: 12px;
    line-height: 1.25;
    font-weight: 700;
`

export const ButtonText1 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}

    
    font-size: 14px;
    line-height: 1.25;
    font-weight: 700;
`

export const ButtonText2 = styled.p`

${(props) => props.textColor ? `color: ${props.theme.colors.text[props.textColor]};` : ''}
${(props) => props.margin ? `margin: ${props.margin};` : ''}

    
    font-size: 12px;
    line-height: 1.25;
    font-weight: 700;
`