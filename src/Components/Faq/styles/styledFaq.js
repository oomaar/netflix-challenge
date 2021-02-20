import styled from "styled-components/macro";

export const Container = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const Item = styled.button`
    background-color: #303030;
    color: #fff;
    cursor: pointer;
    padding: 0 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    margin: 5px auto;
    width: 100%;
`;

export const Header = styled.p`
    font-weight: 400;
    font-size: clamp(18px, 3vw, 26px);
    text-align: left;
`;

export const Icon = styled.img`
    width: 30px;
    filter: invert(1);
    margin-left: auto;

    &.rotate {
        transform: rotate(45deg);
    }
`;

export const Content = styled.div`
    color: white;
    background-color: #303030;
    overflow: hidden;
    transition: max-height 0.2s ease;
`;

export const Text = styled.div`
    font-weight: 400;
    font-size: clamp(18px, 3vw, 26px);
    padding: 18px;
`;