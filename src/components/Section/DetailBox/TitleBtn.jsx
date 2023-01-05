import React from 'react';
import { StyledTitleBtn } from './StyledTitleBtn';

const TitleBtn = ({ type, source, altName }) => {
    // onClick 추가
    return (
        <StyledTitleBtn type={type}>
            <img 
                src={source} 
                alt={altName}
            />
        </StyledTitleBtn>
    );
};

export default TitleBtn;