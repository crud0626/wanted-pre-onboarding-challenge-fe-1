import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailBox from 'components/Section/DetailBox/DetailBox';
import TodoBox from 'components/Section/TodoBox/TodoBox';
import { getTodoItems } from 'store/reducer/todoSlice';
import { CHANGE_SELECTED_ITEM, LOGIN } from 'store/reducer/userSlice';
import { useAppDispatch } from 'store/store';

const Home = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();

    useEffect(() => {
        const storageToken: null | string = window.localStorage.getItem("mtd-uid");

        if(!storageToken) {
            navigate('/login');
            return;
        }

        dispatch(LOGIN(storageToken));
        dispatch(getTodoItems({ token: storageToken }))
        .then(({ payload }) => {
            // URL직접 접근 시 바로 아이템의 디테일이 보여질 수 있도록 처리
            const queryString = window.location.search.match(/(?<=\?item=).+/);

            if(Array.isArray(payload) && payload.length && queryString?.length) {
                const targetId = queryString[0];

                const [target] = payload.filter(item => item.id === targetId);
                if(target) dispatch(CHANGE_SELECTED_ITEM(target));
            }
        });
    }, []);

    return (
        <>
            <TodoBox />
            <DetailBox />
        </>
    );
};

export default Home;