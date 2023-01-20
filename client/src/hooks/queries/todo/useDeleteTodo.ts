import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from 'service/todoService';
import { ITodoDeleteArgs } from 'types/todo.type';

const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation((args: ITodoDeleteArgs) => {
            return todoApi.deleteTodo(args);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['getTodos']});
            }
        }
    );
};

export { useDeleteTodo };