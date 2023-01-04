import React from 'react';
import StyledSection from './StyledSection';
import TodoBox from './TodoBox/TodoBox';
import DetailBox from './DetailBox/DetailBox';

const Section = () => {
    return (
        <StyledSection>
            <TodoBox />
            <DetailBox />
        </StyledSection>
    );
};

export default Section;