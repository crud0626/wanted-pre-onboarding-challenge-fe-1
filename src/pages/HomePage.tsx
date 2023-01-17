import React, { useEffect } from 'react';
import { CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { GET } from 'store/reducer/todoSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useGetTodos } from 'hooks/queries/todo/useGetTodos';
import DetailBox from 'components/Section/DetailBox/DetailBox';
import TodoBox from 'components/Section/TodoBox/TodoBox';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector(state => state.user);
    const { refetch: todosRefetch } = useGetTodos(token);

    const fetchTodos = async () => {
        const { data: todos } = await todosRefetch();

        if (!todos) return;

        dispatch(GET(todos));

        const queryString = window.location.search.match(/(?<=\?item=).+/);
        if(queryString) {
            const targetId = queryString[0];

            const target = todos.filter(todo => todo.id === targetId)[0] || null;
            if (target) dispatch(CHANGE_SELECTED_ITEM(target));
        }
    }

    useEffect(() => {
        if (token) fetchTodos();
    }, [token]);

    return (
        <>
            <TodoBox />
            <DetailBox />
        </>
    );
};

export default HomePage;