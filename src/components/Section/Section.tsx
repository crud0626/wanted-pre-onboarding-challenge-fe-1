import React from 'react';
import StyledSection from './StyledSection';
import TodoBox from './TodoBox/TodoBox';
import DetailBox from './DetailBox/DetailBox';
import SignupBox from './SignupBox/SignupBox';
import LoginBox from './LoginBox/LoginBox';

const Section = () => {
    return (
        <StyledSection>
            <TodoBox />
            <DetailBox />
        </StyledSection>
    );
};

export default Section;