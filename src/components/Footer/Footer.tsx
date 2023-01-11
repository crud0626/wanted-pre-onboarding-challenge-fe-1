import React from 'react';
import StyledFooter from './StyledFooter';
import githubLogo from 'assets/github_logo.png';

const Footer = () => {
    return (
        <StyledFooter>
            <span>Copyright 2022. CRUD0626 All rights reserved.</span>
            <a 
                href='https://github.com/crud0626'
                target='_blank'
                rel='noopener noreferrer'
                className='btnWrapper'
            >
                <img src={githubLogo} alt="github" />
            </a>
        </StyledFooter>
    );
};

export default Footer;