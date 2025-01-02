import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignInForm } from "@/components/auth/SignInForm";

export default function SignIn() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your email to sign in to your account"
    >
      <SignInForm />
      <div className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-primary hover:opacity-80 transition-opacity"
        >
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
}