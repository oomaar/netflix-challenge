import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    color: #555;
    margin: auto;
    padding: 20px;
`;

export const Title = styled.div`
    font-size: 20px;
`;

export const Rows = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`;

export const Row = styled.div`
    padding: 10px;
`;

export const Link = styled.p`
    margin: 8px;
    cursor: pointer;
    font-size: clamp(12px, 1vw, 16px);

    &:hover {
        text-decoration: underline;
    }
`;