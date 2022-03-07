import { Link } from "react-router-dom";
import { MainCardWrapper } from "./wrapper";
import { AiOutlineHeart, AiOutlineUser, AiFillHeart } from "react-icons/ai";
import {
  BsBarChart,
  BsClock,
  BsFillSuitHeartFill,
  BsSuitHeart,
} from "react-icons/bs";
import { MdMoney, MdOutlineLocationOn } from "react-icons/md";

import { Button, IconButton } from "@mui/material";
import CustomDivider from "../Divider";
import { useDispatch } from "react-redux";
export const MainCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <MainCardWrapper>
      <div className="flex w-full flex-wrap justify-between items-center">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-6/12 lg:w-4/12 px-5 mb-12">
            <div className=" hover:shadow-2xl rounded-lg overflow-hidden shadow-lg p-5 py-7">
              <div className="flex items-center justify-between mb-3">
                <span className="spanImg">
                  <img src={item.src}></img>
                </span>
                <IconButton
                  sx={{ "&:hover": { bgcolor: item.isLiked && "#ffebed" } }}
                  onClick={() => {
                    dispatch({
                      type: "ISLIKED",
                      payload: { key: "homeCards", id: index },
                    });
                  }}
                >
                  {item.isLiked ? (
                    <BsFillSuitHeartFill className="text-xl text-[#FC4B45]" />
                  ) : (
                    <BsSuitHeart className="text-xl" />
                  )}
                </IconButton>
              </div>
              <Link className="hover:underline font-medium text-lg " to="/">
                {item.link}
              </Link>
              <p className="text-aquaText my-2 text-sm">{item.company}</p>
              <div className="flex items-center gap-3 text-headertext">
                <MdOutlineLocationOn />
                <p className="text-sm">{item.address}</p>
              </div>
              <p className="text-headertext my-5 text-sm">
                Posted day: 22 Feb 2022
              </p>
              <CustomDivider
                orientation="horizontal"
                className={"py-0 scale-x-150 "}
              />
              <div className="flex items-center mt-4 text-headertext justify-between">
                <div>
                  <div className="flex gap-2 mb-2 items-center">
                    <BsBarChart />
                    <p>{item.experiense} Year Exp</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdMoney />
                    <p>{item.salary} </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 mb-2 items-center">
                    <BsClock />
                    <p>{item.time} </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <AiOutlineUser />
                    <p>{item.career} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainCardWrapper>
  );
};
