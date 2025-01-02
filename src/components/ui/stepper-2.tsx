import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
  steps: number;
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "h-10 w-10 rounded-full border-2 flex items-center justify-center transition-all duration-200",
              step === currentStep
                ? "border-primary bg-primary text-primary-foreground"
                : step < currentStep
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted-foreground/25"
            )}
          >
            {step < currentStep ? (
              <Check className="h-5 w-5" />
            ) : (
              <span className="text-sm font-medium">{step}</span>
            )}
          </div>
          {step !== steps && (
            <div
              className={cn(
                "h-[2px] w-16 mx-2",
                step < currentStep ? "bg-primary" : "bg-muted-foreground/25"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}