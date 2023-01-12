import React from 'react';
import StyledSection from './Section.styles';
import { Routes, Route } from 'react-router-dom';
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