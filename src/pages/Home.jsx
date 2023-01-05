import DetailBox from 'components/Section/DetailBox/DetailBox';
import TodoBox from 'components/Section/TodoBox/TodoBox';
import React from 'react';

const Home = () => {
    return (
        <>
            <TodoBox />
            <DetailBox />
        </>
    );
};

export default Home;