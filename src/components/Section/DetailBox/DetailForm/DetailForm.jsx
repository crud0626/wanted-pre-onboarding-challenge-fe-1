import React, { useState } from 'react';
import TitleBtn from '../TitleBtn';
import completeIcon from 'assets/complete_icon.png';
import { StyledDetailForm } from './StyledDetailForm';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoItem, updateTodoItem } from 'store/reducer/todoSlice';

const DetailForm = () => {
    const dispatch = useDispatch();
    const { token, selectedItem } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(token) {
            if(selectedItem) {
                dispatch(updateTodoItem({ 
                    token, 
                    item: formData, 
                    id: selectedItem.id 
                }));
            } else {
                dispatch(addTodoItem({ token, item: formData }));
            }
        }
    }

    return (
        <StyledDetailForm onSubmit={handleSubmit}>
            <div className='title_wrapper'>
                <input 
                    type="text" 
                    name="title" 
                    onChange={onChange}
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
                <textarea name="content" onChange={onChange}></textarea>
            </div>
        </StyledDetailForm>
    );
};

export default DetailForm;