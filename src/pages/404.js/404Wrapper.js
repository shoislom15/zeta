import styled from "styled-components";

const NotFoundWrapper = styled.div`
  .bgbutton {
    background: #fa541c;
  }

  img {
    animation: pulse 0.5s cubic-bezier(0.01, 0, 0.01, 0.01);

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.3);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.1);
      }
    }
  }
`;

export default NotFoundWrapper;
