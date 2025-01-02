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
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

export const stepOneSchema = z.object({
  program: z.string().min(2, "Program must be at least 2 characters"),
});

type StepOneData = z.infer<typeof stepOneSchema>;

interface StepOneProps {
  form: UseFormReturn<StepOneData>;
  onNext: (data: StepOneData) => void;
}

const StepOne = ({ form, onNext }: StepOneProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
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
        <Button type="submit" className="w-full text-white">
          Next Step
        </Button>
      </form>
    </Form>
  );
};

export default StepOne;