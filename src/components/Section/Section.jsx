import React, { useEffect } from 'react';
import StyledSection from './StyledSection';
import TodoBox from './TodoBox/TodoBox';
import DetailBox from './DetailBox/DetailBox';
import SignupBox from './SignupBox/SignupBox';
import LoginBox from './LoginBox/LoginBox';
import { useDispatch } from 'react-redux';
import { LOGIN } from 'reducer/userSlice';
import { getTodoItems } from 'reducer/todoSlice';

const Section = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const storageToken = window.localStorage.getItem("mtd-uid");
        if(storageToken) {
            dispatch(LOGIN(storageToken));
            dispatch(getTodoItems({ token: storageToken }));
            return;
        }
        // 로그인화면으로 이동
    }, []);

    return (
        <StyledSection>
            <TodoBox />
            <DetailBox />
        </StyledSection>
    );
};

export default Section;