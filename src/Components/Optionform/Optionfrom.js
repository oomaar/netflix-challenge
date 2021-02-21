import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import {
    Container,
    Title,
    Subcontainer,
    Form,
    InputContainer,
    Input,
    Lable,
    Span,
    Button,
    Chevron,
} from "./styles/styledOptionform";

const Optionfrom = () => {

    const getStarted = e => e.preventDefault();

    return (
        <Container>
            <Title>Ready to watch? Enter your email to create or restart your membership.</Title>
            <Subcontainer>
                <Form>
                    <InputContainer>
                        <Input
                            name="name"
                            type="text"
                            required
                        />
                        <Lable>
                            <Span>Email address</Span>
                        </Lable>
                    </InputContainer>

                    <Button onClick={getStarted}>
                        <Link to={ROUTES.SIGNUP} style={{ textDecoration: "none", color: "#fff" }}>
                            Get Started
                        <Chevron src="/images/icons/chevron-right.png" alt="right" />
                        </Link>
                    </Button>
                </Form>
            </Subcontainer>
        </Container>
    )
};

export default Optionfrom;
