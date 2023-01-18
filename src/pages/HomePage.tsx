import React from 'react';
import DetailBox from 'components/Section/DetailBox/DetailBox';
import TodoBox from 'components/Section/TodoBox/TodoBox';

const HomePage = () => {
    return (
        <>
            <TodoBox />
            <DetailBox />
        </>
    );
};

export default HomePage;