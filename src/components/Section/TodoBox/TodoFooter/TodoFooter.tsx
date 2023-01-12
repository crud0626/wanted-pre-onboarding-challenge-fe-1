import React from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { StyledFooter } from './TodoFooter.styles';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';

const TodoFooter = () => {
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        dispatch(CHANGE_IS_EDIT(true));
        dispatch(CHANGE_SELECTED_ITEM(null));
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