
import React from "react";
import AnimatedPage from "../../AnimatedPage";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
const GetCurentStep = ({
  value,
  formDetails,
  onChange,
  handlePrevClick,
  handleNext,
}) => {
  return (
    <>
      {value === 0 && (
        <AnimatedPage>
          <Step1
            formDetails={formDetails}
            onChange={onChange}
            handleNext={handleNext}
          />
        </AnimatedPage>
      )}

      {value === 1 && (
        <AnimatedPage>
          <Step2
            formDetails={formDetails}
            onChange={onChange}
            handleNext={handleNext}
            handlePrevClick={handlePrevClick}
          />
        </AnimatedPage>
      )}
      {value === 2 && (
        <AnimatedPage>
          <Step3
            formDetails={formDetails}
            onChange={onChange}
            handleNext={handleNext}
            handlePrevClick={handlePrevClick}
          />
        </AnimatedPage>
      )}
    </>
  );
};

export default React.memo(GetCurentStep);
