import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';
import { wrapperBox } from 'styles/mixins/wrapperBox';

const StyledLoginBox = styled.div`
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

    & .signUpBtn {
        margin-top: ${sizes.space_2x};
        color: ${colors.linkBtnColor};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export { StyledLoginBox };