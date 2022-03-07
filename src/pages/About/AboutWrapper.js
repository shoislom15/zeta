import styled from "styled-components";

const AboutWrapper = styled.div`
.bg-gradient{
background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%);
  border-end-end-radius: 16px;
overflow: hidden;
}
.hoverCard{
  transition: 3s;
    .cardHover{
        display: none;
        transition: 3s;
    }
    &:hover{
      transition: 3s;
        .cardHover{
        display: flex;
        transition: 3s;
    }
    }
}
`;

export default AboutWrapper;
