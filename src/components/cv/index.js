import { Button } from "@mui/material";
import { CvWrappper } from "./wrapper";

export const CvCards = () => {
  return (
    <CvWrappper>
      <div className="flex mt-16 pt-2 flex-wrap">
        <div className="w-full cvCard  sm:w-6/12 xl:w-4/12">
          <div className="mask mask1 mb-2"></div>
          <p className="step text-center">STEP 1</p>
          <h5 className="font-Barlow text-xl font-semibold mt-2.5">
            Create an account
          </h5>
          <p>Nunc nonummy metus. Donec elit libero.</p>
        </div>
        <div className="w-full cvCard  sm:w-6/12 xl:w-4/12">
          <div className="mask mask1 mb-2"></div>
          <p className="step text-center">STEP 2</p>
          <h5 className="font-Barlow text-xl font-semibold mt-2.5">
            Complete your profile
          </h5>
          <p>Nunc nonummy metus. Donec elit libero.</p>
        </div>
        <div className="w-full cvCard  sm:w-6/12 xl:w-4/12">
          <div className="mask mask3 mb-2"></div>
          <p className="step text-center">STEP 3</p>
          <h5 className="font-Barlow text-xl font-semibold mt-2.5">
            Search your job
          </h5>
          <p>Nunc nonummy metus. Donec elit libero.</p>
        </div>
      </div>
    </CvWrappper>
  );
};
