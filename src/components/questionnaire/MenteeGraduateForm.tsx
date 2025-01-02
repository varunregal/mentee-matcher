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
  program: z.string().min(2, "Program must be at least 2 characters"),
  research: z.string().min(10, "Please provide more detail about your research interests"),
  challenges: z.string().min(10, "Please provide more detail about your challenges"),
  support: z.string().min(10, "Please specify what kind of support you're looking for"),
});

const MenteeGraduateForm = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      program: "",
      research: "",
      challenges: "",
      support: "",
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
            name="program"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What graduate program are you interested in?</FormLabel>
                <FormControl>
                  <Input {...field} className="glass-input" placeholder="e.g., PhD in Biomedical Sciences" />
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
            name="research"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are your research interests?</FormLabel>
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
            name="challenges"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What challenges are you facing in your graduate journey?</FormLabel>
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
            name="support"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What kind of mentoring support are you looking for?</FormLabel>
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

export default MenteeGraduateForm;