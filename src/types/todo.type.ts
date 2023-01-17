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

export interface ITodoUpdateArgs {
    token: string;
    item: ITodoForm;
    id: string;
}

export interface ITodoGetArgs extends Pick<ITodoUpdateArgs, 'token'> {}

export interface ITodoDeleteArgs extends Omit<ITodoUpdateArgs, 'item'> {}

export interface ITodoCreateArgs extends Omit<ITodoUpdateArgs, 'id'> {}