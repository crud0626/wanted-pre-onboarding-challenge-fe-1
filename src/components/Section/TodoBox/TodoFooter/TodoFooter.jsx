import React from 'react';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { StyledFooter } from './StyledTodoFooter';
import { useDispatch } from 'react-redux';
import { CHANGE_IS_EDIT } from 'reducer/userSlice';

const TodoFooter = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(CHANGE_IS_EDIT(true));
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