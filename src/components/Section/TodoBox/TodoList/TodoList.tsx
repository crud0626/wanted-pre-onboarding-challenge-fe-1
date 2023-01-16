import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { StyledTodoList, TodoItem } from './TodoList.styles';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { ITodoItem } from 'types/todo.type';
import { queryWithId } from 'constants/query';

const TodoList = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { items } = useAppSelector(state => state.todo);

    const handleClick = (targetItem: ITodoItem) => {
        dispatch(CHANGE_SELECTED_ITEM(targetItem));
        dispatch(CHANGE_IS_EDIT(false));
        navigate(`${queryWithId}${targetItem.id}`);
    }
    
    return (
        <StyledTodoList>
            {
                items &&
                items.map(item => 
                    <TodoItem
                        key={item.id}
                        onClick={() => handleClick(item)}
                    >
                        {item.title || ""}
                    </TodoItem>
                )
            }
        </StyledTodoList>
    );
};

export default TodoList;