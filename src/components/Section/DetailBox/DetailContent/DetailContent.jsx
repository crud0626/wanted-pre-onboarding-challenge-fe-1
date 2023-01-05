import React from 'react';
import { StyledDetailContent } from './StyledDetailContent';
import TitleBtn from '../TitleBtn';
import deleteIcon from 'assets/delete_icon.png';
import editIcon from 'assets/edit_icon.png';

// props: isEdit, data
const DetailContent = () => {
    return (
        // 얘 없애도 될거같은데? 그럼 스타일은 어떡하냐 그대로 두 개로 나눠야 하나?
        <StyledDetailContent>
            {/* title */}
            <div className='title_wrapper'>
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
            </div>
            <div className='content'>
                <span>{"Description.."}</span>
            </div>
        </StyledDetailContent>
    );
};

export default DetailContent;