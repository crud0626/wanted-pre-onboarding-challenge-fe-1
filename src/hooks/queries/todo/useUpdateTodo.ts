import { useMutation } from '@tanstack/react-query';
import { todoApi } from 'service/todoApi';
import { ITodoUpdateArgs } from 'types/todo.type';

const useUpdateTodo = () => {
    return useMutation((args: ITodoUpdateArgs) => {
        return todoApi.updateTodo(args);
    });
};

export { useUpdateTodo };