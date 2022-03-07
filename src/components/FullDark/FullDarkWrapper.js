import styled from "styled-components";

const FullDarkWrapper = styled.div`
  .jobForYou {
    background: linear-gradient(
        to bottom,
        rgba(22, 28, 36, 0.88),
        rgba(22, 28, 36, 0.88)
      ),
      url(https://zone-assets-api.vercel.app/assets/images/career/career_newsletter.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .btn {
    border-top-left-radius: 0;
  }

  .orangebtn {
    background-color: #fa541c;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    // margin: 8px 0px 24px;
    padding: 8px 24px;
    line-height: 1.85714;
    font-size: 1rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
  }
`;

export default FullDarkWrapper;
