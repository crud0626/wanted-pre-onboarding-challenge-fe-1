import React from 'react';
import { StyledValidBox } from './ValidBox.styles';
import checkIcon from 'assets/check-icon.png';

interface IProps {
    isValid: boolean;
    displayText: string;
}

const ValidBox = ({ isValid, displayText }: IProps) => {
    return (
        <StyledValidBox isValid={isValid}>
            <img 
                src={checkIcon}
                className="valid_icon"
                alt="check"
            />
            <span className='valid_text'>
                { displayText }
            </span>
        </StyledValidBox>
    );
};

export default ValidBox;