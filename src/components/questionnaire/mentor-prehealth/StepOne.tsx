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
  specialty: z.string().min(2, "Specialty must be at least 2 characters"),
  yearsOfExperience: z.string().min(1, "Years of experience is required"),
  currentRole: z.string().min(2, "Current role must be at least 2 characters"),
});

interface StepOneProps {
  form: UseFormReturn<z.infer<typeof stepOneSchema>>;
  onNext: (data: z.infer<typeof stepOneSchema>) => void;
}

const StepOne = ({ form, onNext }: StepOneProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <FormField
          control={form.control}
          name="specialty"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">What is your medical specialty?</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsOfExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Years of experience in healthcare</FormLabel>
              <FormControl>
                <Input {...field} type="number" className="max-w-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Current role/position</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full max-w-md">
          Next Step
        </Button>
      </form>
    </Form>
  );
};

export default StepOne;