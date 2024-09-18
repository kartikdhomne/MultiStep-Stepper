import React, { useState } from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, stepsConfig.length));
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <div>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            className={`step ${currentStep > index + 1 ? "complete" : ""} ${
              currentStep === index + 1 ? "active" : ""
            }`}
          >
            <div className="step-number">
              {currentStep > index + 1 || currentStep === stepsConfig.length ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((currentStep - 1) / (stepsConfig.length - 1)) * 100}%`,
          }}
        ></div>
      </div>

      <ActiveComponent />

      {currentStep < stepsConfig.length && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default CheckoutStepper;
