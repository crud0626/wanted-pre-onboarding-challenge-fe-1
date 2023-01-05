import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestSignUp } from 'store/reducer/userSlice';
import { StyledInputBox } from 'styles/StyledInputBox';
import { SignUpSubmitBtn, StyledSignupBox } from './StyledSignupBox';
import { emailRegex, passwordRegex } from 'utils/regex';
import ValidBox from './ValidBox/ValidBox';

const SignupBox = () => {
    const dispatch = useDispatch(), navigate = useNavigate();
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPW, setIsValidPW] = useState(false);

    const checkEmailFormat = ({ target }) => {
        setIsValidEmail(target.value.match(emailRegex) ? true : false);
    }

    const checkPasswordFormat = ({ target }) => {
        setIsValidPW(target.value.match(passwordRegex) ? true : false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(isValidEmail && isValidPW) {
            const { email, password } = event.target;
            const userData = {
                email: email.value,
                password: password.value
            };

            await dispatch(requestSignUp(userData))
            .then(({ payload }) => {
                if(payload) {
                    window.localStorage.setItem("mtd-uid", payload);
                    navigate('/');
                }
            });
        }
    }

    return (
        <StyledSignupBox>
            <h2 className='title'>Sign Up</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <StyledInputBox 
                        type={"text"}
                        name={"email"}
                        placeholder={"이메일을 입력해주세요." }
                        onKeyUp={checkEmailFormat}
                    />
                    <ValidBox 
                        isValid={isValidEmail}
                        displayText={"이메일 형식으로 입력해주세요."}
                    />
                </div>
                <div>
                    <StyledInputBox 
                        type={"password"}
                        name={"password"}
                        placeholder={"패스워드를 입력해주세요."}
                        onKeyUp={checkPasswordFormat}
                    />
                    <ValidBox 
                        isValid={isValidPW}
                        displayText={"8자리 이상 입력해주세요."}
                    />
                </div>
                <SignUpSubmitBtn isValid={isValidEmail && isValidPW}>
                    Sign Up
                </SignUpSubmitBtn>
            </form>
        </StyledSignupBox>
    );
};

export default SignupBox;