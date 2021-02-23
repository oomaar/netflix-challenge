import styled from "styled-components/macro";

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    display: flex;
    transition: 0.5s ease;

    &.blackNav {
        background-color: #000;
    }
`;

export const SubContainer = styled.div`
    padding: 20px;
    display: flex;
    flex: 0.5;
    justify-content: flex-start;
    align-items: center;

    &.invertSubContainer {
        flex-direction: row-reverse;
    }
`;

export const Netflix = styled.img`
    width: clamp(80px, 10vw, 120px);
    cursor: pointer;
`;

export const LinksContainer = styled.div`
    /* border: 2px solid red; */
    margin-left: 20px;
`;

export const Link = styled.button`
    margin: 0 5px;
    background: none;
    color: #fff;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 450;
`;


export const UserProfileContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const UserProfile = styled.img`
    width: 35px;
    border-radius: 5px;
    margin-right: 15px;
`;

export const ChevronDown = styled.img`
    transform: rotate(90deg);
    filter: invert(1);
    width: 20px;
`;

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 15px;
    align-items: center;
`;

export const Icon = styled.img`
    filter: invert(1);
    width: 30px;
    margin: 0 5px;
    cursor: pointer;
`;

export const DropDown = styled.div``;