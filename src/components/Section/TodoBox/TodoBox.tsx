import React, { useCallback } from 'react';
import { StyledTodoBox, TodoFooter } from './TodoBox.styles';
import TodoList from './TodoList/TodoList';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';

const TodoBox = () => {
    const dispatch = useAppDispatch();
    
    const handleClick = useCallback((): void => {
        dispatch(CHANGE_IS_EDIT(null));
        dispatch(CHANGE_SELECTED_ITEM(null));
    }, [dispatch]);

    return (
        <StyledTodoBox>
            <TodoList />
            <TodoFooter>
                <StyledSubmitBtn onClick={handleClick}>
                    New
                </StyledSubmitBtn>
            </TodoFooter>
        </StyledTodoBox>
    );
};

export default TodoBox;