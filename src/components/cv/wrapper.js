import styled from "styled-components";

export const CvWrappper = styled.div`
  .cvCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  .mask {
    width: 80px;
    height: 80px;
    display: inline-block;
    background-color: currentColor;

    margin-left: auto;
    margin-right: auto;
    color: #fa541c;
  }
  .mask1 {
    mask: url(https://zone-assets-api.vercel.app/assets/icons/ic_resume_job.svg)
      no-repeat center/contain;
    -webkit-mask: url(https://zone-assets-api.vercel.app/assets/icons/ic_resume_job.svg)
      no-repeat center/contain;
  }
  .mask3 {
    mask: url(https://zone-assets-api.vercel.app/assets/icons/ic_search_job.svg)
      no-repeat center/contain;
    -webkit-mask: url(https://zone-assets-api.vercel.app/assets/icons/ic_search_job.svg)
      no-repeat center/contain;
  }
  p {
    margin: 0;
    line-height: 1.8571428571428572;
    font-size: 0.875rem;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    color: #637381;
  }
  .step {
    font-weight: 600;
    line-height: 1.6666666666666667;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
    color: #919eab;
    margin-top: 32px;
    display: block;
  }
`;
