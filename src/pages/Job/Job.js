import { useNavigate } from "react-router-dom";
import JobWrapper from "./JobWrapper";
import { AiOutlineHeart } from "react-icons/ai";
import { Button, Container, IconButton } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import Share from "../../containers/Share/index";
import { MainCard } from "../../components/mainCard";
import ButtonComponents from "../../components/Button";
import FullDark from "../../components/FullDark/FullDark";
import {
  YMaps,
  Map,
  Placemark,
  GeoObject,
  FullscreenControl,
  GeolocationControl,
  TrafficControl,
  ZoomControl,
  TypeSelector,
  ListBox,
  ListBoxItem,
  RouteButton,
  RulerControl,
  SearchControl,
} from "react-yandex-maps";

const Job = () => {
  const [heart, setHeart] = useState(false);
  const [cardHeartOne, setCardHeartOne] = useState(false);
  const [cardHeartTwo, setCardHeartTwo] = useState(false);
  const [cardHeartThree, setCardHeartThree] = useState(false);
  const navigate = useNavigate();

  const jobCards = [
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_1.png",
      link: "Senior Web Engineer",
      company: "Padberg - Bailey",
      address: "Iran",
      experiense: 10,
      time: "Part Time",
      career: "Manager",
      salary: "$12,000",
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_11.png",
      link: "Corporate Data Officer",
      company: "Altenwerth, Medhurst and Roberts",
      address: "Bermuda",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$12,000",
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_7.png",
      link: "Corporate Data Officer",
      company: "Altenwerth, Medhurst and Roberts",
      address: "Bermuda",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$ 12,000",
    },
  ];

  return (
    <JobWrapper>
      <div className=" w-screen px-4 lg:px-48 pt-32 pb-20 cont bg-black">
        <div className="w-full flex mb-20 items-center justify-start">
          <ul className="flex gap-3 items-center flex-wrap lg:flex-nowrap text-lg text-white">
            <li onClick={() => navigate(`/`)} className="hover:underline">
              Home
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li onClick={() => navigate(`/job`)} className="hover:underline">
              Jobs
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-gray-400 whitespace-nowrap">
              Marketing Coordinator
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-between items-center ">
          <div>
            <div>
              <h1 className="text-white text-3xl h1 whitespace-nowrap">
                Marketing Coordinator
              </h1>
            </div>
            <div className="mt-5">
              <ul className="flex gap-4 flex-col lg:flex-nowrap lg:flex-row mb-10 lg:mb-0 justify-start items-start">
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root  text-gray-400 text-xl css-q0bs1u"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <circle cx="6" cy="26" r="2" fill="currentColor"></circle>
                    <path
                      d="M28 18h-3v-2a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v2h-3a2.002 2.002 0 0 0-2 2v8a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2v-8a2.002 2.002 0 0 0-2-2zm-9-2h4v2h-4zm9 12H14v-8h14z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10 6h4v6h2V6h4v6h2V6h4v6h2V6.005A2.005 2.005 0 0 0 25.995 4H4.005A2.005 2.005 0 0 0 2 6.005v13.99A2.005 2.005 0 0 0 4.005 22H10zM8 20H4V6h4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="underline selection:bg-orange selection:text-white text-gray-400">
                    Design
                  </p>
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-gray-400 text-xl css-q0bs1u"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68zM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-400 whitespace-nowrap">286 views</p>
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-gray-400 text-xl css-q0bs1u"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447zM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-400">Kenya</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 justify-center ">
              <button
                onClick={() => {
                  navigate(`/`);
                }}
                className="bgbutton hover:bg-orange-600 whitespace-nowrap px-24 py-4 text-white font-bold font-sans rounded-lg"
              >
                Apply Now
              </button>
              <IconButton
                color="warning"
                onClick={() => setHeart(!heart)}
                aria-label="add to shopping cart"
              >
                {heart ? (
                  <AiOutlineHeart className="text-gray-500 w-8 h-8" />
                ) : (
                  <AiFillHeart className="w-8 h-8 text-red-500" />
                )}
              </IconButton>
            </div>
            <div className="text-center mt-5">
              <p className="text-white mr-14   ">
                Expiration date:
                <span className="text-orange"> 18 Mar 2022</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex lg:flex-nowrap sm:flex-wrap md:flex-nowrap md:px-5 lg:px-36  pt-10 pb-20">
        <div className="flex sm:px-6 sm:w-full flex-wrap lg:    lg:w-8/12">
          <h1 className="text-dark text-2xl mt-6 mb-4 h1">Job Description</h1>
          <p className="firstP">
            Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
            molestiae ut facere aut. Est quidem iusto praesentium excepturi
            harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium
            doloribus eaque debitis.
          </p>
          <ul className="ul firstP">
            <h1 className="text-dark text-3xl mt-6 mb-4 h1">
              Key Responsibilitiess
            </h1>
            <li>
              Working with agency for design drawing detail, quotation and local
              production.
            </li>
            <li>
              Produce window displays, signs, interior displays, floor plans and
              special promotions displays.
            </li>
            <li>
              Change displays to promote new product launches and reflect
              festive or seasonal themes.
            </li>
            <li>
              Planning and executing the open/renovation/ closing store
              procedure.
            </li>
            <li>
              Follow‐up store maintenance procedure and keep updating SKU In &
              Out.
            </li>
            <li>Monitor costs and work within budget.</li>
            <li>Liaise with suppliers and source elements.</li>
          </ul>
          <h1 className="text-dark text-2xl mt-6 mb-4 h1">
            Why You'll Love Working Here
          </h1>
          <ul className="ul firstP">
            <li>
              Working with agency for design drawing detail, quotation and local
              production.
            </li>
            <li>
              Produce window displays, signs, interior displays, floor plans and
              special promotions displays.
            </li>
            <li>
              Change displays to promote new product launches and reflect
              festive or seasonal themes.
            </li>
            <li>
              Planning and executing the open/renovation/ closing store
              procedure.
            </li>
            <li>
              Follow‐up store maintenance procedure and keep updating SKU In &
              Out.
            </li>
            <li>Monitor costs and work within budget.</li>
            <li>Liaise with suppliers and source elements.</li>
          </ul>
          <div className="flex flex-col">
            <h1 className="text-dark text-2xl mt-6 mb-8 h1">Job Skills</h1>
            <div className="buttonsmuted flex items-center justify-content h-8">
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                Photography
              </IconButton>
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                Design
              </IconButton>
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                Art
              </IconButton>
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                History
              </IconButton>
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                Museums
              </IconButton>
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                Creativity
              </IconButton>
              <IconButton
                aria-label="add to shopping cart"
                className="h-8 mutedbtn px-2 "
              >
                Art History
              </IconButton>
            </div>
            <h1 className="text-dark text-2xl mt-16 mb-8 h1">Other Benefits</h1>
            <div className="flex items-center justify-between h-full">
              <div className="flex flex-col gap-6 items-start justify-center">
                <div className="flex items-center gap-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-orange w-6 h-6 css-1x2vjpz"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path d="M13 19h6v2h-6z" fill="currentColor"></path>
                    <path
                      d="M25.44 14L24.17 9.45A2.009 2.009 0 0 0 22.246 8H9.754a2.009 2.009 0 0 0-1.923 1.45L6.531 14H4v2h2v7a2.002 2.002 0 0 0 2 2v3h2v-3h12v3h2v-3a2.002 2.002 0 0 0 2-2v-7h2v-2zM9.755 10h12.492l1.428 5H8.326zM24 21v2H8v-2h2v-2H8v-2h16v2h-2v2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Free parking</p>
                </div>
                <div className="flex items-center gap-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-orange h-6 w-6 css-1x2vjpz"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M10 30H8v-3H4v3H2v-3a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M30 30h-2v-3h-4v3h-2v-3a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M20 30h-2v-3h-4v3h-2v-3a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"
                      fill="currentColor"
                    ></path>
                    <circle cx="16" cy="22" r="2" fill="currentColor"></circle>
                    <circle cx="6" cy="22" r="2" fill="currentColor"></circle>
                    <circle cx="26" cy="22" r="2" fill="currentColor"></circle>
                    <circle cx="21" cy="18" r="2" fill="currentColor"></circle>
                    <circle cx="11" cy="18" r="2" fill="currentColor"></circle>
                    <path
                      d="M26 14H6a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2zM6 4v8h20V4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Training</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start">
                <div className="flex items-center gap-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-orange w-6 h-6 css-1x2vjpz"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path d="M2 22h28v2H2z" fill="currentColor"></path>
                    <path d="M2 26h28v2H2z" fill="currentColor"></path>
                    <path
                      d="M24 10a2 2 0 1 0 2 2a2 2 0 0 0-2-2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 16a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10a2 2 0 1 0 2 2a2 2 0 0 0-2-2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M28 20H4a2.005 2.005 0 0 1-2-2V6a2.005 2.005 0 0 1 2-2h24a2.005 2.005 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2zm0-14H4v12h24z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Bonus commission</p>
                </div>
                <div className="flex items-center gap-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-orange h-6 w-6 css-1x2vjpz"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M10 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zM4 16v12h6V16z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M28 4H6a2 2 0 0 0-2 2v6h2V6h22v14H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Device support</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start">
                <div className="flex items-center gap-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-orange w-6 h-6 css-1x2vjpz"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M17 14.5l6 2.5v-2l-6-3V9a1 1 0 0 0-2 0v3l-6 3v2l6-2.5V20l-3 2v1l4-1l4 1v-1l-3-2z"
                      fill-rule="evenodd"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Travel</p>
                </div>
                <div className="flex items-center gap-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root text-orange w-6 h-6 css-1x2vjpz"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M10 31H6a2.006 2.006 0 0 1-2-2v-7a2.006 2.006 0 0 1-2-2v-6a2.946 2.946 0 0 1 3-3h6a2.946 2.946 0 0 1 3 3v6a2.006 2.006 0 0 1-2 2v7a2.006 2.006 0 0 1-2 2zM5 13a.945.945 0 0 0-1 1v6h2v9h4v-9h2v-6a.945.945 0 0 0-1-1z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M28.766 4.256A4.212 4.212 0 0 0 23 4.032a4.212 4.212 0 0 0-5.766.224a4.319 4.319 0 0 0 0 6.044l5.764 5.84l.002-.002l.002.001l5.764-5.839a4.319 4.319 0 0 0 0-6.044zm-1.424 4.639l-4.34 4.397L23 13.29l-.002.002l-4.34-4.397a2.308 2.308 0 0 1 0-3.234a2.264 2.264 0 0 1 3.156 0l1.181 1.207l.005-.005l.005.005l1.18-1.207a2.264 2.264 0 0 1 3.157 0a2.308 2.308 0 0 1 0 3.234z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Health care</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <YMaps
              className="w-full h-full rounded-3xl overflow-hidden"
              query={{ lang: "ru_RU" }}
            >
              <div className="mapDiv">
                <Map
                  className="map w-full rounded-3xl overflow-hidden"
                  defaultState={{
                    center: [41.311081, 69.240562],
                    zoom: 7,
                    controls: [],
                  }}
                >
                  <Placemark geometry={[41.326488, 69.228348]} />

                  <ZoomControl options={{ float: "right" }} />
                  <TypeSelector options={{ float: "right" }} />
                  <ListBox data={{ content: "Select city" }}>
                    <ListBoxItem data={{ content: "Moscow" }} />
                    <ListBoxItem
                      data={{
                        content: "Saint Petersburg",
                      }}
                    />
                  </ListBox>
                  <RouteButton options={{ float: "right" }} />
                  <RulerControl options={{ float: "right" }} />
                  <SearchControl options={{ float: "right" }} />
                  <Button
                    className="button"
                    options={{ maxWidth: 128 }}
                    data={{ content: "Нажми на меня!" }}
                    defaultState={{ selected: true }}
                  />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
        <div className="flex  h-fit gap-2 sm:w-full flex-frap sm:flex-col md:w-full ml-16 sm:ml-4 md:ml-2  x-col   lg:w-4/12   ">
          <div className="sideCard h-fit rounded-2xl">
            <div className="flex mt-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="MuiBox-root w-6 h-6 css-9uy14h"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex  flex-col">
                <h1 className="sideH1">Date Posted</h1>
                <p className="sideP">19 Feb 2022</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="MuiBox-root w-6 h-6 css-9uy14h"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path d="M15 19h2v2h-2z" fill="currentColor"></path>
                <path d="M15 23h2v2h-2z" fill="currentColor"></path>
                <path
                  d="M23 11.67V4h3V2H6v2h3v7.67a2 2 0 0 0 .4 1.2L11.75 16L9.4 19.13a2 2 0 0 0-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 0 0-.4-1.2L20.25 16l2.35-3.13a2 2 0 0 0 .4-1.2zM21 4v7H11V4zm0 16.33V28H11v-7.67L14.25 16L12 13h8l-2.25 3z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex  flex-col">
                <h1 className="sideH1">Expiration date</h1>
                <p className="text-sm  text-red-600">19 Mar 2022</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="MuiBox-root css-1x2vjpz"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M10 30H8v-3H4v3H2v-3a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"
                  fill="currentColor"
                ></path>
                <path
                  d="M30 30h-2v-3h-4v3h-2v-3a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20 30h-2v-3h-4v3h-2v-3a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"
                  fill="currentColor"
                ></path>
                <circle cx="16" cy="22" r="2" fill="currentColor"></circle>
                <circle cx="6" cy="22" r="2" fill="currentColor"></circle>
                <circle cx="26" cy="22" r="2" fill="currentColor"></circle>
                <circle cx="21" cy="18" r="2" fill="currentColor"></circle>
                <circle cx="11" cy="18" r="2" fill="currentColor"></circle>
                <path
                  d="M26 14H6a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2zM6 4v8h20V4z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex  flex-col">
                <h1 className="sideH1">Offered Salary (month)</h1>
                <p className="sideP">competitive</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="MuiBox-root w-6 h-6 css-9uy14h"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75L23 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex  flex-col">
                <h1 className="sideH1">Experience</h1>
                <p className="sideP">1 year exp</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="MuiBox-root w-6 h-6 css-9uy14h"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z"
                  fill="currentColor"
                ></path>
                <path
                  d="M26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex  flex-col">
                <h1 className="sideH1">Level</h1>
                <p className="sideP">No experience</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="MuiBox-root w-6 h-6 css-9uy14h"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23z"
                  fill="currentColor"
                ></path>
                <path
                  d="M18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex  flex-col">
                <h1 className="sideH1">Language</h1>
                <p className="sideP">Russian, Spanish, English</p>
              </div>
            </div>
          </div>
          <div className="sideCardTwo mt-14 h-fit rounded-2xl">
            <div className="flex items-center">
              <div className="imgCard">
                <img
                  className="MuiBox-root img css-6jrdpz"
                  alt="Lueilwitz and Sons"
                  src="https://zone-assets-api.vercel.app/assets/images/companies/company_1.png"
                />
              </div>
              <div className="content ml-4">
                <h1 className="sideH12 text-lg">Lueilwitz and Sons</h1>
                <p className="sideP hover:underline">View Company Profile</p>
              </div>
            </div>
          </div>
          <div className="sideCardTHree h-fit px-8 pt-10 pb-14 rounded-2xl">
            <h1 className="text-xl text-orange hg">Jobs From This Company</h1>
            <div className="flex item flex-col py-4">
              <h1 className="hover:underline  sideH12">Senior Web Engineer</h1>
              <p className="sideP">19 Mar 2022</p>
            </div>
            <div className="flex item flex-col py-4">
              <h1 className="hover:underline  sideH12">
                Dynamic Markets Administrator
              </h1>
              <p className="sideP">19 Mar 2022</p>
            </div>
            <div className="flex flex-col py-4">
              <h1 className="hover:underline  sideH12">
                Chief Research Analyst
              </h1>
              <p className="sideP">19 Mar 2022</p>
            </div>
          </div>
          <div className="sideCardFour h-fit px-8 pt-10 pb-14 rounded-2xl">
            <div className="firstelem">
              <h4 className="text-blue-300 text-2xl ad">Advertisement</h4>
              <p className=" text-white adP">
                Duis leo. Donec orci lectus, aliquam ut, faucibus non
              </p>
              <IconButton
                aria-label="add to shopping cart"
                className=" orangebtn p-4 "
              >
                Go Now
              </IconButton>
            </div>
            <span className="parentspan"></span>
            <div className="linear"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center  sm:px-4  pt-32 pb-20  justify-start">
        <Container>
          <Share />
        </Container>
      </div>
      <Container>
        <MainCard data={jobCards} />
      </Container>
      <FullDark />
    </JobWrapper>
  );
};

export default Job;
