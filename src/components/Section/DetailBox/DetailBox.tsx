import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import DetailContent from './DetailContent/DetailContent';
import DetailForm from './DetailForm/DetailForm';
import { StyledDetailBox } from './DetailBox.styles';

const DetailBox = () => {
    const { isEdit } = useSelector((state: RootState) => state.user);

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