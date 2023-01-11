import React from 'react';
import StyledSection from './StyledSection';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';

const Section = () => {
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