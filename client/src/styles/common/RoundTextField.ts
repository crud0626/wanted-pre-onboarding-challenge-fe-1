import styled from "styled-components";
import { roundBox } from "../mixins/roundBox";
import * as colors from 'styles/common/colors';

type PropTypes = "text" | "password";

const RoundTextField = styled.input.attrs<PropTypes>((props) => ({
    type: props.type || "text",
    name: props.name || ""
}))`
    ${roundBox}
    border: 1px solid ${colors.mainBorderColor};
`;

export { RoundTextField };