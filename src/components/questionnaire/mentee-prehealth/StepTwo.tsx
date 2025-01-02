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
  interests: z.string().min(10, "Please provide more detail about your interests"),
});

type StepTwoData = z.infer<typeof stepTwoSchema>;

interface StepTwoProps {
  form: UseFormReturn<StepTwoData>;
  onNext: (data: StepTwoData) => void;
  onPrevious: () => void;
}

const StepTwo = ({ form, onNext, onPrevious }: StepTwoProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What areas of healthcare interest you the most?</FormLabel>
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
          <Button type="submit" className="w-32">
            Next Step
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepTwo;