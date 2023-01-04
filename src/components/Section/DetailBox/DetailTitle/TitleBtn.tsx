import React from 'react';
import { StyledTitleBtn } from './StyledDetailTitle';

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