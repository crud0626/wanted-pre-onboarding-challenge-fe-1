import { createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from 'types/todo.type';

export interface UserState {
    token: null | string;
    isEdit: boolean;
    selectedItem: null | ITodoItem;
}

const initialState: UserState = {
    token: null,
    isEdit: false,
    selectedItem: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        CHANGE_USER: (state, { payload }) => {
            state.token = payload ? payload : null;
        },
        CHANGE_IS_EDIT: (state, { payload }) => {
            state.isEdit = payload === null ? !state.isEdit : payload;
        },
        CHANGE_SELECTED_ITEM: (state, { payload }) => {
            state.selectedItem = payload ? payload : null;
        }
    }
});

export const { 
    CHANGE_USER,
    CHANGE_IS_EDIT,
    CHANGE_SELECTED_ITEM,
} = userSlice.actions;

export default userSlice;