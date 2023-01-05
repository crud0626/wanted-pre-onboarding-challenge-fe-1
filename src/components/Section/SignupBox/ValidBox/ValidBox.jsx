import React from 'react';
import checkIcon from 'assets/check_icon.png';
import { StyledValidBox } from './StyledValidBox';

const ValidBox = ({ isValid, displayText }) => {
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