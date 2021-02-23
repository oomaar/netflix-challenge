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
} from '../SigninForm/styles/styledSigninForm';

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(""); 
    const history = useHistory();

    const isInvalid = firstName === '' || passwordRef === '' || emailRef === '';

    const handleSignup = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
        .then(authUser => {
            // console.log("🚀 User", authUser);
            authUser.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            });
        })
        .then(() => {
            history.push(ROUTES.BROWSE);
        })
        .catch(err => setError(err.message));
    }
    

    return (
        <Container>
            <Signinform 
            onSubmit={handleSignup} 
            className="signin__form"
            method="POST"
            >
                <Title>Sign Up</Title>
                {error && <Error>{error}</Error>}
                <InputContainer className="signin__inputContainer">
                    <Input
                        value={firstName}
                        onChange={({target}) => setFirstName(target.value)}
                        autoComplete="off"
                        className="signin__input"
                        name="name"
                        type="text"
                        required
                    />
                    <Label className="signin__label">
                        <Span className="signin__span">First Name</Span>
                    </Label>
                </InputContainer>

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

                <Submit disabled={isInvalid} type="submit">Sign up</Submit>

                <Ptag>Have an account? <Link to={ROUTES.SIGNIN}>Sign in now.</Link></Ptag>
                <Text>This page is protected by Google reCAPTCHA to ensure you're not a bot. <BlueText>Learn more.</BlueText></Text>
            </Signinform>
        </Container>
    );
};

export default SignupForm;