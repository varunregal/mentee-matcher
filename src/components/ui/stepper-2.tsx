import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
  steps: number;
}

export const Stepper = ({ currentStep, steps }: StepperProps) => {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === currentStep
                ? "bg-primary text-white"
                : step < currentStep
                ? "bg-primary/20 text-primary"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {step < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span>{step}</span>
            )}
          </div>
          {step < steps && (
            <div
              className={`w-12 h-1 mx-2 ${
                step < currentStep ? "bg-primary" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};