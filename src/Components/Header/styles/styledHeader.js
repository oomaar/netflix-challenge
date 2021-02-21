import styled from "styled-components/macro";

export const Container = styled.div`
    position: relative;
    height: 100%;
`;

export const Background = styled.div`
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.8)),
    url("/images/misc/home-bg.jpg") center center / cover no-repeat;
    height: 77vh;
    width: 100%;
    border-bottom: 8px solid #222;
    z-index: 1;

    &.signin__background {
        border: none;
        height: 100%;
        background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.35),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.35)),
        url("/images/misc/home-bg.jpg") center center / cover no-repeat;
    }
`;

export const Netflix = styled.img`
    cursor: pointer;
    object-fit: contain;
    width: clamp(90px, 10vw, 150px);
    padding: 10px 20px;
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const Sigin = styled.button`
    background-color: #e50914;
    border: none;
    color: #fff;
    cursor: pointer;  
    font-size: 1rem;
    font-weight: 600;
    width: 100px;
    padding: 10px 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    outline: none;

    @media (max-width: 500px) {
        padding: 4px 8px;
    }
`;

export const Feature = styled.div`
    color: #fff;
    text-align: center;
    z-index: 1;
    padding: 20px;
    position: absolute;
    top: 30%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: clamp(2.092rem, 6vw, 4rem);
    margin: 0 auto 20px auto;
    max-width: 700px;
`;

export const Subtitle = styled.h2`
    font-size: clamp(1.125rem, 3vw, 1.625rem);
    font-weight: 400;
    margin-bottom: 30px;
`;