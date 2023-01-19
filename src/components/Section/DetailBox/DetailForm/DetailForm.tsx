import React from 'react';
import { useForm } from 'hooks/common/useForm';
import { useAppSelector } from 'hooks/common/useAppSelector';
import { useAppDispatch } from 'hooks/common/useAppDispatch';
import { useUpdateTodo } from 'hooks/queries/todo/useUpdateTodo';
import { useCreateTodo } from 'hooks/queries/todo/useCreateTodo';
import { CHANGE_IS_EDIT, CHANGE_SELECTED_ITEM } from 'store/reducer/userSlice';
import DetailBtn from '../DetailBtn';
import { StyledDetailForm } from './DetailForm.styles';
import { ITodoUpdateArgs } from 'types/todo.type';
import { PickPartial } from 'types/custom.type';
import completeIcon from 'assets/complete-icon.png';

function checkUpdateArg(arg: any): arg is ITodoUpdateArgs {
    return arg.id !== undefined;
}

const DetailForm = () => {
    const dispatch = useAppDispatch();
    const { token, selectedItem } = useAppSelector(state => state.user);
    const { mutateAsync: fetchCreateTodo } = useCreateTodo();
    const { mutateAsync: fetchUpdateTodo } = useUpdateTodo();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        if(token) {
            const commonArgs: PickPartial<ITodoUpdateArgs, 'id'> = {
                token,
                item: formData,
                ...(selectedItem && { id: selectedItem.id })
            }

            const isUpdate = selectedItem && checkUpdateArg(commonArgs);

            const resItem = isUpdate
                ? await fetchUpdateTodo(commonArgs) 
                : await fetchCreateTodo(commonArgs);
            
            if(resItem) {
                dispatch(CHANGE_SELECTED_ITEM(resItem));
                dispatch(CHANGE_IS_EDIT(null));
            }
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