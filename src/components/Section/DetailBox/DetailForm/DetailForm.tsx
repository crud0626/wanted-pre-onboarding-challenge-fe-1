import React, { useState } from 'react';
import TitleBtn from '../TitleBtn';
import completeIcon from 'assets/complete_icon.png';
import { StyledDetailForm } from './StyledDetailForm';
import { useSelector } from 'react-redux';
import { addTodoItem, updateTodoItem } from 'store/reducer/todoSlice';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import { RootState, useAppDispatch } from 'store/store';
import { ITodo } from 'types/todo.type';

const DetailForm = () => {
    const dispatch = useAppDispatch();
    const { token, selectedItem } = useSelector((state: RootState) => state.user);
    const [formData, setFormData] = useState<ITodo>({
        title: '',
        content: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    // add와 submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if(token) {
            if(selectedItem) {
                dispatch(updateTodoItem({
                    token, 
                    item: formData, 
                    id: selectedItem.id 
                }))
                .then(({ payload }) => {
                    if(payload) {
                        dispatch(CHANGE_IS_EDIT(null));
                        dispatch(CHANGE_SELECTED_ITEM(payload));
                    }
                });

                return;
            }

            dispatch(addTodoItem({ 
                token, 
                item: formData 
            }))
            .then(({ payload }) => {
                if(payload) {
                    dispatch(CHANGE_IS_EDIT(null));
                }
            });
        }
    }

    return (
        <StyledDetailForm onSubmit={handleSubmit}>
            <div className='title_wrapper'>
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange}
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
                <textarea 
                    name="content" 
                    onChange={handleChange}
                />
            </div>
        </StyledDetailForm>
    );
};

export default DetailForm;