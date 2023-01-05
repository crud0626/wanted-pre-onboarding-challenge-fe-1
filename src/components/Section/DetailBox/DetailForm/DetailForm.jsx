import React from 'react';
import TitleBtn from '../TitleBtn';
import completeIcon from 'assets/complete_icon.png';
import { StyledDetailForm } from './StyledDetailForm';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoItem, updateTodoItem } from 'store/reducer/todoSlice';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';

const DetailForm = () => {
    const dispatch = useDispatch();
    const { token, selectedItem } = useSelector((state) => state.user);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(token) {
            const { title, content } = event.target;
            
            const formData = {
                title: title.value,
                content: content.value
            };

            if(selectedItem) {
                await dispatch(updateTodoItem({ 
                    token, 
                    item: formData, 
                    id: selectedItem.id 
                }))
                .then(({ payload }) => {
                    if(payload) {
                        dispatch(CHANGE_IS_EDIT());
                        dispatch(CHANGE_SELECTED_ITEM(payload));
                    }
                })
            } else {
                await dispatch(addTodoItem({ token, item: formData }))
                .then(({ payload }) => {
                    if(payload) {
                        dispatch(CHANGE_IS_EDIT());
                    }
                })
            }
        }
    }

    return (
        <StyledDetailForm onSubmit={handleSubmit}>
            <div className='title_wrapper'>
                <input 
                    type="text" 
                    name="title" 
                />
                <div className='btn_wrapper'>
                    <TitleBtn
                        type={"submit"}
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