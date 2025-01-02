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
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

export const stepThreeSchema = z.object({
  availability: z.string().min(2, "Please specify your availability"),
  mentorshipStyle: z.string().min(10, "Please describe your mentorship style"),
  expectations: z.string().min(10, "Please provide more detail about your expectations"),
});

type StepThreeData = z.infer<typeof stepThreeSchema>;

interface StepThreeProps {
  form: UseFormReturn<StepThreeData>;
  onSubmit: (data: StepThreeData) => void;
  onPrevious: () => void;
}

const StepThree = ({ form, onSubmit, onPrevious }: StepThreeProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">What is your preferred mentoring schedule?</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="max-w-md"
                  placeholder="e.g., Weekends, Evening hours"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mentorshipStyle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">How would you describe your mentorship style?</FormLabel>
              <FormControl>
                <Textarea {...field} className="max-w-md min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expectations"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">What are your expectations from mentees?</FormLabel>
              <FormControl>
                <Textarea {...field} className="max-w-md min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 max-w-md">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevious}
            className="flex-1"
          >
            Previous
          </Button>
          <Button type="submit" className="flex-1">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepThree;