import React from 'react';
import StyledTodoBox from './StyledTodoBox';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter';

const TodoBox = () => {
    return (
        <StyledTodoBox>
            <TodoList />
            <TodoFooter />
        </StyledTodoBox>
    );
};

export default TodoBox;