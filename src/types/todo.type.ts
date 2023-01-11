// ITodoForm 으로 변경예정
export interface ITodo {
    title: string;
    content: string;
}

// update와 byId의 경우 ITodoITem | null
export interface ITodoItem extends ITodo {
    createdAt: string;
    id: string;
    updatedAt: string;
}

export interface IResponseTodoItem {
    data: ITodoItem;
}

export interface IResponseTodoItems {
    // null은 삭제, 또는 없을 때?
    data: null | ITodoItem[];
}

// getTodos는 배열로
// create, update는 단일 아이템