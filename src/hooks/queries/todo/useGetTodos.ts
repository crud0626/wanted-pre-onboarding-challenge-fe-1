import { todoApi } from 'service/todoApi';
import { useQuery } from "react-query";

const useGetTodos = (token: string | null) => {
    return useQuery(['getTodos', token], 
        () => {
            if (token) return todoApi.getTodos(token);
        },
        {
            select: (res) => {
                if(Array.isArray(res)) {
                    return res;
                }
            }
        }
    );
};

export { useGetTodos };