import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { LogoutBtn, StyledHeader } from './Header.styles';
import { RootState } from 'store/store';
import { LOGOUT } from 'store/reducer/userSlice';
import { STORAGE_KEY } from 'constants/storage';

const Header = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { token } = useSelector((state: RootState) => state.user);

    const onLogOut = () => {
        window.localStorage.removeItem(STORAGE_KEY);
        dispatch(LOGOUT());
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