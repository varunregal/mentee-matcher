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
import { Stepper } from "@/components/ui/stepper-2";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  currentStatus: z.string().min(2, "Please specify your current status"),
  interests: z.string().min(10, "Please provide more detail about your interests"),
  goals: z.string().min(10, "Please provide more detail about your goals"),
  questions: z.string().min(10, "Please provide your questions or concerns"),
});

const MenteePreHealthForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentStatus: "",
      interests: "",
      goals: "",
      questions: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Questionnaire submitted",
      description: "Thank you for completing the questionnaire!",
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FormField
            control={form.control}
            name="currentStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your current academic status?</FormLabel>
                <FormControl>
                  <Input {...field} className="glass-input" placeholder="e.g., Undergraduate Junior" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 2:
        return (
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What areas of healthcare interest you the most?</FormLabel>
                <FormControl>
                  <Textarea {...field} className="glass-input min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 3:
        return (
          <FormField
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are your career goals in healthcare?</FormLabel>
                <FormControl>
                  <Textarea {...field} className="glass-input min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 4:
        return (
          <FormField
            control={form.control}
            name="questions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What specific questions or concerns do you have about pursuing a healthcare career?</FormLabel>
                <FormControl>
                  <Textarea {...field} className="glass-input min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex justify-center mb-12">
        <Stepper currentStep={step} steps={4} />
      </div>
      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {renderStep()}
            <div className="flex gap-4 justify-center mt-8">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="w-32"
                >
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="w-32 bg-primary text-white hover:bg-primary/90"
                >
                  Next Step
                </Button>
              ) : (
                <Button type="submit" className="w-48 bg-primary text-white hover:bg-primary/90">
                  Submit Questionnaire
                </Button>
              )}
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default MenteePreHealthForm;