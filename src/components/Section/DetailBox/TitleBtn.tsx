import React from 'react';
import { StyledTitleBtn } from './StyledTitleBtn';

interface IProps {
    source: string;
    altName: string;
}

const TitleBtn = ({ source, altName }: IProps) => {
    // onClick 추가
    return (
        <StyledTitleBtn>
            <img 
                src={source} 
                alt={altName}
            />
        </StyledTitleBtn>
    );
};

export default TitleBtn;