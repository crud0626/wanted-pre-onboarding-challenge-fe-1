import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';
import { wrapperBox } from 'styles/mixins/wrapperBox';

const TodoFooter = styled.div`
    flex: 0 0;
    border-top: 1px solid ${colors.mainBorderColor};
    padding: ${sizes.space_4x} 0;
`;

const StyledTodoBox = styled.div`
    ${wrapperBox}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export { StyledTodoBox, TodoFooter };