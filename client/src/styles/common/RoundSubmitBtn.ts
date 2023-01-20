import styled from "styled-components";
import { roundBox } from 'styles/mixins/roundBox';
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const RoundSubmitBtn = styled.button`
    ${roundBox}
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

export { RoundSubmitBtn };