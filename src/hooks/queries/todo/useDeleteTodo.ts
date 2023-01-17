import { todoApi } from 'service/todoApi';
import { useMutation } from "react-query";

const useDeleteTodo = () => {
    return useMutation(({token , id}: {token: string, id: string}) => {
            return todoApi.deleteTodo(token, id);
        }
    );
};

export { useDeleteTodo };