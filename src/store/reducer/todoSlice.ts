import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from 'types/todo.type';

const initialState: TodoState = {
    items: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ADD: (state, { payload }) => {
            if(state.items) {
                state.items.push(payload.items);
                return;
            };
            
            state.items = payload.items;
        },
        GET: (state, { payload }) => {
            state.items = payload;
        },
        UPDATE: (state, { payload }) => {
            const targetIndex = state.items?.findIndex((item) => item.id === payload.id);
            if (targetIndex && targetIndex !== -1) state.items?.splice(targetIndex, 1, payload);
        },
        DELETE: (state, { payload }) => {
            const targetIndex = state.items?.findIndex((item) => item.id === payload.id);
            if(targetIndex && targetIndex !== -1) state.items?.splice(targetIndex, 1);
        },
        CLEAR: (state) => {
            state.items = null;
        }
    }
});

export const {
    ADD,
    GET,
    UPDATE,
    DELETE,
    CLEAR
} = todoSlice.actions;

export default todoSlice;