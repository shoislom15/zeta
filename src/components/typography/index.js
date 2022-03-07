import CustomDivider from "../Divider";
import { TypographyWrapper } from "./wrapper";

const numeral = require("numeral");
export const Typography = ({ className = "" }) => {
  return (
    <TypographyWrapper className={className}>
      <div className="flex flex-wrap items-center justify-between px-14 900px:px-0">
        <div className="text-left my-5">
          <h4 className="text-2xl font-Poppins">
            {numeral(2000000).format("0a+")}
          </h4>
          <p className="text-sm font-medium mt-1">Jobs</p>
        </div>
        <CustomDivider obj={{ borderStyle: "dashed", height: 70 }} />
        <div className="text-left my-5">
          <h4 className="text-2xl font-Poppins">
            {numeral(500000).format("0a+")}
          </h4>
          <p className="text-sm font-medium mt-1">Successful Hiring</p>
        </div>
        <CustomDivider obj={{ borderStyle: "dashed", height: 70 }} />
        <div className="text-left my-5">
          <h4 className="text-2xl font-Poppins">
            {numeral(250000).format("0a+")}
          </h4>
          <p className="text-sm font-medium mt-1">Partners</p>
        </div>
        <CustomDivider obj={{ borderStyle: "dashed", height: 70 }} />
        <div className="text-left  my-5">
          <h4 className="text-2xl font-Poppins">
            {numeral(156000).format("0a+")}
          </h4>
          <p className="text-sm font-medium mt-1">Employee</p>
        </div>
      </div>
    </TypographyWrapper>
  );
};
