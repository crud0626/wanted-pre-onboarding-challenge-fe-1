import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    & > .title_wrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: ${sizes.space_2x};

        & .title {
            font-size: ${sizes.headerFontSize};
            font-weight: unset;
        }

        /* 첫 번째 자식을 제외하고 마진 적용 */
        & .btn_wrapper :not(:first-child) {
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

        & span {

        }
    }
`;

export { StyledDetailContent };