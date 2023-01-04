import styled from "styled-components";
import * as sizes from '../../styles/common/sizes';
import * as colors from '../../styles/common/colors';

const StyledSection = styled.section`
    width: 100%;
    height: calc(100% - ${sizes.headerHeight} - ${sizes.footerHeight});
    background: ${colors.sectionBgColor};
`;

export default StyledSection;