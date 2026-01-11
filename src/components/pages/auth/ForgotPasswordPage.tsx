"use client";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-white dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
          >
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white font-bold text-xs">
              O
            </div>
            <span className="font-bold text-lg text-text-main dark:text-white">
              Zeltry
            </span>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-main dark:text-white mb-2">
            Forgot Password?
          </h1>
          <p className="text-text-muted">
            No worries! Enter the email address associated with your account and
            we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-main dark:text-white">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="user@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]">
            Send Reset Link
          </button>

          <div className="flex justify-center">
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
