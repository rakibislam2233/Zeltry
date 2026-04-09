"use client";

import { authInputWithLeftIconClass } from "@/components/forms/authFieldStyles";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-[#e6ebf1] bg-white p-6 sm:p-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#253d4e] mb-2">
            Forgot Password?
          </h1>
          <p className="text-[#6b7280]">
            No worries! Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-main">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="user@example.com"
                className={authInputWithLeftIconClass}
              />
            </div>
          </div>

          <button className="w-full bg-primary text-white font-bold py-3.5 rounded-md transition-all">
            Send Reset Link
          </button>

          <div className="flex justify-center">
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-medium text-[#6b7280] transition-colors"
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
