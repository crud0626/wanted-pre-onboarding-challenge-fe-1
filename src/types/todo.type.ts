export interface TodoState {
    items: null | ITodoItem[];
}

export interface ITodoForm {
    title: string;
    content: string;
}

export interface ITodoItem extends ITodoForm {
    createdAt: string;
    id: string;
    updatedAt: string;
}

/* 요청 성공 */
// createTodo, updateTodo
export interface IResponseTodoItem {
    data: ITodoItem;
}

// getTodo
export interface IResponseTodoItems {
    data: null | ITodoItem[];
}

export interface IResponseDelete {
    data: null;
}