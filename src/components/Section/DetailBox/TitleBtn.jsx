import React from 'react';
import { StyledTitleBtn } from './StyledTitleBtn';

const TitleBtn = ({ type, source, altName, onClick }) => {
    // onClick 추가
    return (
        <StyledTitleBtn type={type}>
            <img 
                src={source} 
                alt={altName}
                onClick={onClick}
            />
        </StyledTitleBtn>
    );
};

export default TitleBtn;