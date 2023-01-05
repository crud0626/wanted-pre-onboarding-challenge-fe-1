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
        try {
            const response = await authService.login(userData);
            const { token, details } = response;

            if(token) {
                alert("로그인에 성공하였습니다.");
                return token;
            };

            if(details) {
                alert(`로그인에 실패하였습니다. ${details}`);
                return;
            }

            throw new Error();
        } catch (error) {
            console.log(error);
            alert("로그인에 실패 했습니다. 다시 시도해주세요.");
            console.log(`에러가 발생했습니다. ${error.message}`);
        }
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

export { requestLogin };

export default userSlice;