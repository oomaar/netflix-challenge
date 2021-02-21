import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    color: #555;
    margin: auto;
    padding: 20px;

    &.sigin__footer {
        background-color: rgba(0, 0, 0, 0.3);
        max-width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const Title = styled.div`
    font-size: 20px;
`;

export const Rows = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

export const Row = styled.div`
    padding: 10px;
`;

export const Link = styled.p`
    margin: 18px;
    cursor: pointer;
    font-size: clamp(12px, 1vw, 14px);

    &:hover {
        text-decoration: underline;
    }
`;