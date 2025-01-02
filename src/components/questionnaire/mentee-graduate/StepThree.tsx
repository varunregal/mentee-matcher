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

export const stepThreeSchema = z.object({
  challenges: z.string().min(10, "Please provide more detail about your challenges"),
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
        <div className="flex gap-4 justify-center mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevious}
            className="w-32"
          >
            Previous
          </Button>
          <Button type="submit" className="w-32 text-white">
            Next Step
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepThree;