import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'hooks/common/useForm';
import { useAppDispatch } from 'hooks/common/useAppDispatch';
import { useLogin } from 'hooks/queries/auth/useLogin';
import { CHANGE_USER } from 'store/reducer/userSlice';
import { StyledLoginBox } from './LoginBox.styles';
import { RoundTextField } from 'styles/common/RoundTextField';
import { RoundSubmitBtn } from 'styles/common/RoundSubmitBtn';


const LoginBox = () => {
    const dispatch = useAppDispatch(), navigate = useNavigate();
    const { mutateAsync: fetchLogin } = useLogin();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        fetchLogin(formData)
        .then(token => {
            dispatch(CHANGE_USER(token))
            navigate('/');
        })
    }

    const { formData, handleChange } = useForm({
        initialState: {
            email: '',
            password: ''
        }
    });

    return (
        <StyledLoginBox>
            <h2 className='title'>Log in</h2>
            <form className="form" onSubmit={onSubmit}>
                <RoundTextField 
                    type={"text"}
                    name={"email"}
                    placeholder="이메일을 입력해주세요." 
                    onChange={handleChange}
                />
                <RoundTextField 
                    type={"password"}
                    name={"password"}
                    placeholder="패스워드를 입력해주세요."
                    onChange={handleChange}
                />
                <RoundSubmitBtn>
                    Log in
                </RoundSubmitBtn>
            </form>
            <button 
                className='signUpBtn' 
                onClick={() => navigate('/signup')}
            >
                회원 가입
            </button>
        </StyledLoginBox>
    );
};

export default LoginBox;