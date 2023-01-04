import React from 'react';
import { AddButton, StyledFooter } from './StyledTodoFooter';

const TodoFooter = () => {
    return (
        <StyledFooter>
            {/* onClick */}
            <AddButton>
                New
            </AddButton>
        </StyledFooter>
    );
};

export default TodoFooter;