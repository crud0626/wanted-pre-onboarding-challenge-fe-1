import React from 'react';
import { StyledInputBox } from 'styles/StyledInputBox';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { StyledSignupBox } from './StyledSignupBox';
import ValidBox from './ValidBox/ValidBox';

const SignupBox = () => {
    return (
        <StyledSignupBox>
            <h2 className='title'>Sign Up</h2>
            {/* action evevnt 추가 */}
            <form action={"#"} className="form">
                <div>
                    <StyledInputBox 
                        type={"text"}
                        placeholder={"이메일을 입력해주세요." }
                    />
                    <ValidBox 
                        isValid={false}
                        displayText={"이메일 형식으로 입력해주세요."}
                    />
                </div>
                <div>
                    <StyledInputBox 
                        type={"password"}
                        placeholder={"패스워드를 입력해주세요."}
                    />
                    <ValidBox 
                        isValid={true}
                        displayText={"8자리 이상 입력해주세요."}
                    />
                </div>
                <StyledSubmitBtn>
                    Sign Up
                </StyledSubmitBtn>
            </form>
        </StyledSignupBox>
    );
};

export default SignupBox;