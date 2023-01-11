import styled from "styled-components";
import { RoundedBox } from 'styles/mixins/RoundedBox';
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledSubmitBtn = styled.button`
    ${RoundedBox}
    justify-content: center;
    border: 1px solid ${colors.mainBorderColor};
    background: ${colors.buttonBgColor};
    color: ${colors.mainWhiteColor};
    font-size: ${sizes.subHeaderFontSize};
    cursor: pointer;

    &:hover {
        border: 1px solid ${colors.todoItemHoverBorderColor};
        background: ${colors.buttonHoverBgColor};
    }
`;

export { StyledSubmitBtn };