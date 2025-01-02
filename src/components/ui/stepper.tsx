import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
  steps: number;
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex w-full items-center">
      {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex-1 flex items-center">
          <div className="flex items-center relative">
            <div
              className={cn(
                "w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-200",
                step === currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : step < currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground/25 text-muted-foreground"
              )}
            >
              {step < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{step}</span>
              )}
            </div>
            {step !== steps && (
              <div
                className={cn(
                  "h-[2px] w-24 transition-all duration-200",
                  step < currentStep
                    ? "bg-primary"
                    : "bg-muted-foreground/25"
                )}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}