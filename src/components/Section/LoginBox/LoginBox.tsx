import React from 'react';
import { StyledInputBox } from 'styles/StyledInputBox';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { StyledLoginBox } from './StyledLoginBox';

const LoginBox = () => {
    return (
        <StyledLoginBox>
            <h2 className='title'>Log in</h2>
            {/* action evevnt 추가 */}
            <form action={"#"} className="form">
                <StyledInputBox 
                    type="text" 
                    placeholder="이메일을 입력해주세요." 
                />
                <StyledInputBox 
                    type={"password"}
                    placeholder="패스워드를 입력해주세요."
                />
                <StyledSubmitBtn>
                    Log in
                </StyledSubmitBtn>
            </form>
        </StyledLoginBox>
    );
};

export default LoginBox;