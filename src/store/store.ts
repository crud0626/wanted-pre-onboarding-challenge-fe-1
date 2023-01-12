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

// types로 분할 예정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;