import React from 'react';
import { LogoutBtn, StyledHeader } from './StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from 'store/reducer/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch(), navigate = useNavigate();
    const { token } = useSelector(state => state.user);

    const onLogOut = () => {
        window.localStorage.removeItem("mtd-uid");
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