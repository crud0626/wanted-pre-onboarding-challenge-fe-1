import { useMutation } from "react-query";
import { todoApi } from 'service/todoApi';
import { ITodoDeleteArgs } from 'types/todo.type';

const useDeleteTodo = () => {
    return useMutation((args: ITodoDeleteArgs) => {
            return todoApi.deleteTodo(args);
        }
    );
};

export { useDeleteTodo };