import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

export const stepThreeSchema = z.object({
  availability: z.string().min(2, "Please specify your availability"),
});

type StepThreeData = z.infer<typeof stepThreeSchema>;

interface StepThreeProps {
  form: UseFormReturn<StepThreeData>;
  onNext: (data: StepThreeData) => void;
  onPrevious: () => void;
}

const StepThree = ({ form, onNext, onPrevious }: StepThreeProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your preferred mentoring schedule?</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="e.g., Weekends, Evening hours" />
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

export default StepThree;