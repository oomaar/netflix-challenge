import React from 'react';
import { Optionform } from '..';
import logo from "../../logo.svg";
import {
    Container,
    Background,
    Netflix,
    Sigin,
    Feature,
    Title,
    Subtitle,
} from "./styles/styledHeader";

const Header = () => {
    return (
        <Container>
            <Background>
                <Netflix src={logo} alt="Netflix" />
                <Sigin>Sign in</Sigin>
                <Feature>
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
                    <Optionform />
                </Feature>
            </Background>
        </Container>
    );
};

export default Header;
