import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Stepper } from "@/components/ui/stepper-2";
import { Card } from "@/components/ui/card";
import StepOne, { stepOneSchema } from "./mentee-graduate/StepOne";
import StepTwo, { stepTwoSchema } from "./mentee-graduate/StepTwo";
import StepThree, { stepThreeSchema } from "./mentee-graduate/StepThree";
import StepFour, { stepFourSchema } from "./mentee-graduate/StepFour";
import { z } from "zod";

type StepOneData = z.infer<typeof stepOneSchema>;
type StepTwoData = z.infer<typeof stepTwoSchema>;
type StepThreeData = z.infer<typeof stepThreeSchema>;
type StepFourData = z.infer<typeof stepFourSchema>;

interface FormData {
  stepOne: Required<StepOneData>;
  stepTwo: Required<StepTwoData>;
  stepThree: Required<StepThreeData>;
  stepFour: Required<StepFourData>;
}

const MenteeGraduateForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    stepOne: {
      program: "",
    },
    stepTwo: {
      research: "",
    },
    stepThree: {
      challenges: "",
    },
    stepFour: {
      support: "",
    },
  });

  const stepOneForm = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: formData.stepOne,
  });

  const stepTwoForm = useForm<StepTwoData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: formData.stepTwo,
  });

  const stepThreeForm = useForm<StepThreeData>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: formData.stepThree,
  });

  const stepFourForm = useForm<StepFourData>({
    resolver: zodResolver(stepFourSchema),
    defaultValues: formData.stepFour,
  });

  const onSubmitStepOne = async (data: StepOneData) => {
    setFormData(prev => ({ ...prev, stepOne: data as Required<StepOneData> }));
    setStep(2);
  };

  const onSubmitStepTwo = async (data: StepTwoData) => {
    setFormData(prev => ({ ...prev, stepTwo: data as Required<StepTwoData> }));
    setStep(3);
  };

  const onSubmitStepThree = async (data: StepThreeData) => {
    setFormData(prev => ({ ...prev, stepThree: data as Required<StepThreeData> }));
    setStep(4);
  };

  const onSubmitStepFour = async (data: StepFourData) => {
    setFormData(prev => ({ ...prev, stepFour: data as Required<StepFourData> }));
    console.log("Final form data:", formData);
    toast({
      title: "Questionnaire submitted",
      description: "Thank you for completing the questionnaire!",
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex justify-center mb-12">
        <Stepper currentStep={step} steps={4} />
      </div>
      <Card className="p-6">
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
            onNext={onSubmitStepThree}
            onPrevious={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <StepFour
            form={stepFourForm}
            onSubmit={onSubmitStepFour}
            onPrevious={() => setStep(3)}
          />
        )}
      </Card>
    </div>
  );
};

export default MenteeGraduateForm;