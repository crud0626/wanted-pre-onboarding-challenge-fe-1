import { useMutation } from '@tanstack/react-query';
import { todoApi } from 'service/todoApi';
import { ITodoCreateArgs } from 'types/todo.type';

const useCreateTodo = () => {
    return useMutation((args: ITodoCreateArgs) => {
        return todoApi.createTodo(args);
    });
};

export { useCreateTodo };