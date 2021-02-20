import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    display: flex;
    border-bottom: 8px solid #222;

    &.flip__story {
        display: flex;
        flex-direction: row-reverse;
        border-bottom: 8px solid #222;

        @media (max-width: 950px) {
            flex-direction: column;
        }

        @media (max-width: 500px) {
            /* iphone */
        }
    }

    @media (max-width: 950px) {
        flex-direction: column;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        /* iphone */
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 550px;
    margin: auto 0 auto auto;
    padding: 20px;

    &.flip__feature {
        margin: auto auto auto 0;
    }

    @media (max-width: 950px) {
        text-align: center;
    }
`;

export const Title = styled.div`
    font-size: clamp(26px, 5vw, 50px);
    color: #fff;
    margin: 0px 0px 10px;
`;

export const SubTitle = styled.div`
    font-size: clamp(16px, 3vw, 26px);
    color: #fff;
    margin: 20px 0px 7px;
`;

export const ContainerImage = styled.div`
    position: relative;
    max-width: 400px;
    margin: auto auto auto 0;
    padding: 20px;

    &.flip__image {
        margin: auto 0 auto auto;

        @media (max-width: 950px) {
            margin: auto;
        }
    }

    @media (max-width: 950px) {
        margin: auto;
    }
`;

export const StoryImage = styled.img`
    width: 100%;
    z-index: 2;
    position: relative;

    &.drop__image {
        z-index: 0;
    }
`;

export const ContainerVideo = styled.div`
    position: absolute;
    z-index: 1;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
    width: 75%;

    &.video3 {
        top: 20%;
        width: 50%;
    }
`;

export const StoryVideo = styled.video`
    z-index: 1;
    width: 100%;
`;

export const ContainerAnimation = styled.div`
    background-color: #000;
    border: 3px solid #333;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    width: 70%;
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    margin: auto;
`;

export const Animation = styled.div`
    margin: 0 20px 0 0;
`;

export const AnimationImage = styled.img`
    width: 50px;
    z-index: 2;
    position: relative;
`;

export const AnimationFeature = styled.div`
    margin: 20px 0 0;

    &::after {
        background: url("/story/story-2.gif") center center no-repeat;
        background-size: 100%;
        content: '';
        display: block;
        height: 2.988rem;
        width: 2.988rem;
        position: absolute;
        right: 5%;
        bottom: 20%;
    }
`;

export const AnimationText = styled.div`
    color: #fff;
    font-size: 16px;

    &.blue {
        color: #0071eb;
    }
`;