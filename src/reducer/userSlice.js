import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from "service/auth";

const initialState = {
    token: null,
    isEdit: false,
    selectedItem: null
};

// Async Thunk functions
const requestLogin = createAsyncThunk(
    "user/LOGIN",
    async (userData) => {
        const token = await authService.login(userData);
        if (token) {
            return token;
        }

        alert("로그인이 실패 했습니다.");
    }
);

const requestSignUp = createAsyncThunk(
    "user/SIGNUP",
    async (userData) => {
        const token = await authService.signUp(userData);
        if (token) {
            return token;
        }

        alert("회원가입이 실패 했습니다.");
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN: (state, action) => {
            state.token = action.payload.token;
        },
        SIGNUP: (state, action) => {
            state.token = action.payload.token;
        },
        LOGOUT: (state) => {
            state.token = null;
        },
        CHANGE_IS_EDIT: (state, action) => {
            if(action.payload !== undefined) {
                state.isEdit = action.payload;
            } else {
                state.isEdit = !state.isEdit;
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

export const { CHANGE_IS_EDIT, LOGIN } = userSlice.actions;

export default userSlice;