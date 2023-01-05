import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledDetailForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;

    & > .title_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: ${sizes.space_2x};

        & input[type="text"] {
            font-size: ${sizes.headerFontSize};
            font-weight: unset;
        }

        & .btn_wrapper > * {
            margin-left: ${sizes.space_2x};
        }
    }

    & .content {
        flex-grow: 1;
        border-top: 1px solid ${colors.mainBorderColor};
        padding-top: ${sizes.space_2x};
        overflow-wrap: break-word;
        overflow-y: auto;
        font-size: ${sizes.subHeaderFontSize};

        & > textarea {
            width: 100%;
            height: 100%;
            font-size: inherit;
            resize: none;
        }
    }
`;

export { StyledDetailForm };