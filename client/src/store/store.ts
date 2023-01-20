import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    devTools: true
});