import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

export type ButtonTypeAttribute = "button" | "submit" | "reset";

interface IProps {
    type?: ButtonTypeAttribute;
}

const StyledTitleBtn = styled.button.attrs<IProps>(props => ({
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

export { StyledTitleBtn };