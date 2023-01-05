import React from 'react';
import { useSelector } from 'react-redux';
import DetailContent from './DetailContent/DetailContent';
import DetailForm from './DetailForm/DetailForm';
import { StyledDetailBox } from './StyledDetailBox';

const DetailBox = () => {
    const { isEdit } = useSelector((state) => state.user);

    return (
        <StyledDetailBox>
            {
                isEdit
                ? <DetailForm />
                : <DetailContent />
            }
        </StyledDetailBox>
    );
};

export default DetailBox;