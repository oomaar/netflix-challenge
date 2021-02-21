import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { auth } from '../../lib/firebase';
import {
    Form as Signinform,
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
    Error,
} from './styles/styledSigninForm';

const SigninForm = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(""); 
    const history = useHistory();

    const isInvalid = passwordRef === '' || emailRef === '';

    const handleSignin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(authUser => {
            // console.log("🚀 User", authUser);
            history.push(ROUTES.BROWSE);
        })
            .catch(err => setError(err.message));
    }

    return (
        <Container>
            <Signinform
                onSubmit={handleSignin}
                method="POST"
                className="signin__form">
                <Title>Sign In</Title>
                {error && <Error>{error}</Error>}
                <InputContainer className="signin__inputContainer">
                    <Input
                        ref={emailRef}
                        autoComplete="off"
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
                        ref={passwordRef}
                        autoComplete="off"
                        className="signin__input"
                        name="name"
                        type="password"
                        required
                    />
                    <Label className="signin__label">
                        <Span className="signin__span">Password</Span>
                    </Label>
                </InputContainer>

                <Submit disabled={isInvalid} type="submit">Sign In</Submit>

                <Ptag>New to Netflix? <Link to={ROUTES.SIGNUP}>Sign up now.</Link></Ptag>
                <Text>This page is protected by Google reCAPTCHA to ensure you're not a bot. <BlueText>Learn more.</BlueText></Text>
            </Signinform>
        </Container>
    );
};

export default SigninForm;
