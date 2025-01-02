import { cn } from "@/lib/utils";

interface StepperProps {
  currentStep: number;
  steps: number;
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="relative flex justify-between">
      {/* Progress Line */}
      <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="relative flex w-full justify-between">
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300",
              step === currentStep
                ? "border-purple-500 bg-white text-purple-500 shadow-lg scale-110"
                : step < currentStep
                ? "border-purple-500 bg-purple-500 text-white"
                : "border-gray-200 bg-white text-gray-400"
            )}
          >
            {step < currentStep ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              step
            )}
          </div>
        ))}
      </div>
    </div>
  );
}