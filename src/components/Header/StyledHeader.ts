import styled from 'styled-components';
import * as sizes from '../../styles/common/sizes';
import * as colors from '../../styles/common/colors';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${sizes.headerHeight};
    background: ${colors.mainGrayColor};
    color: ${colors.mainWhiteColor};

    & h1 {
        font-size: ${sizes.headerFontSize};
        font-weight: unset;
    }
`;