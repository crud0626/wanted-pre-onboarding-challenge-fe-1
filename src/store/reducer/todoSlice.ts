import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { todoApi } from 'service/todoApi';
import { ITodo, ITodoItem } from 'types/todo.type';

export interface TodoState {
    items: null | ITodoItem[];
}

const initialState: TodoState = {
    items: null
}

// ASYNC THUNK FUCTIONS
/**
 * @param token - string
 * @param item - ITODO
 */
const addTodoItem = createAsyncThunk(
    // 이름변경 예정 createTodoItem으로
    "todo/ADD",
    async ({ token, item }: { token: string, item: ITodo}): Promise<void | ITodoItem> => {
        const addedItem = await todoApi.createTodo(token, item);

        if(addedItem) return addedItem;
    }
);

/**
 * @param token - string
 */
const getTodoItems = createAsyncThunk(
    "todo/GET",
    async ({ token }: { token: string}): Promise<void | ITodoItem[]> => {
        const userItems = await todoApi.getTodos(token);

        if(userItems) return userItems;
   }
);

/**
 * @param token - string
 * @param item - ITODO
 * @param id - string
 */
const updateTodoItem = createAsyncThunk(
    "todo/UPDATE",
    async ({ token, item, id }: { token: string, item: ITodo, id: string }) => {
        const changedData = await todoApi.updateTodo(token, item, id);

        if(changedData) return changedData;
    }
);

const requestDeleteItem = createAsyncThunk(
    "todo/DELETE", 
    async ({ token, id }: { token: string, id: string }) => {

        try {
            const response = await todoApi.deleteTodo(token, id);

            if(response) return id;
        } catch (error) {
            throw new Error(`작업을 실패하였습니다.`);
        }
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ADD: (state, action) => {
            if(state.items) {
                state.items.push(action.payload.items);
                return;
            };
            
            state.items = action.payload.items;
        },
        GET: (state, action) => {
            state.items = action.payload;
        },
        UPDATE: (state, action) => {
            const replaceData = action.payload;
            
            state.items?.forEach(item => {
                if(item.id === replaceData.id) {
                    item = replaceData;
                }
            });
        },
        DELETE: (state, action) => {
            state.items?.filter((item) => item.id !== action.payload);
        },
        // 로그아웃시에만
        CLEAR: (state) => {
            state.items = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodoItem.fulfilled, (state, action) => {
                if(action.payload) {
                    if(state.items) {
                        state.items.push(action.payload);
                        return;
                    };

                    state.items = [action.payload];
                }
            })
            .addCase(updateTodoItem.fulfilled, (state, action) => {
                if(!action.payload) return;

                const replaceData = action.payload;
                const replaceItems = state.items?.map(item => 
                    item.id === replaceData.id ? replaceData : item
                );

                if(replaceItems) {
                    state.items = replaceItems;
                }
            })
            .addCase(getTodoItems.fulfilled, (state, action) => {
                if(action.payload) state.items = action.payload;
            })
            .addCase(requestDeleteItem.fulfilled, (state, action) => {
                console.log(action.payload);
                
                const deleteId = action.payload;
                const replaceItems = state.items?.filter(item => item.id !== deleteId);
                
                if(replaceItems) {
                    state.items = replaceItems;
                }
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
    addTodoItem,
    getTodoItems,
    updateTodoItem,
    requestDeleteItem
};

export default todoSlice;