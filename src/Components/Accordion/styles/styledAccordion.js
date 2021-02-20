import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    border-bottom: 8px solid #222;
`;

export const Faqs = styled.div`
    max-width: 1100px;
    padding: 20px;
    margin: auto;

    @media (max-width: 800px) {
        padding: 0;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: clamp(26px, 5vw, 50px);
    text-align: center;
    margin-bottom: 30px;
`;


export const FaqsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px auto;
`; 