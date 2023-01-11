import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer/todoSlice";
import userSlice from "./reducer/userSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        user: userSlice.reducer
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
// 커스텀훅으로 빼자
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;