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
                throw new Error(details);
            }

            throw new Error("Undefined");
        } catch (error) {
            console.log(`에러가 발생했습니다. ${error.message}`);
            alert("로그인에 실패 했습니다. 다시 시도해주세요.");
        }
    }
);

const requestSignUp = createAsyncThunk(
    "user/SIGNUP",
    async (userData) => {
        try {
            const response = await authService.signUp(userData);
            const { token, details } = response;
    
            if (token) {
                alert("회원가입에 성공하였습니다.");
                return token;
            }

            if(details) {
                throw new Error(details);
            }

            throw new Error("Undefined");
        } catch (error) {
            console.log(`에러가 발생했습니다. ${error.message}`);
            alert("회원가입에 실패 했습니다. 다시 시도해주세요.");
        }
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

export const { LOGIN,
    SIGNUP,
    LOGOUT,
    CHANGE_IS_EDIT,
    CHANGE_SELECTED_ITEM,
    CLEAR_SELECTED_ITEM,
} = userSlice.actions;

export { requestLogin, requestSignUp };

export default userSlice;