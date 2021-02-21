import React from 'react';
import styled from "styled-components/macro";
import logo from "../logo.svg";
import {
    Container,
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

const SigninScreen = () => {
    return (
        <ScreenContainer>
            <Container>
                <Background className="signin__background">
                    <Netflix src={logo} alt="Netflix" />
                </Background>
            </Container>

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

const ScreenContainer = styled.div``;

const Temp = styled.div`
    max-width: 1100px;
    margin: auto;
`;
