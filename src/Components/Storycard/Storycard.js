import React from 'react';
import {
    Container,
    Card,
    Feature,
    Title,
    SubTitle,
    ContainerImage,
    StoryImage,
    ContainerVideo,
    StoryVideo,
    ContainerAnimation,
    Animation,
    AnimationImage,
    AnimationFeature,
    AnimationText,
} from "./styles/styledStoryCard";

const Storycard = () => {
    return (
        <Container>
            <Card>
                <Feature>
                    <Title>Enjoy on your TV.</Title>
                    <SubTitle>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</SubTitle>
                </Feature>
                <ContainerImage>
                    <StoryImage src="/story/tv.png" alt="story 1" />
                    <ContainerVideo>
                        <StoryVideo autoPlay playsInline muted loop>
                            <source src="/story/video-1.m4v" />
                        </StoryVideo>
                    </ContainerVideo>
                </ContainerImage>
            </Card>

            <Card className="flip__story">
                <Feature className="flip__feature">
                    <Title>Download your shows to watch offline.</Title>
                    <SubTitle>Save your favorites easily and always have something to watch.</SubTitle>
                </Feature>
                <ContainerImage className="flip__image">
                    <StoryImage className="drop__image" src="/story/story-2.jpg" alt="story 2" />
                    <ContainerAnimation>
                        <Animation>
                            <AnimationImage src="/story/boxshot.png" alt="boxshot" />
                        </Animation>
                        <AnimationFeature>
                            <AnimationText>Stranger Things</AnimationText>
                            <AnimationText className="blue">Downloading...</AnimationText>
                        </AnimationFeature>
                    </ContainerAnimation>
                </ContainerImage>
            </Card>

            <Card>
                <Feature>
                    <Title>Watch everywhere.</Title>
                    <SubTitle>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</SubTitle>
                </Feature>
                <ContainerImage>
                    <StoryImage src="/story/mac.png" alt="story 1" />
                    <ContainerVideo className="video3">
                        <StoryVideo autoPlay playsInline muted loop>
                            <source src="/story/video-3.m4v" />
                        </StoryVideo>
                    </ContainerVideo>
                </ContainerImage>
            </Card>
        </Container>
    )
};

export default Storycard;
