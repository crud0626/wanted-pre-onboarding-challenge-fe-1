import { IUserForm } from 'types/auth/auth.type';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from "service/auth";
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

// Async Thunk functions
const requestLogin = createAsyncThunk(
    "user/LOGIN",
    async (userData: IUserForm): Promise<void | string> => {
        try {
            const token = await authService.login(userData);
            console.log(token);
            if (token) return token;

            throw new Error("Undefined");
        } catch (error) {
            console.error(
                error instanceof Error 
                ? `에러가 발생했습니다. ${error.message}` 
                : `알 수 없는 에러가 발생했습니다. ${error}`
            );

            alert("로그인에 실패 했습니다. 다시 시도해주세요.");
        }
    }
);

const requestSignUp = createAsyncThunk(
    "user/SIGNUP",
    async (userData: IUserForm): Promise<void | string> => {
        try {
            const token = await authService.signUp(userData);

            if (token) return token;

            throw new Error("Undefined");
        } catch (error) {
            console.error(
                error instanceof Error 
                ? `에러가 발생했습니다. ${error.message}` 
                : `알 수 없는 에러가 발생했습니다. ${error}`
            );
            
            alert("회원가입에 실패 했습니다. 다시 시도해주세요.");
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN: (state, action) => {
            state.token = action.payload;
        },
        SIGNUP: (state, action) => {
            state.token = action.payload;
        },
        LOGOUT: (state) => {
            state.token = null;
        },
        CHANGE_IS_EDIT: (state, action) => {
            if(action.payload === null) {
                state.isEdit = !state.isEdit;
            } else {
                state.isEdit = action.payload;
            }
        },
        CHANGE_SELECTED_ITEM: (state, action) => {
            state.selectedItem = action.payload;
        },
        CLEAR_SELECTED_ITEM: (state) => {
            state.selectedItem = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestLogin.fulfilled, (state, action) => {
                if(action.payload) {
                    state.token = action.payload;
                }
            })
            .addCase(requestSignUp.fulfilled, (state, action) => {
                if(action.payload) {
                    state.token = action.payload;
                }
            })
    }
});

export const { 
    LOGIN,
    SIGNUP,
    LOGOUT,
    CHANGE_IS_EDIT,
    CHANGE_SELECTED_ITEM,
    CLEAR_SELECTED_ITEM,
} = userSlice.actions;

export { requestLogin, requestSignUp };

export default userSlice;