import React from 'react';
import { DetailTitleWrapper } from './StyledDetailTitle';
import TitleBtn from './TitleBtn';
import deleteIcon from 'assets/delete_icon.png';
import editIcon from 'assets/edit_icon.png';

const DetailTitle = () => {
    // title state
    return (
        <DetailTitleWrapper>
            <h2 className='title'>
                {"Title"}
            </h2>
            {/* Btns */}
            <div className='btn_wrapper'>
                <TitleBtn 
                    source={editIcon}
                    altName="edit"
                />
                <TitleBtn 
                    source={deleteIcon}
                    altName="delete"
                />
            </div>
        </DetailTitleWrapper>
    );
};

export default DetailTitle;