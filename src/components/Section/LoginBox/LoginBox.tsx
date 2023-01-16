import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useForm } from 'hooks/useForm';
import { fetchGetTodos } from 'store/reducer/todoSlice';
import { fetchLogin } from 'store/reducer/userSlice';
import { StyledLoginBox } from './LoginBox.styles';
import { StyledInputBox } from 'styles/StyledInputBox';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { STORAGE_KEY } from 'constants/storage';

const LoginBox = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { token } = useAppSelector(state => state.user);
    const { formData, handleChange, handleSubmit } = useForm({
        initialState: {
            email: '',
            password: ''
        },
        onSubmit: () => dispatch(fetchLogin(formData))
    });

    // ????? 얘가 왜 여기있지? 로그인이랑 연동하는게 더 낫지 않을까?
    useEffect(() => {
        if(token) {
            window.localStorage.setItem(STORAGE_KEY, token);
            dispatch(fetchGetTodos({ token }));
            navigate('/');
        }
    });

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