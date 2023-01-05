import React from 'react';
import { StyledTitleBtn } from './StyledTitleBtn';

const TitleBtn = ({ type, source, altName, onClick }) => {
    return (
        <StyledTitleBtn 
            type={type} 
            onClick={onClick}
        >
            <img 
                src={source} 
                alt={altName}
            />
        </StyledTitleBtn>
    );
};

export default TitleBtn;