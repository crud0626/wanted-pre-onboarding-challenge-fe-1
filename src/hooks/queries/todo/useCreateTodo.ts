import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from 'service/todoApi';
import { ITodoCreateArgs } from 'types/todo.type';

const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation((args: ITodoCreateArgs) => {
            return todoApi.createTodo(args);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['getTodos']});
            }
        }
    );
};

export { useCreateTodo };