import React from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import DetailContent from './DetailContent/DetailContent';
import DetailForm from './DetailForm/DetailForm';
import { StyledDetailBox } from './DetailBox.styles';

const DetailBox = () => {
    const { isEdit } = useAppSelector(state => state.user);

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