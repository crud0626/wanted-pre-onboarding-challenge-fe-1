import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'hooks/useForm';
import { useSignUp } from 'hooks/queries/auth/useSignUp';
import { StyledInputBox } from 'styles/StyledInputBox';
import { SignUpSubmitBtn, StyledSignUpBox } from './SignUpBox.styles';
import { validationEmail, validationPassword } from 'constants/validation';
import ValidBox from './ValidBox/ValidBox';

const SignUpBox = () => {
    const navigate = useNavigate();

    const onSubmit = async () => {
        if(isValidEmail && isValidPassword) {
            const res = await mutateAsync();
            if (res) navigate('/');
        }
    }

    const { formData, handleChange, handleSubmit } = useForm({
        initialState: {
            email: '',
            password: ''
        },
        onSubmit
    });

    const { mutateAsync } = useSignUp(formData);

    const isValidEmail = validationEmail.test(formData.email);
    const isValidPassword = validationPassword.test(formData.password);

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
                        isValid={isValidPassword}
                        displayText={"8자리 이상 입력해주세요."}
                    />
                </div>
                <SignUpSubmitBtn isValid={isValidEmail && isValidPassword}>
                    Sign Up
                </SignUpSubmitBtn>
            </form>
        </StyledSignUpBox>
    );
};

export default SignUpBox;