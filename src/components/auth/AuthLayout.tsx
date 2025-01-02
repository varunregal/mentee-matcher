import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-indigo-50 to-indigo-100 opacity-50" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <div className="relative">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-semibold tracking-tight mb-2 text-gray-900">{title}</h1>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}