import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundWrapper from "./404Wrapper";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NotFoundWrapper>
        <div className="container mx-auto mt-32 flex flex-col items-center justify-center gap-14">
          <p className="text-gray-600 text-lg text-center">
            Sorry, we couldn’t find the page you’re looking for. Perhaps <br />{" "}
            you’ve mistyped the URL? Be sure to check your spelling.
          </p>
          <img
            className="w-72 h-72"
            src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_404.svg"
            alt=""
          />
          <button
            onClick={() => navigate(`/`)}
            className="bgbutton px-5 py-3 text-white font-bold font-sans rounded-lg"
          >
            Go To Home
          </button>
        </div>
      </NotFoundWrapper>
    </div>
  );
};

export default NotFound;
