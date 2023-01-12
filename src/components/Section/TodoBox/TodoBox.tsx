import React from 'react';
import StyledTodoBox from './TodoBox.styles';
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