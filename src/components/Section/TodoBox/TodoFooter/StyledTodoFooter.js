import styled from "styled-components";
import { RoundedBox } from 'styles/mixins/RoundedBox';
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const AddButton = styled.button`
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

const StyledFooter = styled.div`
    flex: 0 0;
    border-top: 1px solid ${colors.mainBorderColor};
    padding: ${sizes.space_4x} 0;
`;

export { StyledFooter, AddButton };