import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledTodoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${sizes.space_4x};
    width: ${sizes.wrapperBoxWidth};
    height: ${sizes.wrapperBoxHeight};
    background: ${colors.sectionBgColor};
    border: 1px solid ${colors.mainBorderColor};
    border-radius: ${sizes.wrapperBoxRadius};
`;

export default StyledTodoBox;