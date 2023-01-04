import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

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

export { StyledTitleBtn };