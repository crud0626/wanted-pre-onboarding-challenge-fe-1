import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import StyledTodoList from './TodoList.styles';
import TodoItem from './TodoItem/TodoItem';

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