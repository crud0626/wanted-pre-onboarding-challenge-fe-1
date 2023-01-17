import { useMutation } from 'react-query';
import { todoApi } from 'service/todoApi';
import { ITodoForm } from 'types/todo.type';

const useCreateTodo = () => {
    return useMutation(({ token, item }: {token: string, item: ITodoForm}) => {
        return todoApi.createTodo(token, item);
    });
};

export { useCreateTodo };