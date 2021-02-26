import styled from "styled-components/macro";

export const Container = styled.div`
    height: 100%;
    background: #121212;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 30%;
    left: 3%;
    padding: 20px;
    max-width: 800px;
`;

export const MovieTitle = styled.div`
    font-size: clamp(24px, 6vw, 60px);
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const MovieInfo = styled.div`
    font-size: 24px;
    font-size: clamp(18px, 4vw, 24px);
    color: #fff;
    margin-bottom: 30px;
`;

export const Buttons = styled.div`
    display: flex;
`;

export const ButtonIcon = styled.img`
    width: 20px;
    margin: 0 10px 0 5px;
    transition: all 0.5s;
`;

export const PlayButton = styled.button`
    background-color: #e6e6e6;
    color: #111;
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.1vw;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-right: 1rem;
    transition: all 0.5s;
    font-size: 20px;
    display: flex;
    align-items: center;
    height: 55px;

    &:hover {
        color: #fff;
        background-color: #e6e6e680;
        border: 0;
    }

    &:hover > ${ButtonIcon} {
        filter: invert(1);
    }
    
    @media (max-width: 700px) {
        height: 45px;
    }
`;

export const InfoButton = styled.div`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.1vw;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-right: 1rem;
    background-color: rgba(51, 51, 51, 0.8);
    transition: all 0.5s;
    font-size: 20px;
    display: flex;
    align-items: center;
    height: 55px;

    &:hover {
        background-color: #e6e6e680;
        color: #000;
    }

    &:hover > ${ButtonIcon} {
        filter: invert(1);
    }

    @media (max-width: 700px) {
        height: 45px;
    }
`;

export const BrowseFooter = styled.div`
    margin-top: 50px;
    padding: 20px;
`;

export const FooterContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
`;

export const SocialBox = styled.div`
    display: flex;

    img {
        filter: invert(1);
        width: 30px;
        cursor: pointer;
        margin: 10px;
    }
`;

export const FooterLink = styled.p`
    cursor: pointer;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

export const ServiceButton = styled.button`
    outline: 0;
    border: 2px solid #808080;
    color: #808080;
    padding: 7px;
    font-size: 13px;
    cursor: pointer;
    background: transparent;

    &:hover {
        color: #fff;
    }
`;
