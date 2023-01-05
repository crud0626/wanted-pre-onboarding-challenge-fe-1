import React from 'react';
import TitleBtn from '../TitleBtn';
import completeIcon from 'assets/complete_icon.png';
import { StyledDetailForm } from './StyledDetailForm';

const DetailForm = () => {
    // action 컨트롤
    return (
        <StyledDetailForm>
            <div className='title_wrapper'>
                <input 
                    type="text" 
                    name="title" 
                />
                <div className='btn_wrapper'>
                    <TitleBtn
                        source={completeIcon}
                        altName="edit"
                    />
                </div>
            </div>
            <div className='content'>
                <textarea name="content"></textarea>
            </div>
        </StyledDetailForm>
    );
};

export default DetailForm;