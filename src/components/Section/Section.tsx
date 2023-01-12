import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StyledSection from './Section.styles';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LoginPage';

const Section = () => {
    return (
        <StyledSection>
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
        </StyledSection>
    );
};

export default Section;