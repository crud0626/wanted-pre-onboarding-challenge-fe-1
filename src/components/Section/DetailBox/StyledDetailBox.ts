import styled from "styled-components";
import WrapperBox from "styles/mixins/WrapperBox";

const StyledDetailBox = styled.div`
    ${WrapperBox}
    display: flex;
    flex-direction: column;
`;

export { StyledDetailBox };