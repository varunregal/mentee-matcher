import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Stepper } from "@/components/ui/stepper-2";
import StepOne, { stepOneSchema } from "./mentor-prehealth/StepOne";
import StepTwo, { stepTwoSchema } from "./mentor-prehealth/StepTwo";
import StepThree, { stepThreeSchema } from "./mentor-prehealth/StepThree";
import StepReview from "./mentor-prehealth/StepReview";
import { z } from "zod";

type StepOneData = z.infer<typeof stepOneSchema>;
type StepTwoData = z.infer<typeof stepTwoSchema>;
type StepThreeData = z.infer<typeof stepThreeSchema>;

interface FormData {
  stepOne: StepOneData;
  stepTwo: StepTwoData;
  stepThree: StepThreeData;
}

const MentorPreHealthForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    stepOne: {
      specialty: "",
      yearsOfExperience: "",
      currentRole: "",
    },
    stepTwo: {
      experience: "",
      achievements: "",
      challenges: "",
    },
    stepThree: {
      availability: "",
      mentorshipStyle: "",
      expectations: "",
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

  const onSubmitStepOne = async (data: StepOneData) => {
    setFormData(prev => ({ ...prev, stepOne: data }));
    setStep(2);
  };

  const onSubmitStepTwo = async (data: StepTwoData) => {
    setFormData(prev => ({ ...prev, stepTwo: data }));
    setStep(3);
  };

  const onSubmitStepThree = async (data: StepThreeData) => {
    setFormData(prev => ({ ...prev, stepThree: data }));
    setStep(4);
  };

  const handleFinalSubmit = async () => {
    console.log("Final form data:", formData);
    toast({
      title: "Questionnaire submitted",
      description: "Thank you for completing the questionnaire!",
    });
  };

  const handleEdit = (stepNumber: number) => {
    setStep(stepNumber);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex justify-center mb-12">
        <Stepper currentStep={step} steps={4} />
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

      {step === 4 && (
        <StepReview
          data={formData}
          onSubmit={handleFinalSubmit}
          onEdit={handleEdit}
          onPrevious={() => setStep(3)}
        />
      )}
    </div>
  );
};

export default MentorPreHealthForm;