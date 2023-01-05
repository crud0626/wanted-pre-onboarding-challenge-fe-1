import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { todoApi } from 'service/todoApi';

const initialState = {
    items: null
}

// ASYNC THUNK FUCTIONS
// addTodoItem
const addTodoItem = createAsyncThunk(
    "todo/ADD",
    async ({ token, item }) => {
        const addedItem = await todoApi.createTodo(token, item);
        if(addedItem) {
            return addedItem;
        }
        alert("추가하지 못했습니다.");
    }
);

// // getTodoItem
const getTodoItems = createAsyncThunk(
    "todo/GET",
    async ({ token }) => {
        const todos = await todoApi.getTodos(token)
            .then((items) => todos.push(...items));

        return todos;
   }
);

const updateTodoItem = createAsyncThunk(
    "todo/UPDATE",
    async ({ token, item, id }) => {
        const data = await todoApi.updateTodo(token, item, id);
        console.log(data);
        
        if(data) {
            return data;
        }
        throw new Error(`작업을 실패하였습니다.`);
    }
);

const deleteTodoItem = createAsyncThunk(
    "todo/DELETE", 
    async ({ token, id }) => {
        if(id) {
            const response = todoApi.deleteTodo(token, id)
            if(response !== null) return id;
        }
        throw new Error(`작업을 실패하였습니다.`);
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ADD: (state, action) => {
            state.items.push(action.payload.items);
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
                    state.items?.push(action.payload);
                }
            })
            .addCase(updateTodoItem.fulfilled, (state, action) => {
                const replaceData = action.payload;
                const replaceItems = state.items?.map(item => 
                    item.id === replaceData.id ? replaceData : item
                );

                if(replaceItems) {
                    state.items = replaceItems;
                }
            })
            .addCase(deleteTodoItem.fulfilled, (state, action) => {
                const deleteId = action.payload;
                const replaceItems = state.items?.filter(item => item.id !== deleteId);
                
                if(replaceItems) {
                    state.items = replaceItems;
                }
            })
    }
});

export {
    addTodoItem,
    getTodoItems,
    updateTodoItem,
    deleteTodoItem
};

export default todoSlice;