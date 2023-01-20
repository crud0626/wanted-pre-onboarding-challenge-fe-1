import React from "react";
import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

export interface DetailBtnProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {}

const StyledDetailBtn = styled.button.attrs<DetailBtnProps>(props => ({
    type: props.type || 'button',
}))`
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

export { StyledDetailBtn };