import React from 'react';
import * as ROUTES from "../../constants/routes";
import {
    Form as SigninForm,
    InputContainer,
    Input,
    Label,
    Span,
} from "../Optionform/styles/styledOptionform";
import {
    Container,
    Title,
    Submit,
    Link,
    Ptag,
    Text,
    BlueText,
} from './styles/styledForm';

const Form = () => {
    return (
        <Container>
            <SigninForm className="signin__form">
                <Title>Sign In</Title>
                <InputContainer className="signin__inputContainer">
                    <Input
                        className="signin__input"
                        name="name"
                        type="text"
                        required
                    />
                    <Label className="signin__label">
                        <Span className="signin__span">Email address</Span>
                    </Label>

                </InputContainer>
                <InputContainer className="signin__inputContainer">
                    <Input
                        className="signin__input"
                        name="name"
                        type="password"
                        required
                    />
                    <Label className="signin__label">
                        <Span className="signin__span">Password</Span>
                    </Label>
                </InputContainer>

                <Submit>Sign In</Submit>

                <Ptag>New to Netflix? <Link to={ROUTES.SIGNUP}>Sign up now.</Link></Ptag>
                <Text>This page is protected by Google reCAPTCHA to ensure you're not a bot. <BlueText>Learn more.</BlueText></Text>
            </SigninForm>
        </Container>
    );
};

export default Form;




