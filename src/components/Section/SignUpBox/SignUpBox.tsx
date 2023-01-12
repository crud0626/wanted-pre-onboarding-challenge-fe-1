import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { fetchSignUp } from 'store/reducer/userSlice';
import { StyledInputBox } from 'styles/StyledInputBox';
import { SignUpSubmitBtn, StyledSignUpBox } from './SignUpBox.styles';
import { validationEmail, validationPassword } from 'constants/validation';
import ValidBox from './ValidBox/ValidBox';
import { IUserForm } from 'types/auth.type';
import { STORAGE_KEY } from 'constants/storage';

const SignUpBox = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();

    const [formData, setFormData] = useState<IUserForm>({
        email: '',
        password: ''
    });
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPW, setIsValidPW] = useState(false);

    const checkEmailFormat = () => {
        setIsValidEmail(formData.email.match(validationEmail) ? true : false);
    }

    const checkPasswordFormat = () => {
        setIsValidPW(formData.password.match(validationPassword) ? true : false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(isValidEmail && isValidPW) {
            dispatch(fetchSignUp(formData))
            .then(({ payload }) => {
                if(payload && typeof payload === 'string') {
                    window.localStorage.setItem(STORAGE_KEY, payload);
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
        <StyledSignUpBox>
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
        </StyledSignUpBox>
    );
};

export default SignUpBox;