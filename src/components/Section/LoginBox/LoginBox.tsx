import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from 'store/store';
import { getTodoItems } from 'store/reducer/todoSlice';
import { requestLogin } from 'store/reducer/userSlice';
import { StyledInputBox } from 'styles/StyledInputBox';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { StyledLoginBox } from './LoginBox.styles';
import { IUserForm } from 'types/auth.type';
import { STORAGE_KEY } from 'constants/storage';

const LoginBox = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { token } = useSelector((state: RootState) => state.user);

    const [formData, setFormData] = useState<IUserForm>({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        dispatch(requestLogin(formData));
    }

    const moveSignUp = () => {
        navigate('/signup');
    }

    useEffect(() => {
        if(token) {
            window.localStorage.setItem(STORAGE_KEY, token);
            dispatch(getTodoItems({ token }));
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
            <button className='signUpBtn' onClick={moveSignUp}>회원 가입</button>
        </StyledLoginBox>
    );
};

export default LoginBox;