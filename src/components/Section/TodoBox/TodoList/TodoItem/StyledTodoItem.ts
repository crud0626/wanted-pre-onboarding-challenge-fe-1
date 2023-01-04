import styled from "styled-components";
import { RoundedBox } from 'styles/mixins/RoundedBox';
import * as colors from 'styles/common/colors';
import * as sizes from 'styles/common/sizes';

const StyledTodoItem = styled.li`
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

export default StyledTodoItem;