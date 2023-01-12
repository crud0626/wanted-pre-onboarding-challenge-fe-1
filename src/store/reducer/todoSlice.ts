import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { todoApi } from 'service/todoApi';
import { ITodo, ITodoItem } from 'types/todo.type';

export interface TodoState {
    items: null | ITodoItem[];
}

const initialState: TodoState = {
    items: null
}

interface ThunkProps {
    token: string;
    item: ITodo
    id: string;
}

// ASYNC THUNK FUCTIONS
const fetchCreateTodo = createAsyncThunk(
    "todo/fetchCreateTodo",
    ({ token, item }: Omit<ThunkProps, 'id'>): Promise<void | ITodoItem> => {
        return todoApi.createTodo(token, item);
    }
);

const fetchGetTodos = createAsyncThunk(
    "todo/fetchGetTodos",
    ({ token }: Pick<ThunkProps, 'token'>): Promise<void | ITodoItem[]> => {
        return todoApi.getTodos(token);
   }
);

const fetchUpdateTodo = createAsyncThunk(
    "todo/fetchUpdateTodo",
    ({ token, item, id }: ThunkProps) => {
        return todoApi.updateTodo(token, item, id);
    }
);

const fetchDeleteTodo = createAsyncThunk(
    "todo/fetchDeleteTodo", 
    ({ token, id }: Omit<ThunkProps, 'item'>) => {
        return todoApi.deleteTodo(token, id);
    }
);

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateTodo.fulfilled, (state, { payload }) => {
                if(payload) state.items?.push(payload);
            })
            .addCase(fetchGetTodos.fulfilled, (state, { payload }) => {
                if(payload) state.items = payload;
            })
            .addCase(fetchUpdateTodo.fulfilled, (state, { payload }) => {
                if(!payload) return;

                const targetIndex = state.items?.findIndex((item) => item.id === payload.id);
                if (targetIndex && targetIndex !== -1) state.items?.splice(targetIndex, 1, payload);
            })
            .addCase(fetchDeleteTodo.fulfilled, (state, { payload }) => {
                if(!payload) return;

                const targetIndex = state.items?.findIndex((item) => item.id === payload);
                if(targetIndex && targetIndex !== -1) state.items?.splice(targetIndex, 1);
            })
    }
});

export const {
    ADD,
    GET,
    UPDATE,
    DELETE,
    CLEAR
} = todoSlice.actions;

export {
    fetchCreateTodo,
    fetchGetTodos,
    fetchUpdateTodo,
    fetchDeleteTodo
};

export default todoSlice;