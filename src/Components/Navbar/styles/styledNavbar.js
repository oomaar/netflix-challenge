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
    margin-left: 20px;

    @media (max-width: 1300px) {
        display: none;
    }
`;

export const ResponsiveContainer = styled.div`
    position: relative;
`;

export const BurgerIcons = styled.div`
    cursor: pointer;
    display: none;
    margin-left: 10px;
    align-items: center;

    @media (max-width: 1300px) {
        display: flex;
    }
`;

export const BurgerIcon = styled.img`
    filter: invert(1);
    width: 30px;
    margin-right: 10px;
`;

export const BurgerContainer  = styled.div`
    border-top: 1px solid white;
    display: none;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    width: 200px;
    background: none;
    margin: 10px auto 0;

    @media (max-width: 1300px) {
        display: flex;
    }
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

export const LinkHold = styled.div`
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    transition: background 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

export const ResponsiveLink = styled.button`
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: #808080;
    font-weight: 600;
    font-size: 1rem;
    margin: 10px 0;
`;

export const DropDown = styled.div`
    box-shadow: 0 0 2px 2px #000;
    background-color: rgba(0, 0, 0, 0.8);
    width: 150px;
    height: 300px;
    position: absolute;
    top: 45px;
    right: 30px;
    /* display: flex; */
    flex-direction: column;
    display: none;
`;

export const UserProfileContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover > ${DropDown} {
        display: flex;
    }
`;

export const DisplayName = styled.h3`
    color: #fff;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

export const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserContainer = styled.div`
    max-height: 50px;
    display: flex;
    padding: 5px;
    align-items: center;
`;

export const DropLinks = styled.div`
    /* border: 2px solid red; */

    &.above {
        border-bottom: 2px solid white;
    }
`;

export const DropLink = styled.button`
    background: none;
    color: #fff;
    margin: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px;
    font-weight: 700;

    &:hover {
        text-decoration: underline;
    }
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
    width: 25px;
    margin: 0 5px;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    border: 2px solid white;
    outline: none;
    color: #808080;
    padding: 8px;
    height: 30px;
    background: rgba(0, 0, 0, 0.7);
    transition: width 0.5s;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
    /* Bracket Hell */
`;

export const SearchIcon = styled.button`
    background: none;
    outline: none;
    border: none;
    width: 30px;
    margin: 0 5px;
`;