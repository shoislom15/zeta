import styled from "styled-components";

export const HomeWrapper = styled.div`
  .deserve {
    background: linear-gradient(
        to bottom,
        rgba(22, 28, 36, 0.88),
        rgba(22, 28, 36, 0.88)
      ),
      url(https://zone-assets-api.vercel.app/assets/bg_gradient.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
    min-height: 100vh;

    p {
      color: #919eab;
      line-height: 1.75;
    }
    .mask {
      width: 94px;
      height: 28px;
      display: inline-block;
      background-color: #919eab !important;
      opacity: 0.8;
    }
    .mask1 {
      mask: url(https://zone-assets-api.vercel.app/assets/logos/airbnb.svg)
        no-repeat center/contain;
      -webkit-mask: url(https://zone-assets-api.vercel.app/assets/logos/airbnb.svg)
        no-repeat center/contain;
    }
    .mask2 {
      mask: url(https://zone-assets-api.vercel.app/assets/logos/dropbox.svg)
        no-repeat center/contain;
      -webkit-mask: url(https://zone-assets-api.vercel.app/assets/logos/dropbox.svg)
        no-repeat center/contain;
    }
    .mask3 {
      mask: url(https://zone-assets-api.vercel.app/assets/logos/facebook.svg)
        no-repeat center/contain;
      -webkit-mask: url(https://zone-assets-api.vercel.app/assets/logos/facebook.svg)
        no-repeat center/contain;
    }
    .mask4 {
      mask: url(https://zone-assets-api.vercel.app/assets/logos/google.svg)
        no-repeat center/contain;
      -webkit-mask: url(https://zone-assets-api.vercel.app/assets/logos/google.svg)
        no-repeat center/contain;
    }
  }
  .explore {
    .exh1 {
      font-weight: 700;
      line-height: 1.3333333333333333;
      margin-top: 16px;
      margin-bottom: 24px;
    }
    .exP2 {
      color: #919eab;
      line-height: 1.75;
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
    }
    .exP2 {
      margin: 0;
      line-height: 1.75;
      font-size: 1rem;
      font-family: Poppins, sans-serif;
      font-weight: 400;
      color: #637381;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .featured {
    .featuredP {
      font-weight: 600;
      line-height: 1.6666666666666667;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #919eab;
    }
    h2 {
      font-weight: 600;
      color: #212b36;
      font-weight: 700;
      line-height: 1.5;
    }
  }

  .
`;
