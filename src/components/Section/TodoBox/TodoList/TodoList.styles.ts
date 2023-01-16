import styled from "styled-components";
import * as colors from 'styles/common/colors';
import * as sizes from 'styles/common/sizes';
import { RoundedBox } from 'styles/mixins/RoundedBox';

const StyledTodoList = styled.ul`
    width: 100%;
    flex-grow: 1;
    overflow-y: scroll;
`;

const TodoItem = styled.li`
    ${RoundedBox}
    margin-bottom: ${sizes.space_4x};
    border: 1px solid ${colors.mainBorderColor};
    background: ${colors.mainWhiteColor};
    cursor: pointer;

    &:hover {
        border: 1px solid ${colors.todoItemHoverBorderColor};
        background: ${colors.todoItemHoverColor};
    }
`;

export { StyledTodoList, TodoItem };