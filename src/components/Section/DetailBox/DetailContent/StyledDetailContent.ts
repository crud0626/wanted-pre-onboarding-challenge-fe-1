import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledDetailContent = styled.div`
    flex-grow: 1;
    border-top: 1px solid ${colors.mainBorderColor};
    padding-top: ${sizes.space_2x};
    overflow-wrap: break-word;
    overflow-y: auto;

    & .content {
        font-size: ${sizes.subHeaderFontSize};
    }
`;

export { StyledDetailContent };