import { css } from 'styled-components';
import * as sizes from 'styles/common/sizes';

export const RoundedBox = css`
    display: flex;
    align-items: center;
    padding: 0 ${sizes.space_5x};
    width: 100%;
    height: ${sizes.inputBoxHeight};
    border-radius: ${sizes.itemBoxRadius};
`;