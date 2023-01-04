import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const DetailTitleWrapper = styled.div`
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
`;

// 버튼
const StyledTitleBtn = styled.button`
    width: ${sizes.detailIconSize};
    height: ${sizes.detailIconSize};
    cursor: pointer;

    &:hover {
        filter: ${colors.buttonHoverFilter};
    }

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export { DetailTitleWrapper, StyledTitleBtn };