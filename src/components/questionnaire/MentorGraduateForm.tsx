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

const formSchema = z.object({
  field: z.string().min(2, "Field must be at least 2 characters"),
  experience: z.string().min(10, "Please provide more detail about your experience"),
  availability: z.string().min(2, "Please specify your availability"),
  expectations: z.string().min(10, "Please provide more detail about your expectations"),
});

const MentorGraduateForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      field: "",
      experience: "",
      availability: "",
      expectations: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Questionnaire submitted",
      description: "Thank you for completing the questionnaire!",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="field"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your field of study or research area?</FormLabel>
              <FormControl>
                <Input {...field} className="glass-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your graduate school experience</FormLabel>
              <FormControl>
                <Textarea {...field} className="glass-input min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your preferred mentoring schedule?</FormLabel>
              <FormControl>
                <Input {...field} className="glass-input" placeholder="e.g., Weekends, Evening hours" />
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
              <FormLabel>What are your expectations from mentees?</FormLabel>
              <FormControl>
                <Textarea {...field} className="glass-input min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
          Submit Questionnaire
        </Button>
      </form>
    </Form>
  );
};

export default MentorGraduateForm;