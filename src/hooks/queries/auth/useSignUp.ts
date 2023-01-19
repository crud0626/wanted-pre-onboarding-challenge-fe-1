import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/common/useAppDispatch';
import { CHANGE_USER } from 'store/reducer/userSlice';
import { authService } from 'service/authService';
import { IUserForm } from 'types/auth.type';
import { STORAGE_KEY } from 'constants/storage';


const useSignUp = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation((formData: IUserForm) => {
            return authService.signUp(formData);
        },
        {
            onSuccess: (token) => {
                if (token) {
                    window.localStorage.setItem(STORAGE_KEY, token);
                    dispatch(CHANGE_USER(token));
                    queryClient.invalidateQueries({ queryKey: ['getTodos']});
                    navigate('/');
                }
            }
        }
    );
};

export { useSignUp };