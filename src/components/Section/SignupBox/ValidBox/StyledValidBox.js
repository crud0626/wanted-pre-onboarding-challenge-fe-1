import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledValidBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${sizes.space_2x};
    padding: 0 ${sizes.space_5x};

    & > .valid_icon {
        width: ${sizes.detailIconSize};
        height: ${sizes.detailIconSize};
        filter: ${props => props.isValid ? "unset" : "grayscale(1)"};
    }

    & > .valid_text {
        margin-left: ${sizes.space_2x};
        color: ${colors.disableTextColor};
        text-decoration: ${props => props.isValid && "line-through"};
        font-size: ${sizes.subContentFontSize};
    }
`;

export { StyledValidBox };