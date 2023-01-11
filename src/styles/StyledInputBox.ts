import styled from "styled-components";
import { RoundedBox } from "./mixins/RoundedBox";
import * as colors from 'styles/common/colors';

type PropTypes = "text" | "password";

const StyledInputBox = styled.input.attrs<PropTypes>((props) => ({
    type: props.type || "text",
    name: props.name || ""
}))`
    ${RoundedBox}
    border: 1px solid ${colors.mainBorderColor};
`;

export { StyledInputBox };