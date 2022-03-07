import { Button, Container, Divider, Drawer, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import CustomBtn from "../../components/OutlinedBtn";
import TemporaryDrawer from "../Drawer";

const Header = () => {
  const navigate = useNavigate();

  const [scrollClass, setScrollClass] = useState(window.scrollY > 80);
  const [others, setOthers] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [location, setLocation] = useState(window.location.pathname == "/");

  console.log(window.location.pathname);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 80) {
        setScrollClass(true);
      } else setScrollClass(false);
    };
    window.onresize = () => {
      setScreenWidth(window.innerWidth);
    };
  }, []);

  return (
    <>
      <header
        onClick={() => setLocation(window.location.pathname == "/")}
        style={{ transition: "0.4s" }}
        className={`blur-6px   ${
          location ? "bg-transparent" : "bg-white"
        } fixed top-0 w-full z-50 ${scrollClass && "bg-headerbg shadow-2xl"}`}
      >
        <Container>
          <div
            className={`flex h-24 items-center justify-between ${
              scrollClass && "h-20"
            }`}
          >
            <div className="flex">
              <div className="logo mr-5 w-75px relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg "
                  className="w-full h-full"
                  zwidth="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 1080 288"
                >
                  <ellipse
                    cx="996"
                    cy="204"
                    fill="#FA541C"
                    rx="60"
                    ry="60"
                  ></ellipse>
                  <path
                    fill={` ${
                      !scrollClass ? (location ? "#fff" : "#212b36") : "#212b36"
                    }`}
                    d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
                  ></path>
                </svg>
                <span className="absolute bottom-4 left-16 ml-1 text-xs font-bold text-version bg-versionbg px-1 py-0.5  rounded-md">
                  v1.2
                </span>
              </div>
              {screenWidth > 950 && (
                <ul
                  className={`flex gap-12 ml-8 text-white  font-medium text-sm ${
                    !location && "text-headertext"
                  } ${scrollClass && "text-headertext"}`}
                  onScroll={() => console.log("hello")}
                >
                  <li
                    className="cursor-pointer  flex items-center gap-3"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </li>
                  <li className="cursor-pointer relative">
                    <button
                      className="p-0 m-0 font-medium flex items-center  "
                      onClick={() => {
                        setOthers((e) => !e);
                      }}
                      onBlur={() => {
                        setTimeout(() => setOthers(false), 250);
                      }}
                    >
                      Others <BsChevronDown className="text-xs ml-1" />
                    </button>
                    {others && (
                      <ul className="w-52 absolute bg-white shadow-2xl -left-4 top-12 mt-1 p-2.5 rounded-lg text-black">
                        <li
                          className="hover:bg-slate-100 px-3 py-2 rounded-lg cursor-pointer"
                          onClick={() => navigate("/jobs")}
                        >
                          Jobs
                        </li>
                        <li
                          className="hover:bg-slate-100 px-3 py-2 rounded-lg cursor-pointer"
                          onClick={() => {
                            navigate("/job");
                            // reload();
                          }}
                        >
                          Job
                        </li>
                        <li
                          className="hover:bg-slate-100 px-3 py-2 rounded-lg cursor-pointer"
                          onClick={() => navigate("/blog-posts")}
                        >
                          Blog Posts
                        </li>
                        <li
                          className="hover:bg-slate-100 px-3 py-2 rounded-lg cursor-pointer"
                          onClick={() => navigate("/blog-post")}
                        >
                          Blog post
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </li>
                </ul>
              )}
            </div>
            <div className="flex text-white">
              <div className={`flex`}>
                <IconButton
                  className="first:hover:scale-110"
                  sx={{ marginRight: "15px" }}
                >
                  <IoIosSearch
                    className={`text-2xl ${
                      scrollClass || !location ? "text-black" : "text-white"
                    }`}
                  />
                </IconButton>
                <IconButton
                  className="first:hover:scale-110"
                  sx={{
                    "&:hover": { svg: { transform: "scale(1.1)" } },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className={`MuiBox-root css-1t9pz9x text-xl ${
                      scrollClass || !location ? "text-black" : "text-white"
                    }`}
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <circle cx="21" cy="21" r="2" fill="currentColor"></circle>
                    <circle cx="7" cy="7" r="2" fill="currentColor"></circle>
                    <path
                      d="M27 31a4 4 0 1 1 4-4a4.012 4.012 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M30 16A14.041 14.041 0 0 0 16 2a13.043 13.043 0 0 0-6.8 1.8l1.1 1.7a24.425 24.425 0 0 1 2.4-1A25.135 25.135 0 0 0 10 15H4a11.149 11.149 0 0 1 1.4-4.7L3.9 9A13.842 13.842 0 0 0 2 16a13.998 13.998 0 0 0 14 14a13.366 13.366 0 0 0 5.2-1l-.6-1.9a11.442 11.442 0 0 1-5.2.9A21.071 21.071 0 0 1 12 17h17.9a3.402 3.402 0 0 0 .1-1zM12.8 27.6a13.02 13.02 0 0 1-5.3-3.1A12.505 12.505 0 0 1 4 17h6a25.002 25.002 0 0 0 2.8 10.6zM12 15a21.446 21.446 0 0 1 3.3-11h1.4A21.446 21.446 0 0 1 20 15zm10 0a23.278 23.278 0 0 0-2.8-10.6A12.092 12.092 0 0 1 27.9 15z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </IconButton>
              </div>
              <Divider
                orientation="vertical"
                variant="middle"
                className="py-3"
                sx={{
                  borderColor: "rgba(145, 158, 171, 0.24)",
                  marginRight: "15px",
                  marginLeft: "15px",
                }}
              />
              <div className="flex gap-2 items-center">
                {screenWidth > 950 && (
                  <>
                    <CustomBtn
                      variant="outlined"
                      obj={{
                        "&:hover": {
                          borderColor: scrollClass
                            ? "black"
                            : "transparent !important",
                        },
                        color: `${
                          scrollClass || !location ? "black" : "white"
                        } `,
                        padding: "5px 15px",
                      }}
                      className="mr-10 whitespace-nowrap"
                    >
                      Join Us
                    </CustomBtn>
                    <CustomBtn variant="contained" onClick={() => {}}>
                      Buy Now
                    </CustomBtn>
                  </>
                )}
                {screenWidth < 950 && (
                  <>
                    <TemporaryDrawer
                      scrollClass={scrollClass}
                      location={location}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
