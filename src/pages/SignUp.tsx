import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { useToast } from "@/hooks/use-toast";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Your account has been created.",
      });
    }, 2000);
  }

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your details below to create your account"
    >
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={onSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="John"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="glass-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="glass-input"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            required
            className="glass-input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            required
            className="glass-input"
          />
        </div>
        <div className="space-y-2">
          <Label>Role</Label>
          <RadioGroup defaultValue="mentee" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mentor" id="mentor" />
              <Label htmlFor="mentor">Mentor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mentee" id="mentee" />
              <Label htmlFor="mentee">Mentee</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <RadioGroup defaultValue="pre-health" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pre-health" id="pre-health" />
              <Label htmlFor="pre-health">Pre-health</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="graduate" id="graduate" />
              <Label htmlFor="graduate">Graduate</Label>
            </div>
          </RadioGroup>
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </motion.form>
      <div className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="font-medium text-primary hover:opacity-80 transition-opacity"
        >
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
}