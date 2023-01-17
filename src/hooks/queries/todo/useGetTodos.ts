import { todoApi } from 'service/todoApi';
import { useQuery } from "react-query";

interface IProps {
    token: string | null;
}

const useGetTodos = ({ token }: IProps) => {
    return useQuery(['getTodos', token], 
        () => {
            if (token) return todoApi.getTodos({ token });
        },
        {
            select: (res) => {
                if (Array.isArray(res)) return res;
            }
        }
    );
};

export { useGetTodos };