// {/* <div className="optionForm">
// <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
// <div className="optionForm__input">
//     <form className="optionForm__inputForm">
//         <div className="optionForm__inputContainer">
//             <input
//                 className="optionForm__inputInput"
//                 type="email"
//             />
//             <label className="optionForm__input__label">
//                 <span className="optionForm__label__span">Email address</span>
//             </label>
//         </div>
        
//         <button onClick={signupStatus} className="optionForm__getStarted">
//             Get Started
//             <img src="/images/icons/chevron-right.png" alt="" />
//         </button>
//     </form>
// </div>
// </div> */}

import React from 'react';
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
import "./styles/styledOptionform.css";

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
                    
                    <Button type="submit" onClick={getStarted}>
                        Get Started
                        <Chevron src="/images/icons/chevron-right.png" alt="right" />
                    </Button>
                </Form>
            </Subcontainer>
        </Container>
    )
};

export default Optionfrom;
