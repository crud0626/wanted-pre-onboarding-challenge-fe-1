import React from 'react';
import StyledTodoList from './StyledTodoList';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {
    // 아이템 관련 상태 가져와야함.
    return (
        <StyledTodoList>
            <TodoItem />
        </StyledTodoList>
    );
};

export default TodoList;