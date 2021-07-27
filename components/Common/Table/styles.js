import styled from 'styled-components'

export const StyledTable = styled.table`
        
    // width: 100%;
    margin: 24px;
    max-width: 800px;

    border-collapse: collapse;

    // & th, td {
    // }
    
    & th {
        padding: 16px;
        text-align: left;
        border-bottom: 1px solid ${({ theme }) => theme.colors.text.neutral400 };
    }
    
    & td {
        text-align: center;
        padding: 32px 16px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.text.neutral200 };

        &:first-child {
            text-align: left;

        }
    }


`