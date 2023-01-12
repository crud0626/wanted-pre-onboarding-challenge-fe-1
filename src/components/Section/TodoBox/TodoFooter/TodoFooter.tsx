import React from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_IS_EDIT, CLEAR_SELECTED_ITEM } from 'store/reducer/userSlice';
import { StyledFooter } from './TodoFooter.styles';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';

const TodoFooter = () => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(CHANGE_IS_EDIT(true));
        dispatch(CLEAR_SELECTED_ITEM());
    }

    return (
        <StyledFooter>
            <StyledSubmitBtn onClick={handleClick}>
                New
            </StyledSubmitBtn>
        </StyledFooter>
    );
};

export default TodoFooter;