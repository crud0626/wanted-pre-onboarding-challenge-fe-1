import React from 'react';
import StyledTodoList from './StyledTodoList';
import TodoItem from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const { items }= useSelector(state => state.todo);
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