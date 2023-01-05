import React, { useEffect } from 'react';
import StyledSection from './StyledSection';
import { useDispatch } from 'react-redux';
import { LOGIN } from 'reducer/userSlice';
import { getTodoItems } from 'reducer/todoSlice';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';

const Section = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const storageToken = window.localStorage.getItem("mtd-uid");
        if(storageToken) {
            dispatch(LOGIN(storageToken));
            dispatch(getTodoItems({ token: storageToken }));
            return;
        }
    }, []);

    return (
        <StyledSection>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/login'
                    element={<Login />}
                />
                <Route 
                    path='/signup'
                    element={<SignUp />}
                />
            </Routes>
        </StyledSection>
    );
};

export default Section;