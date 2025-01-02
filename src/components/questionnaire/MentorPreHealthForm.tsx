import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Stepper } from "@/components/ui/stepper-2";
import StepOne, { stepOneSchema } from "./mentor-prehealth/StepOne";
import StepTwo, { stepTwoSchema } from "./mentor-prehealth/StepTwo";
import StepThree, { stepThreeSchema } from "./mentor-prehealth/StepThree";
import { z } from "zod";

type StepOneData = z.infer<typeof stepOneSchema>;
type StepTwoData = z.infer<typeof stepTwoSchema>;
type StepThreeData = z.infer<typeof stepThreeSchema>;

const MentorPreHealthForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const stepOneForm = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      specialty: "",
      yearsOfExperience: "",
      currentRole: "",
    },
  });

  const stepTwoForm = useForm<StepTwoData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      experience: "",
      achievements: "",
      challenges: "",
    },
  });

  const stepThreeForm = useForm<StepThreeData>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      availability: "",
      mentorshipStyle: "",
      expectations: "",
    },
  });

  const onSubmitStepOne = async (data: StepOneData) => {
    console.log("Step 1 data:", data);
    setStep(2);
  };

  const onSubmitStepTwo = async (data: StepTwoData) => {
    console.log("Step 2 data:", data);
    setStep(3);
  };

  const onSubmitStepThree = async (data: StepThreeData) => {
    console.log("Step 3 data:", data);
    toast({
      title: "Questionnaire submitted",
      description: "Thank you for completing the questionnaire!",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-12">
        <Stepper currentStep={step} steps={3} />
      </div>
      
      {step === 1 && (
        <StepOne 
          form={stepOneForm} 
          onNext={onSubmitStepOne}
        />
      )}

      {step === 2 && (
        <StepTwo 
          form={stepTwoForm}
          onNext={onSubmitStepTwo}
          onPrevious={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <StepThree 
          form={stepThreeForm}
          onSubmit={onSubmitStepThree}
          onPrevious={() => setStep(2)}
        />
      )}
    </div>
  );
};

export default MentorPreHealthForm;