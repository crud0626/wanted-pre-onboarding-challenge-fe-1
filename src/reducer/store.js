import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        user: userSlice.reducer
    },
    devTools: true
});