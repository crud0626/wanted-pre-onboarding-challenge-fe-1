import { useMutation } from '@tanstack/react-query';
import { authService } from "service/authService";
import { IUserForm } from 'types/auth.type';
import { STORAGE_KEY } from "constants/storage";

const useSignUp = () => {
    return useMutation((formData: IUserForm) => {
            return authService.signUp(formData);
        },
        {
            onSuccess: (token) => {
                if (token) window.localStorage.setItem(STORAGE_KEY, token);
            }
        }
    );
};

export { useSignUp };