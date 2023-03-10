import { useQuery } from '@tanstack/react-query';
import { todoApi } from 'service/todoService';

interface IProps {
    token: string | null;
}

const useGetTodos = ({ token }: IProps) => {
    return useQuery(['getTodos', token], 
        () => {
            if (token) return todoApi.getTodos({ token });
        },
        {
            enabled: token !== null,
            select: (res) => {
                if (Array.isArray(res)) return res;
            }
        }
    );
};

export { useGetTodos };