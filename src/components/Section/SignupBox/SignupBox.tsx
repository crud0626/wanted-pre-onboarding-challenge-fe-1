import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestSignUp } from 'store/reducer/userSlice';
import { StyledInputBox } from 'styles/StyledInputBox';
import { SignUpSubmitBtn, StyledSignupBox } from './StyledSignupBox';
import { emailRegex, passwordRegex } from 'utils/regex';
import ValidBox from './ValidBox/ValidBox';
import { IUserForm } from 'types/auth/auth.type';
import { useAppDispatch } from 'store/store';

const SignupBox = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();

    const [formData, setFormData] = useState<IUserForm>({
        email: '',
        password: ''
    });
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPW, setIsValidPW] = useState(false);

    const checkEmailFormat = () => {
        setIsValidEmail(formData.email.match(emailRegex) ? true : false);
    }

    const checkPasswordFormat = () => {
        setIsValidPW(formData.password.match(passwordRegex) ? true : false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(isValidEmail && isValidPW) {
            dispatch(requestSignUp(formData))
            .then(({ payload }) => {
                if(payload && typeof payload === 'string') {
                    window.localStorage.setItem("mtd-uid", payload);
                    navigate('/');
                }
            })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if(name === "email") checkEmailFormat();
        if(name === "password") checkPasswordFormat();
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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