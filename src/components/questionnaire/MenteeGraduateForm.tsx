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
  program: z.string().min(2, "Program must be at least 2 characters"),
  research: z.string().min(10, "Please provide more detail about your research interests"),
  challenges: z.string().min(10, "Please provide more detail about your challenges"),
  support: z.string().min(10, "Please specify what kind of support you're looking for"),
});

const MenteeGraduateForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      program: "",
      research: "",
      challenges: "",
      support: "",
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

        <FormField
          control={form.control}
          name="research"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are your research interests?</FormLabel>
              <FormControl>
                <Textarea {...field} className="glass-input min-h-[100px]" />
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
              <FormLabel>What challenges are you facing in your graduate journey?</FormLabel>
              <FormControl>
                <Textarea {...field} className="glass-input min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="support"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What kind of mentoring support are you looking for?</FormLabel>
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

export default MenteeGraduateForm;