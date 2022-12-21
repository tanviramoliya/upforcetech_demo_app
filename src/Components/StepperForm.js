import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstStep from "./FirstStep";
import {
  FirstStepSchema,
  SecondStepSchema,
} from "../utils/yupValidationSchema";
import { Form, Formik } from "formik";
import {
  firstStepInitValues,
  secondStepStepInitValues,
} from "../utils/initialValues";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];
const STEPS = {
  FIRST_STEP: 0,
  SECOND_STEP: 1,
  FINAL_STEP: 2,
};

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepButton color="inherit">{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          <Formik
            initialValues={
              activeStep === 0 ? firstStepInitValues : secondStepStepInitValues
            }
            validationSchema={
              activeStep === 0 ? FirstStepSchema : SecondStepSchema
            }
            enableReinitialize
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              if (activeStep === 0) {
                localStorage.setItem("step1", JSON.stringify(values));
              }
              if (activeStep === 1) {
                localStorage.setItem("step2", JSON.stringify(values));
              }
              handleNext();
            }}
          >
            {({ errors, touched }) => (
              <>
                <Form>
                  <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                    {activeStep === STEPS.FIRST_STEP && (
                      <FirstStep errors={errors} touched={touched} />
                    )}
                    {activeStep === STEPS.SECOND_STEP && (
                      <SecondStep errors={errors} touched={touched} />
                    )}
                    {activeStep === STEPS.FINAL_STEP && <ThirdStep />}
                  </Typography>
                  {activeStep !== STEPS.FINAL_STEP && (
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button sx={{ mr: 1 }} type="submit">
                        Next
                      </Button>
                    </Box>
                  )}
                </Form>
              </>
            )}
          </Formik>
        </React.Fragment>
      </div>
    </Box>
  );
}
