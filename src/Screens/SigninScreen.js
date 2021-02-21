import React from 'react';
import styled from "styled-components/macro";
import logo from "../logo.svg";
import {
    Container as HeaderContainer,
    Background,
    Netflix,
} from "../Components/Header/styles/styledHeader";
import {
    Container as FooterContainer,
    Title,
    Rows,
    Row,
    Link,
} from "../Components/Footer/styles/styledFooter";
import { SigninForm } from '../Components';

const SigninScreen = () => {
    return (
        <ScreenContainer>
            <HeaderContainer>
                <Background className="signin__background">
                    <Netflix src={logo} alt="Netflix" />
                    <SigninForm />
                </Background>
            </HeaderContainer>
            <FooterContainer className="sigin__footer">
                <Temp>
                    <Title>Questions? Contact us</Title>
                    <Rows>
                        <Row>
                            <Link>FAQ </Link>
                            <Link>Cookie Preferences </Link>
                        </Row>
                        <Row>
                            <Link>Help Center </Link>
                            <Link>Coroporate Information </Link>
                        </Row>
                        <Row>
                            <Link>Terms of Use </Link>
                        </Row>
                        <Row>
                            <Link>Privacy </Link>
                        </Row>
                    </Rows>
                </Temp>
            </FooterContainer>
        </ScreenContainer>
    );
};

export default SigninScreen;

const ScreenContainer = styled.div`
    position: relative;
    height: 115vh;
`;

const Temp = styled.div`
    max-width: 1100px;
    margin: auto;
`;
