import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { LogoutBtn, StyledHeader } from './Header.styles';
import { CHANGE_USER } from 'store/reducer/userSlice';
import { STORAGE_KEY } from 'constants/storage';

const Header = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { token } = useAppSelector(state => state.user);

    const onLogOut = (): void => {
        window.localStorage.removeItem(STORAGE_KEY);
        dispatch(CHANGE_USER(null));
        navigate('/login');
    }

    return (
        <StyledHeader>
            <h1>MY TODO LIST</h1>
            {
                token &&
                <LogoutBtn onClick={onLogOut}>
                    LOGOUT
                </LogoutBtn>
            }
        </StyledHeader>
    );
};

export default Header;