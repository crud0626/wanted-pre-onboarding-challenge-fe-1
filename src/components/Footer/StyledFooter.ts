import styled from "styled-components";
import * as sizes from 'styles/common/sizes';
import * as colors from 'styles/common/colors';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${sizes.space_4x};
    width: 100%;
    height: ${sizes.footerHeight};
    background: ${colors.mainGrayColor};
    color: ${colors.mainWhiteColor};

    & .btnWrapper {
        width: ${sizes.footerIconSize};
        height: ${sizes.footerIconSize};

        & > img {
            width: 100%;
            height: 100%;

            &:hover {
                filter: ${colors.buttonHoverFilter};
            }
        }
    }
`;

export default StyledFooter;