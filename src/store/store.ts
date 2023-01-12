import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer/todoSlice";
import userSlice from "./reducer/userSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        user: userSlice.reducer
    },
    devTools: true
});