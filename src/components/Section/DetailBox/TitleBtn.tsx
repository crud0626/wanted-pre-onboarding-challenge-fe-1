import React from 'react';
import { ButtonTypeAttribute, StyledTitleBtn } from './StyledTitleBtn';

interface IProps {
    type?: ButtonTypeAttribute;
    source: string;
    altName: string;
    onClick?: () => void;
}

const TitleBtn = ({ type, source, altName, onClick }: IProps) => {
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