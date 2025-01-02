import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const stepOneSchema = z.object({
  specialty: z.string().min(2, "Specialty must be at least 2 characters"),
  yearsOfExperience: z.string().min(1, "Years of experience is required"),
  currentRole: z.string().min(2, "Current role must be at least 2 characters"),
});

const stepTwoSchema = z.object({
  experience: z.string().min(10, "Please provide more detail about your experience"),
  achievements: z.string().min(10, "Please share your key achievements"),
  challenges: z.string().min(10, "Please share challenges you've overcome"),
});

const stepThreeSchema = z.object({
  availability: z.string().min(2, "Please specify your availability"),
  mentorshipStyle: z.string().min(10, "Please describe your mentorship style"),
  expectations: z.string().min(10, "Please provide more detail about your expectations"),
});

const MentorPreHealthForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const stepOneForm = useForm<z.infer<typeof stepOneSchema>>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      specialty: "",
      yearsOfExperience: "",
      currentRole: "",
    },
  });

  const stepTwoForm = useForm<z.infer<typeof stepTwoSchema>>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      experience: "",
      achievements: "",
      challenges: "",
    },
  });

  const stepThreeForm = useForm<z.infer<typeof stepThreeSchema>>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      availability: "",
      mentorshipStyle: "",
      expectations: "",
    },
  });

  const onSubmitStepOne = async (data: z.infer<typeof stepOneSchema>) => {
    console.log("Step 1 data:", data);
    setStep(2);
  };

  const onSubmitStepTwo = async (data: z.infer<typeof stepTwoSchema>) => {
    console.log("Step 2 data:", data);
    setStep(3);
  };

  const onSubmitStepThree = async (data: z.infer<typeof stepThreeSchema>) => {
    console.log("Step 3 data:", data);
    toast({
      title: "Questionnaire submitted",
      description: "Thank you for completing the questionnaire!",
    });
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {[1, 2, 3].map((number) => (
        <div
          key={number}
          className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${
            step === number
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {number}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {renderStepIndicator()}
      
      {step === 1 && (
        <Form {...stepOneForm}>
          <form onSubmit={stepOneForm.handleSubmit(onSubmitStepOne)} className="space-y-6">
            <FormField
              control={stepOneForm.control}
              name="specialty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your medical specialty?</FormLabel>
                  <FormControl>
                    <Input {...field} className="glass-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={stepOneForm.control}
              name="yearsOfExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of experience in healthcare</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" className="glass-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={stepOneForm.control}
              name="currentRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current role/position</FormLabel>
                  <FormControl>
                    <Input {...field} className="glass-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
              Next Step
            </Button>
          </form>
        </Form>
      )}

      {step === 2 && (
        <Form {...stepTwoForm}>
          <form onSubmit={stepTwoForm.handleSubmit(onSubmitStepTwo)} className="space-y-6">
            <FormField
              control={stepTwoForm.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your experience in healthcare</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="glass-input min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={stepTwoForm.control}
              name="achievements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your key achievements in your field?</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="glass-input min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={stepTwoForm.control}
              name="challenges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What challenges have you overcome in your career?</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="glass-input min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="w-full"
              >
                Previous
              </Button>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                Next Step
              </Button>
            </div>
          </form>
        </Form>
      )}

      {step === 3 && (
        <Form {...stepThreeForm}>
          <form onSubmit={stepThreeForm.handleSubmit(onSubmitStepThree)} className="space-y-6">
            <FormField
              control={stepThreeForm.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your preferred mentoring schedule?</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="glass-input"
                      placeholder="e.g., Weekends, Evening hours"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={stepThreeForm.control}
              name="mentorshipStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How would you describe your mentorship style?</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="glass-input min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={stepThreeForm.control}
              name="expectations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your expectations from mentees?</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="glass-input min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="w-full"
              >
                Previous
              </Button>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default MentorPreHealthForm;