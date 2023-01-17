import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useForm } from 'hooks/useForm';
import { useLogin } from 'hooks/queries/auth/useLogin';
import { CHANGE_USER } from 'store/reducer/userSlice';
import { StyledLoginBox } from './LoginBox.styles';
import { StyledInputBox } from 'styles/StyledInputBox';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';

const LoginBox = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();

    const onSubmit = async (): Promise<void> => {
        const { data: resToken } = await loginRefetch();

        if(resToken) {
            dispatch(CHANGE_USER(resToken))
            navigate('/');
        };
    }

    const { formData, handleChange, handleSubmit } = useForm({
        initialState: {
            email: '',
            password: ''
        },
        onSubmit
    });

    const { refetch: loginRefetch } = useLogin(formData);

    return (
        <StyledLoginBox>
            <h2 className='title'>Log in</h2>
            <form className="form" onSubmit={handleSubmit}>
                <StyledInputBox 
                    type={"text"}
                    name={"email"}
                    placeholder="이메일을 입력해주세요." 
                    onChange={handleChange}
                />
                <StyledInputBox 
                    type={"password"}
                    name={"password"}
                    placeholder="패스워드를 입력해주세요."
                    onChange={handleChange}
                />
                <StyledSubmitBtn>
                    Log in
                </StyledSubmitBtn>
            </form>
            <button 
                className='signUpBtn' 
                onClick={() => navigate('/signup')}
            >
                회원 가입
            </button>
        </StyledLoginBox>
    );
};

export default LoginBox;