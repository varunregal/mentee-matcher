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

export const stepTwoSchema = z.object({
  experience: z.string().min(10, "Please provide more detail about your experience"),
  achievements: z.string().min(10, "Please share your key achievements"),
  challenges: z.string().min(10, "Please share challenges you've overcome"),
});

interface StepTwoProps {
  form: UseFormReturn<z.infer<typeof stepTwoSchema>>;
  onNext: (data: z.infer<typeof stepTwoSchema>) => void;
  onPrevious: () => void;
}

const StepTwo = ({ form, onNext, onPrevious }: StepTwoProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Tell us about your experience in healthcare</FormLabel>
              <FormControl>
                <Textarea {...field} className="max-w-md min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="achievements"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">What are your key achievements in your field?</FormLabel>
              <FormControl>
                <Textarea {...field} className="max-w-md min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="challenges"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">What challenges have you overcome in your career?</FormLabel>
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
            Next Step
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepTwo;