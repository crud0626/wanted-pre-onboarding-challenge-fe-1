import React from 'react';
import StyledTodoItem from './StyledTodoItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { ITodoItem } from 'types/todo.type';

interface IProps {
    item: ITodoItem;
}

const TodoItem = ({ item }: IProps) => {
    const dispatch = useDispatch(), navigate = useNavigate();
    const handleClick = () => {
        dispatch(CHANGE_SELECTED_ITEM(item));
        dispatch(CHANGE_IS_EDIT(false));
        navigate(`?item=${item.id}`);
    }

    return (
        <StyledTodoItem onClick={handleClick}>
            {item.title || ""}
        </StyledTodoItem>
    );
};

export default TodoItem;