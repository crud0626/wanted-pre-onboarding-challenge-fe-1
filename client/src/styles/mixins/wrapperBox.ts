import { css } from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

export const wrapperBox = css`
    padding: ${sizes.space_4x};
    width: ${sizes.wrapperBoxWidth};
    height: ${sizes.wrapperBoxHeight};
    background: ${colors.sectionBgColor};
    border: 1px solid ${colors.mainBorderColor};
    border-radius: ${sizes.wrapperBoxRadius};
`;