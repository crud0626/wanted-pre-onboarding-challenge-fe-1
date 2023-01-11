import styled from "styled-components";
import WrapperBox from "styles/mixins/WrapperBox";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';
import { StyledSubmitBtn } from "styles/StyledSubmitBtn";

interface IProps {
    isValid: boolean;
}

const SignUpSubmitBtn = styled(StyledSubmitBtn)<IProps>`
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

const StyledSignupBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${WrapperBox}

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

export { StyledSignupBox, SignUpSubmitBtn };