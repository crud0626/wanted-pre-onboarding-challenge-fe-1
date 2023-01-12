import React, { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { fetchCreateTodo, fetchUpdateTodo } from 'store/reducer/todoSlice';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import TitleBtn from '../TitleBtn';
import { StyledDetailForm } from './DetailForm.styles';
import { ITodo } from 'types/todo.type';
import completeIcon from 'assets/complete-icon.png';

const DetailForm = () => {
    const dispatch = useAppDispatch();
    const { token, selectedItem } = useAppSelector(state => state.user);
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
                dispatch(fetchUpdateTodo({
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

            dispatch(fetchCreateTodo({ 
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