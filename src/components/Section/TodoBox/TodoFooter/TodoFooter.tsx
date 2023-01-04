import React from 'react';
import { StyledSubmitBtn } from 'styles/StyledSubmitBtn';
import { StyledFooter } from './StyledTodoFooter';

const TodoFooter = () => {
    return (
        <StyledFooter>
            {/* onClick */}
            <StyledSubmitBtn>
                New
            </StyledSubmitBtn>
        </StyledFooter>
    );
};

export default TodoFooter;