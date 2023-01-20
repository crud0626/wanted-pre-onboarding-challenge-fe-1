import styled from "styled-components";
import { wrapperBox } from 'styles/mixins/wrapperBox';

const StyledDetailBox = styled.div`
    ${wrapperBox}
    display: flex;
    flex-direction: column;
`;

export { StyledDetailBox };