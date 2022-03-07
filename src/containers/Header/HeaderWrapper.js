import styled from "styled-components";

const HeaderWrapper = styled.div`
  .blur-6px {
    backdrop-filter: blur(6px);
  }

  IconButton {
    &:hover {
      background-color: "gray";
    }
  }
`;

export default HeaderWrapper;
