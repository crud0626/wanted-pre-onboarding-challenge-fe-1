import React, { useCallback } from 'react';
import { StyledTodoBox, TodoFooter } from './TodoBox.styles';
import TodoList from './TodoList/TodoList';
import { useAppDispatch } from 'hooks/common/useAppDispatch';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { RoundSubmitBtn } from 'styles/common/RoundSubmitBtn';


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
                <RoundSubmitBtn onClick={handleClick}>
                    New
                </RoundSubmitBtn>
            </TodoFooter>
        </StyledTodoBox>
    );
};

export default TodoBox;