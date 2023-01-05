import styled from "styled-components";
import WrapperBox from "styles/mixins/WrapperBox";
import * as sizes from 'styles/common/sizes';

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
`;

export { StyledLoginBox };