import styled from "styled-components/macro";

export const Container = styled.div`
    margin: auto;
    max-width: 1100px;
`;

export const Title = styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
    margin: 20px;
    text-align: center;
    color: #fff;
`;

export const Subcontainer = styled.div`
    margin: auto;
    max-width: 1000px; 

    @media (max-width: 950px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    padding: 10px;

    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    max-width: 600px;
    width: 100%;
    border: 1px solid green;
`;


export const Lable = styled.label`
    color: #000;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const Span = styled.span`
    transition: all 0.1s ease;
    position: absolute;
    top: 30%;
    left: 2%;
`;

export const Input = styled.input`
    padding: 10px 10px 0;
    outline-width: 0;
    height: 100%;
    width: 100%;
    border: 0;
    font-size: 18px;

    &:focus + ${Lable} ${Span} {
        transform: translateY(-100%);
        font-size: 12px;
        left: 1%;
    }

    &:valid + ${Lable} ${Span} {
        transform: translateY(-100%);
        font-size: 12px;
        left: 1%;
    }

    @media (max-width: 950px) {
        height: 50px;
    }
`;

export const Button = styled.button`
    background-color: #e50914;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: clamp(0.9rem, 2vw, 1.4rem);
    font-weight: 500;
    padding: 15px 20px 20px 20px;
    outline: none;
    opacity: 0.9;
    transition: opacity 150ms ease-in;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 950px) {
        display: block;
        margin: 20px auto;
        padding: 15px;
    }
`;

export const Chevron = styled.img`
    filter: brightness(0) invert(1);
    margin-left: 10px;
    width: clamp(12px, 2vw, 16px);
`;