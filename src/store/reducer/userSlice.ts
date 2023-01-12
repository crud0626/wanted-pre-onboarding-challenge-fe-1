import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserForm } from 'types/auth.type';
import { ITodoItem } from 'types/todo.type';
import { authService } from "service/auth";

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

const fetchLogin = createAsyncThunk(
    "user/fetchLogin",
    (userData: IUserForm): Promise<void | string> => {
        return authService.login(userData);
    }
);

const fetchSignUp = createAsyncThunk(
    "user/fetchSignUp",
    (userData: IUserForm): Promise<void | string> => {
        return authService.signUp(userData);
    }
);

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.fulfilled, (state, action) => {
                if (action.payload) state.token = action.payload;
            })
            .addCase(fetchSignUp.fulfilled, (state, action) => {
                if (action.payload) state.token = action.payload;
            })
    }
});

export const { 
    CHANGE_USER,
    CHANGE_IS_EDIT,
    CHANGE_SELECTED_ITEM,
} = userSlice.actions;

export { fetchLogin, fetchSignUp };

export default userSlice;