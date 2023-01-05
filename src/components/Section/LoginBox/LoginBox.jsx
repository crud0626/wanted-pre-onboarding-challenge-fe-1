import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from 'reducer/userSlice';
import { StyledInputBox } from 'styles/StyledInputBox';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { StyledLoginBox } from './StyledLoginBox';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
    const dispatch = useDispatch(), navigate = useNavigate();
    const { token } = useSelector(state => state.user);
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target;

        dispatch(requestLogin(
            {
                email: email.value,
                password: password.value
            }
        ));
    }

    useEffect(() => {
        if(token) {
            window.localStorage.setItem("mtd-uid", token);
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
                />
                <StyledInputBox 
                    type={"password"}
                    name={"password"}
                    placeholder="패스워드를 입력해주세요."
                />
                <StyledSubmitBtn>
                    Log in
                </StyledSubmitBtn>
            </form>
            {/* 회원가입 버튼 추가 */}
        </StyledLoginBox>
    );
};

export default LoginBox;