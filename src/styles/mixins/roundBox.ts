import { css } from 'styled-components';
import * as sizes from 'styles/common/sizes';

export const roundBox = css`
    display: flex;
    align-items: center;
    padding: 0 ${sizes.space_5x};
    width: 340px;
    height: ${sizes.inputBoxHeight};
    border-radius: ${sizes.itemBoxRadius};
`;