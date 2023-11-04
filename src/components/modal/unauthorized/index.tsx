import React, { ReactNode, useState, useEffect } from "react";
import BasicModal from "../basic-modal";
import { AiOutlineLeft } from "react-icons/ai";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import { Step1, Step2, Step3 } from "../../../assets";
import baseColors from "../../../constant";
import GradientButton from "../../button/gradient-button";

type UnAuthorizedModal = {
  onClick: any;
  show?: any;
  onOk?: any;
  onCancel?: any;
};

export default function UnAuthorizedModal(props: UnAuthorizedModal) {
  const { onClick, show, onOk, onCancel } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const theme = useTheme();

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSignUp = () => {
    setCurrentStep(3);
    if (onOk) {
      onOk();
    } else if (onCancel) {
      onCancel();
    }
  };

  const handleSkip = () => {
    setCurrentStep(3);
  };

  return (
    <>
      <BasicModal modalshow={show}>
        <div className="">
          <div className=" row m-0 p-0 d-flex justify-content-between align-item-center ">
            <div className="col">
              <AiOutlineLeft onClick={handleBack} size={15} />
            </div>
            <div className="col-2 text-end">
              <span onClick={onClick}>skip</span>
            </div>
          </div>
          <div className="row p-0 m-0 d-flex justify-content-center  text-center">
            <h3
              style={{
                fontWeight: "bolder",
                fontSize: "2em",
                color: baseColors.dark,
              }}
            >
              Welcome to
              <span
                style={{
                  paddingLeft: "5px",
                  color: baseColors.green,
                }}
              >
                e-learning
              </span>
            </h3>
            <h6
              style={{
                fontWeight: "bolder",
                fontSize: "1em",
                color: baseColors.dark,
              }}
            >
              explore us
            </h6>
            {currentStep === 1 && (
              <div className="row p-0 m-0 d-flex justify-content-center">
                <img src={Step1} height="350px" />
                <GradientButton onClick={handleNext} label="Next"/>
              </div>
            )}

            {currentStep === 2 && (
              <div className="row p-0 m-0 d-flex justify-content-center">
                <img src={Step2} height="350px" />
                <GradientButton onClick={handleNext} label="Next"/>
              </div>
            )}

            {currentStep === 3 && (
              <div className="row p-0 m-0 d-flex justify-content-center">
                <img src={Step3} height="350px" />
                <GradientButton onClick={onClick} label="Next"/>
              </div>
            )}
            <MobileStepper
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1}}
              className="d-flex flex-column"
              nextButton={
                <Button
                  size="small"
                  className="d-none"
                  disabled={activeStep === 2}
                >
                  Next
                </Button>
              }
              backButton={
                <Button size="small" className="d-none">
                  Back
                </Button>
              }
            />
          </div>
        </div>
      </BasicModal>
    </>
  );
}
