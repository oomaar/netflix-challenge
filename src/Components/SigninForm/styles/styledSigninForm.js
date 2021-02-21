import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
        max-width: 450px;
        max-height: 650px;
        padding: 10px;
        height: 100%;
        position: absolute;
        top: 10%;
        left: 0;
        right: 0;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.65);

        @media (max-width: 600px) {
            top: 50px;
            height: 70%;
        }
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin: 30px 0 28px;

        @media (max-width: 600px) {
            margin: 25px 0 28px;
        }
`;

export const Submit = styled.button`
    background: #e50914;
    border: 0;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    margin: 24px 0 12px;
    opacity: 0.9;
    outline: none;
    padding: 16px;
    transition: opacity 150ms ease-in;

    &:hover {
        opacity: 0.7;
    }
`;

export const Link = styled(ReachRouterLink)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Ptag = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const Text = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #737373;
`;

export const BlueText = styled.span`
    color: #0071eb;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`;