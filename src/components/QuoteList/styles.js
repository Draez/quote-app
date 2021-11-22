import styled from '@emotion/styled';

export const QuoteWrapper = styled.div`
    background: #6cc7a5;
    padding: 24px;
    margin: 24px 0;
    display: flex;
    justify-content: space-between;
`;

export const QuoteButtonDelete = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    padding: 16px 24px;
    border: 0;
    background:  #e73b3b;
    text-transform: uppercase;
    font-size: 14px;

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
    }
`;