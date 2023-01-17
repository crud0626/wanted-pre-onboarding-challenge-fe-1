import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DELETE } from 'store/reducer/todoSlice';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useDeleteTodo } from 'hooks/queries/todo/useDeleteTodo';
import { StyledDetailContent } from './DetailContent.styles';
import TitleBtn from '../DetailBtn';
import deleteIcon from 'assets/delete-icon.png';
import editIcon from 'assets/edit-icon.png';

const DetailContent = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { token, selectedItem } = useAppSelector(state => state.user);

    const onEdit = useCallback((): void => {
        dispatch(CHANGE_IS_EDIT(null));
    }, [dispatch]);

    const { mutateAsync: fetchRemoveTodo } = useDeleteTodo();

    const onRemove = async (): Promise<void> => {
        if(token && selectedItem) {
            const deleteItemId = await fetchRemoveTodo({ token, id: selectedItem.id});

            if(deleteItemId) {
                dispatch(CHANGE_SELECTED_ITEM(null));
                dispatch(DELETE(deleteItemId));
                navigate('/');
            }
        }
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