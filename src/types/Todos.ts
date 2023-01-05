export interface Todo {
    title: string;
    content: string;
}

export interface TodoItem extends Todo {
    createdAt: string;
    id: string;
    updatedAt: string;
}