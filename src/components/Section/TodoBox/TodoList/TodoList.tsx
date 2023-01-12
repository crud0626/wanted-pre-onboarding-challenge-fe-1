import React from 'react';
import StyledTodoList from './TodoList.styles';
import TodoItem from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const TodoList = () => {
    const { items }= useSelector((state: RootState) => state.todo);
    return (
        <StyledTodoList>
            {
                items &&
                items.map(item => 
                    <TodoItem 
                        key={item.id}
                        item={item}
                    />
                )
            }
        </StyledTodoList>
    );
};

export default TodoList;