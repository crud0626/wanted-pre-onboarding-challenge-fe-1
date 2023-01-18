import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useGetTodos } from 'hooks/queries/todo/useGetTodos';
import { StyledTodoList, TodoItem } from './TodoList.styles';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { ITodoItem } from 'types/todo.type';
import { queryWithId } from 'constants/query';

const TodoList = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { token } = useAppSelector(state => state.user); 

    const { data: todos, refetch: todosRefetch } = useGetTodos({ token });

    const fetchTodos = async () => {
        const { data: todos } = await todosRefetch();

        if (!todos) return;

        const queryString = window.location.search.match(/(?<=\?item=).+/);
        if(queryString) {
            const targetId = queryString[0];

            const target = todos.filter(todo => todo.id === targetId)[0] || null;
            if (target) dispatch(CHANGE_SELECTED_ITEM(target));
        }
    }

    const handleClick = (targetItem: ITodoItem) => {
        dispatch(CHANGE_SELECTED_ITEM(targetItem));
        dispatch(CHANGE_IS_EDIT(false));
        navigate(`${queryWithId}${targetItem.id}`);
    }

    useEffect(() => {
        if (token) fetchTodos();
    }, [token]);
    
    return (
        <StyledTodoList>
            {
                todos &&
                todos.map(todo => 
                    <TodoItem
                        key={todo.id}
                        onClick={() => handleClick(todo)}
                    >
                        {todo.title || ""}
                    </TodoItem>
                )
            }
        </StyledTodoList>
    );
};

export default TodoList;