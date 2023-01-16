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