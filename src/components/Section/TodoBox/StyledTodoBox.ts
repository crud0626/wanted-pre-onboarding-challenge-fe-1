import styled from "styled-components";
import WrapperBox from "styles/mixins/WrapperBox";

const StyledTodoBox = styled.div`
    ${WrapperBox}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default StyledTodoBox;