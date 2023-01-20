import React from 'react';
import { DetailBtnProps, StyledDetailBtn } from './DetailBtn.styles';

interface IProps extends DetailBtnProps {
    source: string;
    altName: string;
    onClick?: () => void;
}

const DetailBtn = ({ type, source, altName, onClick }: IProps) => {
    return (
        <StyledDetailBtn 
            type={type} 
            onClick={onClick}
        >
            <img 
                src={source} 
                alt={altName}
            />
        </StyledDetailBtn>
    );
};

export default DetailBtn;