import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DetailBox from 'components/Section/DetailBox/DetailBox';
import TodoBox from 'components/Section/TodoBox/TodoBox';
import { getTodoItems } from 'store/reducer/todoSlice';
import { CHANGE_SELECTED_ITEM, LOGIN } from 'store/reducer/userSlice';

const Home = () => {
    const dispatch = useDispatch(), navigate = useNavigate();

    useEffect(() => {
        const storageToken = window.localStorage.getItem("mtd-uid");
        if(storageToken) {
            dispatch(LOGIN(storageToken));
            dispatch(getTodoItems({ token: storageToken }))
            // URL직접 접근 시 바로 아이템의 디테일이 보여질 수 있도록 처리
            .then(({ payload }) => {
                const targetId = window.location.search.match(/(?<=\?item=).+/)[0];
                if(targetId) {
                    const [target] = payload.filter(item => item.id === targetId);
                    if(target) dispatch(CHANGE_SELECTED_ITEM(target));
                }
            });
            return;
        }

        // 토큰이 없다면 login 페이지로 이동
        navigate('/login');
    }, []);

    return (
        <>
            <TodoBox />
            <DetailBox />
        </>
    );
};

export default Home;