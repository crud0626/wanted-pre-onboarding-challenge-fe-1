import { useQuery } from '@tanstack/react-query';
import { todoApi } from 'service/todoApi';

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