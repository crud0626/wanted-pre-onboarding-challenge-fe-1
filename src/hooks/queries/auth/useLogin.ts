import { useMutation } from '@tanstack/react-query';
import { STORAGE_KEY } from 'constants/storage';
import { authService } from 'service/authService';
import { IUserForm } from 'types/auth.type';

const useLogin = () => {
    return useMutation((userData: IUserForm) => {
            return authService.login(userData);
        },
        {
            onSuccess: (token) => {
                if (token) window.localStorage.setItem(STORAGE_KEY, token);
            }
        }
    );
};

export { useLogin };