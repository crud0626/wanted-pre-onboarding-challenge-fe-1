import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { CHANGE_USER } from 'store/reducer/userSlice';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import { STORAGE_KEY } from 'constants/storage';

const Router = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();

    useEffect(() => {
        const storageToken = window.localStorage.getItem(STORAGE_KEY);
        
        if(!storageToken) {
            navigate('/login');
            return;
        }

        dispatch(CHANGE_USER(storageToken));
    }, []);
    
    return (
        <Routes>
            <Route 
                path='/'
                element={<HomePage />}
            />
            <Route 
                path='/login'
                element={<LoginPage />}
            />
            <Route 
                path='/signup'
                element={<SignUpPage />}
            />
        </Routes>
    );
};

export default Router;