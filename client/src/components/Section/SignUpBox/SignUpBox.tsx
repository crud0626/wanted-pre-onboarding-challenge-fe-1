import React from 'react';
import { useForm } from 'hooks/common/useForm';
import { useSignUp } from 'hooks/queries/auth/useSignUp';
import { RoundTextField } from 'styles/common/RoundTextField';
import { SignUpSubmitBtn, StyledSignUpBox } from './SignUpBox.styles';
import { validationEmail, validationPassword } from 'constants/validation';
import ValidBox from './ValidBox/ValidBox';

const SignUpBox = () => {
    const { mutateAsync: fetchSignUp } = useSignUp();

    const { formData, handleChange } = useForm({
        initialState: {
            email: '',
            password: ''
        }
    });
    
    const isValidEmail = validationEmail.test(formData.email);
    const isValidPassword = validationPassword.test(formData.password);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (isValidEmail && isValidPassword) fetchSignUp(formData);
    }

    return (
        <StyledSignUpBox>
            <h2 className='title'>Sign Up</h2>
            <form className="form" onSubmit={onSubmit}>
                <div>
                    <RoundTextField 
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
                    <RoundTextField 
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