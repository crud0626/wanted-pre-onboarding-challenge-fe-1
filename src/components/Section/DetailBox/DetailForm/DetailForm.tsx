import React from 'react';
import { useForm } from 'hooks/useForm';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useUpdateTodo } from 'hooks/queries/todo/useUpdateTodo';
import { useCreateTodo } from 'hooks/queries/todo/useCreateTodo';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import DetailBtn from '../DetailBtn';
import { StyledDetailForm } from './DetailForm.styles';
import completeIcon from 'assets/complete-icon.png';

const DetailForm = () => {
    const dispatch = useAppDispatch();
    const { token, selectedItem } = useAppSelector(state => state.user);
    const { mutateAsync: fetchCreateTodo } = useCreateTodo();
    const { mutateAsync: fetchUpdateTodo } = useUpdateTodo();

    // 리팩토링예정
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        if(token) {
            if(selectedItem) {
                const updatedItem = await fetchUpdateTodo({ 
                    token, 
                    item: formData, 
                    id: selectedItem.id
                });

                if(updatedItem) {
                    dispatch(CHANGE_IS_EDIT(null));
                    dispatch(CHANGE_SELECTED_ITEM(updatedItem));
                }

                return;
            }

            fetchCreateTodo({
                token,
                item: formData
            })
            .then(item => {
                if(item) {
                    dispatch(CHANGE_SELECTED_ITEM(item));
                    dispatch(CHANGE_IS_EDIT(null));
                }
            });
        }
    }

    const { formData, handleChange } = useForm({
        initialState: {
            title: '',
            content: ''
        }
    });

    return (
        <StyledDetailForm onSubmit={onSubmit}>
            <div className='title_wrapper'>
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange}
                />
                <div className='btn_wrapper'>
                    <DetailBtn
                        type="submit"
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