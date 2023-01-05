import { css } from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const WrapperBox = css`
    padding: ${sizes.space_4x};
    width: ${sizes.wrapperBoxWidth};
    height: ${sizes.wrapperBoxHeight};
    background: ${colors.sectionBgColor};
    border: 1px solid ${colors.mainBorderColor};
    border-radius: ${sizes.wrapperBoxRadius};
`;

export default WrapperBox;