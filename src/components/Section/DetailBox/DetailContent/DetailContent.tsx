import React from 'react';
import { StyledDetailContent } from './StyledDetailContent';

const DetailContent = () => {
    // props: isEdit, description
    return (
        <StyledDetailContent>
            <span className='content'>
                {"Description..."}
            </span>
        </StyledDetailContent>
    );
};

export default DetailContent;