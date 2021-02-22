import styled from "styled-components/macro";

export const Container = styled.div`
    height: 100vh;
    background-color: #121212;
    display: flex;
`;

export const FrontEnd = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.1)
        );
    max-height: 65px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: clamp(30px, 6vw, 70px);
    text-align: center;
    pointer-events: none;
`;

export const ProfilesContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    `;

export const ProfilesButton = styled.button`
    margin: auto;
    text-transform: uppercase;
    font-size: clamp(11px, 5vw, 23px);
    border: 3px solid #808080;
    color: #808080;
    cursor: pointer;
    background: transparent;
    padding: 10px;
    letter-spacing: 2px;
    outline: 0;
    
    &:hover {
        border: 3px solid #fff;
        color: #fff;
    }
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserPicture = styled.div`
    padding: 10px;
    width: 200px;
    margin: 10px;
    `;

export const Picture = styled.img`
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
`;

export const UserDisplayName = styled.div``;

export const DisplayName = styled.h3`
    color: #808080;
`;