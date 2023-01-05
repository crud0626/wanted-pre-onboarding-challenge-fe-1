import React from 'react';
import { StyledDetailContent } from './StyledDetailContent';
import TitleBtn from '../TitleBtn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestDeleteItem } from 'store/reducer/todoSlice';
import { CHANGE_IS_EDIT, CLEAR_SELECTED_ITEM } from 'store/reducer/userSlice';
import deleteIcon from 'assets/delete_icon.png';
import editIcon from 'assets/edit_icon.png';

const DetailContent = () => {
    const dispatch = useDispatch(), navigate = useNavigate();
    const { token, selectedItem } = useSelector(state => state.user);

    const onEdit = () => {
        dispatch(CHANGE_IS_EDIT());
    }

    const onRemove = async () => {
        await dispatch(requestDeleteItem({ 
            token, 
            id: selectedItem.id 
        }))
        .then(({ payload }) => {
            console.log(payload);
            if(payload) {
                dispatch(CLEAR_SELECTED_ITEM());
                navigate('/');
            }
        });
    }

    return (
        selectedItem &&
        <StyledDetailContent>
            <div className='title_wrapper'>
                <h2 className='title'>
                    {selectedItem.title}
                </h2>
                <div className='btn_wrapper'>
                    <TitleBtn 
                        source={editIcon}
                        altName="edit"
                        onClick={onEdit}
                    />
                    <TitleBtn 
                        source={deleteIcon}
                        altName="delete"
                        onClick={onRemove}
                    />
                </div>
            </div>
            <div className='content'>
                <span>{selectedItem.content}</span>
            </div>
        </StyledDetailContent>
    );
};

export default DetailContent;