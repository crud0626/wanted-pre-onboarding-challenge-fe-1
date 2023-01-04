import styled from "styled-components";
import { RoundedBox } from "./mixins/RoundedBox";
import * as colors from 'styles/common/colors';

// props: text | password
const StyledInputBox = styled.input.attrs((props) => ({
    type: props.type || "text"
}))`
    ${RoundedBox}
    border: 1px solid ${colors.mainBorderColor};
`;

export { StyledInputBox };