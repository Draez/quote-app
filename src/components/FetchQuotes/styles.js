import styled from '@emotion/styled';

export const QuoteButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
`;

export const QuoteButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    padding: 16px 24px;
    border: 0;
    background: ${props => props.primary ? "#6cc7a5" : "#e73b3b"};
    text-transform: uppercase;
    font-size: 14px;

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
    }
`;