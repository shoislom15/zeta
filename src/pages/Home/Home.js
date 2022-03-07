import { Button, Container } from "@mui/material";
import { CvCards } from "../../components/cv";
import { Mask } from "../../components/mask";
import { Typography } from "../../components/typography";
import { HomeWrapper } from "./HomeWrapper";
import { BsCloudUpload } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MainCard } from "../../components/mainCard";

import HighlightGroup from "../../components/HighlightGroup";
import CustomBtn from "../../components/OutlinedBtn";
import FullDark from "../../components/FullDark/FullDark";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.homeCards);
  return (
    <HomeWrapper className="selection:bg-orange selection:text-black">
      <div className="deserve flex py-28 text-white">
        <Container sx={{ display: "flex" }}>
          <div className="text-center  900px:text-left w-full 900px:w-1/2 md:text-left">
            <h1 className="font-bold text-center 900px:text-left  text-4rem leading-1.25 font-Barlow 900px:max-w-466px">
              Get The <span className="text-orange">Career</span> You Deserve
            </h1>
            <p className="my-6 text-center 900px:text-left 900px:max-w-466px">
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
              sapien, quis venenatis ante odio sit amet erosss.
            </p>
            <HighlightGroup className="mt-10 mb-12 w-full 900px:max-w-466px" />
            <Mask className="mb-12 text-center 900px:text-left" />
            <Typography className="w-full 900px:max-w-466px" />
          </div>
          <div className="hidden 900px:flex pt-12  items-start justify-start pl-14 relative">
            <div className="absolute w-80 top-32 left-32 MuiBox-root css-wwaq0i ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 349 450"
              >
                <path
                  fill="#FF928E"
                  fillRule="evenodd"
                  d="M156.262 105.782l-34.856-27.895c-5.073-8.737-10.352-15.758-15.836-21.064-1.763-1.128-5.005-2.195-2.866 3.867 2.139 6.062 4.116 12.534 2.232 13.953-1.885 1.42-5.419-1.65-7.808.838-1.592 1.66 4.637 5.822 18.686 12.489l25.687 26.531 14.761-8.719z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#22B8CF"
                  fillRule="evenodd"
                  d="M175.877 104.395c-13.487-2.525-31.002-8.55-48.078-24.124l-10.514 15.478c10.944 15.478 27.686 29.562 44.07 31.979 12.912 1.905 22.214-12.453 14.522-23.333z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#116E95"
                  fillRule="evenodd"
                  d="M175.876 104.395c-13.487-2.525-31.002-8.55-48.078-24.124l-10.514 15.478c10.944 15.478 27.686 29.562 44.07 31.979 12.912 1.905 22.214-12.453 14.522-23.333z"
                  clipRule="evenodd"
                  opacity="0.24"
                ></path>
                <path
                  fill="#FDBAB9"
                  d="M196.465 52.565c-8.197 2.357-15.683 2.55-18.714.84-7.601-4.288-.362-34.307 9.105-44.37 9.466-10.062 43.312-6.484 38.708 17.245-1.598 8.235-6.931 14.538-13.531 19.079l-2.223 44.324-26.162-7.01 12.817-30.108z"
                ></path>
                <path
                  fill="#063963"
                  fillRule="evenodd"
                  d="M197.714 13.62c3.167 2.933 4.73 7.4 6.508 13.226a6.764 6.764 0 012.512.19c3.612.968 5.757 4.676 4.79 8.282a6.73 6.73 0 01-3.222 4.144c.942 2.538 2.041 5.22 3.369 8.04 8.473-2.417 18.35-14.515 14.508-28.726-.359-6.554-4.992-10.222-9.867-13.13-3.795-2.93-8.177-4.32-12.208-4.253-7.509-1.338-14.662-.86-16.875-.03-1.859 6.938-1.064 9.357 10.485 12.258z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#063963"
                  fillRule="evenodd"
                  d="M202.988 22.984s-7.1 20.491-13.545 18.764c-6.446-1.727-10.819-7.277-13.647-8.035-2.062-.552-2.292 2.147-1.437 4.422.705 1.878 5.789 4.868 5.134 7.31-.654 2.443-4.486-.609-4.874.84-.642 2.396-2.612 6.697 1.554 7.814 4.216 1.13 16.714 2.834 20.46-2.858 3.745-5.692 9.686-25.627 9.686-25.627l-3.331-2.63z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FDBAB9"
                  fillRule="evenodd"
                  d="M201.813 179.982L117.959 319.95 55.092 438.28H41.55l105.334-258.298h54.928z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FA541C"
                  fillRule="evenodd"
                  d="M72.552 419.332l-26.114-7.887S63.6 360.223 88.506 298.708c24.907-61.514 53.497-118.726 53.497-118.726h73.754s-31.786 72.371-67.396 131.516c-35.609 59.145-75.81 107.834-75.81 107.834z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#B3200E"
                  fillRule="evenodd"
                  d="M72.552 419.332l-26.113-7.887S63.6 360.223 88.507 298.708c24.906-61.514 53.497-118.726 53.497-118.726h73.754s-31.787 72.371-67.396 131.516c-35.61 59.145-75.81 107.834-75.81 107.834z"
                  clipRule="evenodd"
                  opacity="0.48"
                ></path>
                <path
                  fill="#FDBAB9"
                  fillRule="evenodd"
                  d="M207.324 179.982c7.915 49.186 23.179 112.026 24.62 113.965.96 1.293 35.534 12.86 103.721 34.701l-2.925 11.922c-81.313-11.714-124.158-20.801-128.535-27.264-6.565-9.693-39.348-86.269-52.045-133.324h55.164z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FA541C"
                  fillRule="evenodd"
                  d="M311.696 318.343l-5.152 19.2c-60.817 5.326-98.081 1.478-111.792-11.544-13.711-13.022-29.337-61.694-46.879-146.017h70.329c11.114 69.049 17.327 105.023 18.64 107.922 1.313 2.898 26.264 13.045 74.854 30.439z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#770508"
                  fillRule="evenodd"
                  d="M60.5 431.444c1.07-.476 2.341.001 2.745 1.099.829 2.254 2.02 5.841 2.02 7.828 0 3.048-1.017 8.895-1.017 8.895H.598s-2.48-8.19 2.865-8.843c5.345-.653 8.88-1.179 8.88-1.179l29.706-13.221a1 1 0 011.331.531l1.952 4.728s4.948 2.305 8.042 2.305c1.965 0 5.1-1.239 7.127-2.143zM330.474 326.272c-.285-1.136.407-2.308 1.561-2.515 2.368-.423 6.11-.971 8.069-.626 3.007.529 8.597 2.544 8.597 2.544l-11.052 62.583s-8.509 1.018-8.225-4.352c.285-5.369.38-8.937.38-8.937l-7.883-31.5a.999.999 0 01.756-1.219l5.001-1.099s3.133-4.465 3.67-7.507c.341-1.93-.334-5.222-.874-7.372z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#FF928E"
                  fillRule="evenodd"
                  d="M92.707 112.927L77.4 100.646s-1.177-14.178-6.122-15.137c-2.332-1.628.08 10.565-4.562 8.726-4.64-1.839-14.854-12.638-17.192-11.223-3.458 2.093-2.206 10.613.236 15.172 4.563 8.521 8.982 11.939 20.43 17.413 8.978 4.294 18.557 14.137 18.557 14.137l3.959-16.807z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#22B8CF"
                  fillRule="evenodd"
                  d="M223.974 229.735c-19.389-7.489-82.66 2.035-89.043-21.421-12.624-46.395 35.276-99.074 47.57-146.758l30.836 5.438c3.382.596 18.608 48.635 13.591 77.215-4.582 26.099 16.815 46.961-2.954 85.526z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#22B8CF"
                  fillRule="evenodd"
                  d="M185.568 62.096s-7.796 62.266-30.01 65.755c-22.214 3.489-72.564-25.065-72.564-25.065s-17.138 23.732-18.138 34.949c108.332 83.257 171.477 12.112 147.51-70.913l-26.798-4.726z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="absolute w-480px animate-[spin_70s_linear_infinite] z-50 MuiBox-root css-8a98gv">
              <div
                className="MuiBox-root css-1x3nwin"
                style={{ transform: "rotate(68.5032deg) translateZ(0px)" }}
              >
                <div className="MuiBox-root css-4kwmam"></div>
              </div>
              <div
                className="MuiBox-root css-1x3nwin"
                style={{ transform: "rotate(218.623deg) translateZ(0px)" }}
              >
                <div className="MuiBox-root css-12vjy34"></div>
              </div>
              <div
                className="MuiBox-root css-1x3nwin"
                style={{ transform: "rotate(174.898deg) translateZ(0px)" }}
              >
                <div className="MuiBox-root css-1yjkd3o"></div>
              </div>
              <div
                className="MuiBox-root css-1x3nwin"
                style={{ transform: "rotate(214.252deg) translateZ(0px)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 520 520"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeDasharray="3"
                    strokeWidth="1"
                    opacity="0.24"
                  >
                    <g
                      stroke="#919EAB"
                      strokeWidth="2"
                      transform="translate(-757 1.852)"
                    >
                      <path d="M1017 518c143.042 0 259-115.958 259-259S1160.042 0 1017 0 758 115.958 758 259s115.958 259 259 259z"></path>
                    </g>
                  </g>
                </svg>
                <div className="MuiBox-root css-5qjsyv"></div>
              </div>
            </div>
            <div className="absolute w-480px  z-0  scale-110 MuiBox-root css-1f0kg3b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 640 640"
              >
                <polygon
                  className="animate-[altRound_9s_linear_infinite]"
                  fill="#69F290"
                  points="79.6660954 466.5012 83.4706954 470.3062 87.2873954 466.4912 88.9182954 468.1212 85.1008954 471.9362 88.9077954 475.7412 87.2723954 477.3762 83.4651954 473.5712 79.6510954 477.3862 78.0202954 475.7562 81.8348954 471.9422 78.0306954 468.1362"
                  style={{
                    transform: "translateX(2.00233px)",
                    transformOrigin: "83.4693px 471.939px",
                  }}
                ></polygon>
                <polygon
                  className="animate-[round_6s_linear_infinite]"
                  fill="#69F290"
                  points="469.906195 75.0105 473.711195 78.8154 477.527195 75 479.158195 76.6304 475.341195 80.4452 479.148195 84.2498 477.512195 85.8847 473.705195 82.0805 469.891195 85.8952 468.260195 84.2648 472.075195 80.4507 468.271195 76.6454"
                  style={{
                    transform: "translateY(-5.8225px)",
                    transformOrigin: "473.709px 80.4476px",
                  }}
                ></polygon>
                <polygon
                  className="animate-[altRound_9s_linear_infinite]"
                  fill="#DC8CFF"
                  points="400.526195 241.7992 404.331195 245.6042 408.148195 241.7882 409.778195 243.4192 405.961195 247.2342 409.768195 251.0382 408.133195 252.6732 404.325195 248.8692 400.511195 252.6842 398.880195 251.0532 402.695195 247.2392 398.891195 243.4342"
                  style={{
                    transform: "translateX(2.00233px)",
                    transformOrigin: "404.329px 247.236px",
                  }}
                ></polygon>
                <path
                  className="animate-[round_6s_linear_infinite]"
                  d="M204.688195,460.0412 L215.909195,471.2692 C216.698195,472.0482 217.486195,471.7982 217.686195,470.7102 L220.172195,457.3862 C220.242195,457.1642 220.250195,456.9272 220.195195,456.7002 C220.140195,456.4742 220.023195,456.2672 219.858195,456.1022 C219.694195,455.9382 219.487195,455.8212 219.260195,455.7662 C219.034195,455.7112 218.797195,455.7192 218.575195,455.7892 L205.237195,458.2642 C204.149195,458.4642 203.909195,459.2622 204.688195,460.0412 Z"
                  stroke="#DC8CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transform: "translateX(2.00233px)",
                    transformOrigin: "212.231px 463.726px",
                  }}
                ></path>
                <path
                  className="animate-[altRound_9s_linear_infinite]"
                  d="M316.964195,555.3242 L320.830195,551.4592 C321.416195,550.8752 322.209195,550.5472 323.036195,550.5472 C323.863195,550.5472 324.657195,550.8752 325.243195,551.4592 L329.108195,555.3242 C329.400195,555.6142 329.631195,555.9582 329.789195,556.3372 C329.947195,556.7172 330.028195,557.1232 330.028195,557.5342 C330.028195,557.9452 329.947195,558.3512 329.789195,558.7302 C329.631195,559.1102 329.400195,559.4542 329.108195,559.7442 L325.243195,563.6082 C324.657195,564.1922 323.863195,564.5202 323.036195,564.5202 C322.209195,564.5202 321.416195,564.1922 320.830195,563.6082 L316.964195,559.7442 C316.673195,559.4542 316.442195,559.1102 316.284195,558.7302 C316.126195,558.3512 316.045195,557.9452 316.045195,557.5342 C316.045195,557.1232 316.126195,556.7172 316.284195,556.3372 C316.442195,555.9582 316.673195,555.6142 316.964195,555.3242 L316.964195,555.3242 Z"
                  stroke="#CBFEFC"
                  strokeWidth="2"
                  style={{
                    transform: "translateY(-5.8225px)",
                    transformOrigin: "323.037px 557.534px",
                  }}
                ></path>
                <path
                  className="animate-[round_6s_linear_infinite]"
                  d="M488.678195,226.9562 L492.544195,223.0912 C493.130195,222.5072 493.923195,222.1792 494.750195,222.1792 C495.577195,222.1792 496.371195,222.5072 496.956195,223.0912 L500.822195,226.9562 C501.114195,227.2452 501.345195,227.5902 501.503195,227.9692 C501.660195,228.3482 501.742195,228.7552 501.742195,229.1652 C501.742195,229.5762 501.660195,229.9832 501.503195,230.3622 C501.345195,230.7412 501.114195,231.0862 500.822195,231.3752 L496.956195,235.2402 C496.371195,235.8242 495.577195,236.1522 494.750195,236.1522 C493.923195,236.1522 493.130195,235.8242 492.544195,235.2402 L488.678195,231.3752 C488.387195,231.0862 488.155195,230.7412 487.998195,230.3622 C487.840195,229.9832 487.759195,229.5762 487.759195,229.1652 C487.759195,228.7552 487.840195,228.3482 487.998195,227.9692 C488.155195,227.5902 488.387195,227.2452 488.678195,226.9562 L488.678195,226.9562 Z"
                  stroke="#CBFEFC"
                  strokeWidth="2"
                  style={{
                    transform: "translateY(5.8225px)",
                    transformOrigin: "494.751px 229.166px",
                  }}
                ></path>
                <path
                  className="animate-[altRound_9s_linear_infinite]"
                  d="M605.025195,349.0122 L615.168195,359.1522 C615.947195,359.9312 616.736195,359.6912 616.945195,358.6032 L619.182195,346.5962 C619.250195,346.3742 619.257195,346.1382 619.201195,345.9132 C619.145195,345.6872 619.028195,345.4812 618.864195,345.3172 C618.700195,345.1532 618.494195,345.0362 618.268195,344.9802 C618.043195,344.9242 617.806195,344.9312 617.584195,344.9992 L605.574195,347.2352 C604.486195,347.4352 604.237195,348.2332 605.025195,349.0122 Z"
                  stroke="#FFA48D"
                  strokeWidth="2"
                  style={{
                    transform: "translateX(2.00233px)",
                    transformOrigin: "611.902px 352.276px",
                  }}
                ></path>
                <path
                  className="animate-[round_6s_linear_infinite]"
                  d="M559.564195,533.7552 L569.707195,543.8952 C570.486195,544.6742 571.275195,544.4352 571.484195,543.3472 L573.721195,531.3402 C573.789195,531.1182 573.796195,530.8812 573.740195,530.6562 C573.684195,530.4312 573.567195,530.2252 573.403195,530.0602 C573.239195,529.8962 573.033195,529.7802 572.807195,529.7242 C572.582195,529.6682 572.345195,529.6742 572.123195,529.7432 L560.113195,531.9782 C559.025195,532.1782 558.776195,532.9772 559.564195,533.7552 Z"
                  stroke="#FFE475"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transform: "translateY(5.8225px)",
                    transformOrigin: "566.441px 537.019px",
                  }}
                ></path>
                <path
                  className="animate-[altRound_6s_linear_infinite]"
                  d="M30.9833954,422.9532 C30.9833954,423.9402 30.6905954,424.9052 30.1420954,425.7252 C29.5935954,426.5462 28.8139954,427.1862 27.9018954,427.5642 C26.9897954,427.9412 25.9861454,428.0402 25.0178554,427.8472 C24.0495654,427.6552 23.1601254,427.1802 22.4620254,426.4822 C21.7639254,425.7842 21.2885254,424.8952 21.0959154,423.9272 C20.9033154,422.9592 21.0021554,421.9552 21.3799654,421.0432 C21.7577754,420.1312 22.3975754,419.3522 23.2184454,418.8042 C24.0393254,418.2552 25.0044154,417.9622 25.9916854,417.9622 C27.3155954,417.9622 28.5851954,418.4882 29.5212954,419.4242 C30.4574954,420.3602 30.9833954,421.6292 30.9833954,422.9532 Z"
                  stroke="#63E8F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transform: "translateY(-5.8225px)",
                    transformOrigin: "25.9917px 422.953px",
                  }}
                ></path>
                <path
                  className="animate-[round_6s_linear_infinite]"
                  d="M321.193195,87.598 C321.193195,88.585 320.900195,89.5498 320.352195,90.3705 C319.803195,91.1911 319.024195,91.831 318.112195,92.2087 C317.200195,92.5864 316.196195,92.6849 315.228195,92.4924 C314.259195,92.2998 313.370195,91.8247 312.672195,91.1268 C311.974195,90.4289 311.498195,89.5397 311.306195,88.5717 C311.113195,87.6036 311.212195,86.5999 311.590195,85.6881 C311.968195,84.7762 312.607195,83.9971 313.428195,83.4487 C314.249195,82.9004 315.214195,82.6076 316.201195,82.6076 C317.525195,82.6076 318.795195,83.1332 319.731195,84.0691 C320.667195,85.005 321.193195,86.2744 321.193195,87.598 Z"
                  stroke="#63E8F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transform: "translateY(5.8225px)",
                    transformOrigin: "316.202px 87.598px",
                  }}
                ></path>
                <path
                  className="animate-[altRound_9s_linear_infinite]"
                  d="M296.550195,430.7782 C299.583195,430.7782 302.041195,428.3202 302.041195,425.2882 C302.041195,422.2562 299.583195,419.7992 296.550195,419.7992 C293.518195,419.7992 291.059195,422.2562 291.059195,425.2882 C291.059195,428.3202 293.518195,430.7782 296.550195,430.7782 Z"
                  stroke="#FFA48D"
                  strokeWidth="2"
                  style={{
                    transform: "translateY(-5.8225px)",
                    transformOrigin: "296.55px 425.289px",
                  }}
                ></path>
              </svg>
            </div>
          </div>
        </Container>
      </div>
      <section className="explore mt-5 py-24">
        <Container>
          <p className="text-xs text-center w-full font-semibold mb-5 text-hometext">
            FOR CANDIDATES
          </p>
          <h2 className="text-center  text-5xl exh1">
            Explore Thousands of Jobs
          </h2>
          <p className="exP2">
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
            Morbi mattis ullamcorper velit.
          </p>
          <CvCards />
          <div className="text-center">
            <Button
              variant="contained"
              className="flex items-center gap-2 py-3"
              color="warning"
              startIcon={<BsCloudUpload />}
            >
              Upload your cv
            </Button>
          </div>
        </Container>
      </section>
      <section className="featured   mt-16">
        <Container>
          <div className="flex  flex-wrap mb-10">
            <p className="featuredP text-center  w-full lg:w-3/12 lg:text-left">
              FEATURED JOBS
            </p>
            <h2 className="lg:w-9/12 text-center text-xl lg:text-3xl lg:text-left">
              Jobs available apply to Editorial Specialist, Account Manager,
              Human Resources Specialist and more!
            </h2>
          </div>
          <MainCard data={data} />
          <div className="text-center mt-16">
            <CustomBtn
              variant={"outlined"}
              obj={{ color: "black", px: 2, py: 1 }}
            >
              View All Jobs
              <HiOutlineArrowNarrowRight className="ml-2 text-xl" />
            </CustomBtn>
          </div>
        </Container>
      </section>
      <FullDark />
    </HomeWrapper>
  );
};

export default Home;
