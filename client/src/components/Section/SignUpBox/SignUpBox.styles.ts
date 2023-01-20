import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';
import { wrapperBox } from 'styles/mixins/wrapperBox';
import { RoundSubmitBtn } from "styles/common/RoundSubmitBtn";

interface IProps {
    isValid: boolean;
}

const SignUpSubmitBtn = styled(RoundSubmitBtn)<IProps>`
    ${props => 
        !props.isValid &&
        `
            border: 1px solid ${colors.mainBorderColor};
            background: ${colors.disableBgColor};
            color: ${colors.disableTextColor};
            cursor: auto;
        `
    }
    &:hover {
        ${props => 
            !props.isValid &&
            `
                border: 1px solid ${colors.mainBorderColor};
                background: ${colors.disableBgColor};
                color: ${colors.disableTextColor};
            `
        }
    }
`;

const StyledSignUpBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${wrapperBox}

    & > .title {
        font-size: ${sizes.headerFontSize};
    }

    & > .form {
        margin-top: ${sizes.space_6x};

        & > * {
            margin-top: ${sizes.space_6x};
        }
    }
`;

export { StyledSignUpBox, SignUpSubmitBtn };