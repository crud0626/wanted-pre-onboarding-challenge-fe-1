import styled from 'styled-components';
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';
import { RoundedBox } from 'styles/mixins/RoundedBox';

const LogoutBtn = styled.button`
    ${RoundedBox}
    position: absolute;
    right: ${sizes.space_5x};
    width: auto;
    height: 80%;
    background: ${colors.buttonBgColor};
    color: ${colors.mainWhiteColor};
    cursor: pointer;

    &:hover {
        background: ${colors.buttonHoverBgColor};
    }
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 ${sizes.space_4x};
    width: 100%;
    height: ${sizes.headerHeight};
    background: ${colors.mainGrayColor};
    color: ${colors.mainWhiteColor};

    & h1 {
        font-size: ${sizes.headerFontSize};
        font-weight: unset;
    }
`;

export { StyledHeader, LogoutBtn };