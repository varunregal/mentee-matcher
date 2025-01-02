import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

export const stepFourSchema = z.object({
  questions: z.string().min(10, "Please provide your questions or concerns"),
});

type StepFourData = z.infer<typeof stepFourSchema>;

interface StepFourProps {
  form: UseFormReturn<StepFourData>;
  onSubmit: (data: StepFourData) => void;
  onPrevious: () => void;
}

const StepFour = ({ form, onSubmit, onPrevious }: StepFourProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What specific questions or concerns do you have about pursuing a healthcare career?</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 justify-center mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevious}
            className="w-32"
          >
            Previous
          </Button>
          <Button type="submit" className="w-48">
            Submit Questionnaire
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepFour;