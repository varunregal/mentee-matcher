import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignUpForm } from "@/components/auth/SignUpForm";

export default function SignUp() {
  return (
    <AuthLayout
      title="Join Project Short"
      subtitle="Connect with mentors and peers in healthcare"
    >
      <SignUpForm />
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