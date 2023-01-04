import React from 'react';
import DetailContent from './DetailContent/DetailContent';
import DetailTitle from './DetailTitle/DetailTitle';
import { StyledDetailBox } from './StyledDetailBox';

const DetailBox = () => {
    // isEdit state 필요
    return (
        <StyledDetailBox>
            {/* 
                조건부로 해서 선택된게 없는 경우 투두리스트를 선택해주세요! 가 나오도록
                아마 스타일도 세팅해야될거임 state에 따라서
            */}
            <DetailTitle />
            <DetailContent />
        </StyledDetailBox>
    );
};

export default DetailBox;