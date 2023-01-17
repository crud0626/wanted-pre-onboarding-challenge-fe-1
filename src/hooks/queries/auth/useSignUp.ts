import { useMutation } from "react-query";
import { authService } from "service/auth";
import { IUserForm } from 'types/auth.type';
import { STORAGE_KEY } from "constants/storage";

const useSignUp = (formData: IUserForm) => {
    return useMutation(() => {
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