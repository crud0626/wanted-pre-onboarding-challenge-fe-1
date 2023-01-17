import { useQuery } from 'react-query';
import { STORAGE_KEY } from 'constants/storage';
import { authService } from 'service/auth';
import { IUserForm } from 'types/auth.type';

const useLogin = (userData: IUserForm) => {
    return useQuery(['login', userData], 
        () => {
            return authService.login(userData);
        },
        {
            onSuccess: (token) => {
                if (token) window.localStorage.setItem(STORAGE_KEY, token);
            },
            select: (res) => {
                if (typeof res === 'string') return res;
            }
        }
    );
};

export { useLogin };