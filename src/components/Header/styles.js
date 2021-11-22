import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
`;

export const HeaderText = styled.h1`
    font-family: 'Comforter Brush', cursive;
    font-size: 4em;
    color: #2e2626;
    position: relative;

    &:after {
        content: "";
        border-bottom: 10px solid #6cc7a5;
        width: 100%;
        left: 0;
        z-index: -10;
        position: absolute;
        bottom: 20%;
        height: 10px;
    }
`;