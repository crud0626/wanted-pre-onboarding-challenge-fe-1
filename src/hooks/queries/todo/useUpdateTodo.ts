import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from 'service/todoApi';
import { ITodoUpdateArgs } from 'types/todo.type';

const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation((args: ITodoUpdateArgs) => {
            return todoApi.updateTodo(args);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['getTodos']});
            }
        }
    );
};

export { useUpdateTodo };