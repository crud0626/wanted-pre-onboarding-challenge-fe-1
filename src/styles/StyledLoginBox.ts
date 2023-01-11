import styled from "styled-components";
import WrapperBox from "styles/mixins/WrapperBox";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledLoginBox = styled.div`
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