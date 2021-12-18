import styled from '@emotion/styled';

export const FilterLabel = styled.label`
   display: block;
   width: 100%;
   font-size: 14px;
   margin-bottom: 8px;
   color: #666;
`;

export const FilterInput = styled.input`
    padding: 8px 0;
    border: 0;
    border-bottom: 1px solid #666;
    color: #666;
    font-size: 18px;

    &:focus {
        outline: 0;
        color: #1a1a1a;
        border-bottom: 1px solid #1a1a1a;
    }
`;