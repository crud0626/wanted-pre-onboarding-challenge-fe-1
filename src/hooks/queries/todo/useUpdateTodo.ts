import { todoApi } from 'service/todoApi';
import { useMutation } from 'react-query';
import { ITodoForm } from 'types/todo.type';

const useUpdateTodo = () => {
    return useMutation(({ token, item, id }: {token: string, item: ITodoForm, id: string}) => {
        return todoApi.updateTodo(token, item, id);
    });
};

export { useUpdateTodo };