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
  expectations: z.string().min(10, "Please provide more detail about your expectations"),
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
          name="expectations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are your expectations from mentees?</FormLabel>
              <FormControl>
                <Textarea {...field} className="bg-white min-h-[100px]" />
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