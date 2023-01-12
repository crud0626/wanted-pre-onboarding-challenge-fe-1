import React from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import StyledTodoList from './TodoList.styles';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {
    const { items } = useAppSelector(state => state.todo);
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