import React from 'react';
import { StyledDetailContent } from './StyledDetailContent';
import TitleBtn from '../TitleBtn';
import { useDispatch, useSelector } from 'react-redux';
import { requestDeleteItem } from 'store/reducer/todoSlice';
import deleteIcon from 'assets/delete_icon.png';
import editIcon from 'assets/edit_icon.png';
import { CHANGE_IS_EDIT, CLEAR_SELECTED_ITEM } from 'store/reducer/userSlice';

const DetailContent = () => {
    const dispatch = useDispatch();
    const { token, selectedItem } = useSelector(state => state.user);

    const onEdit = async () => {
        dispatch(CHANGE_IS_EDIT());
    }

    const onRemove = async () => {
        await dispatch(requestDeleteItem(token, selectedItem.id))
        .then(dispatch(CLEAR_SELECTED_ITEM()));
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
                        onClick={onRemove}
                    />
                    <TitleBtn 
                        source={deleteIcon}
                        altName="delete"
                        onClick={onEdit}
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