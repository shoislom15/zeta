import Highlights from "../../components/Highlight/index";
import CustomDivider from "../../components/Divider";

const HighlightGroup = ({ className = "" }) => {
  return (
    <div
      className={`bg-white flex py-2 rounded-lg px-0 items-center ${className}`}
    >
      <div className="flex flex-1 pl-3">
        <div className="ml-2 h-12 w-12 mr-2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="MuiBox-root css-gvh5lz w-6 h-6 text-slate-400"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <Highlights
          value="smth"
          className="w-full"
          placeholder="Job title, keyword"
        />
      </div>
      <CustomDivider obj={{ pl: "5px" }} />
      <div className="flex flex-1 pr-2">
        <div className="ml-2 h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="MuiBox-root css-gvh5lz w-6 h-6 text-slate-400"
            sx="[object Object]"
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
        </div>
        <Highlights className="w-full" placeholder="Locations" />
      </div>
      <button className="bg-orange w-12 h-12 flex mr-2  items-center justify-center rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="MuiBox-root css-gvh5lz w-6 h-6 text-white"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default HighlightGroup;
