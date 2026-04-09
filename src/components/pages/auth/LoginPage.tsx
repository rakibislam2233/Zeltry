"use client";

import {
    authInputWithBothIconsClass,
    authInputWithLeftIconClass,
} from "@/components/forms/authFieldStyles";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-[#e6ebf1] bg-white p-6 sm:p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#253d4e] mb-2">
            Welcome Back
          </h1>
          <p className="text-[#6b7280]">
            Please enter your details to continue shopping.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-main">
                Email or Username
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={authInputWithLeftIconClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-main">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={authInputWithBothIconsClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#253d4e] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 rounded border border-gray-300 bg-white peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                <svg
                  className="absolute top-1 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-[#6b7280] transition-colors">
                Remember me
              </span>
            </label>

            <Link href="/forgot-password" className="text-sm font-medium text-primary transition-colors">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-primary text-white font-bold py-3.5 rounded-md transition-all">
            Log In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[#6b7280]">
              Or login with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-md border border-[#dce4ec] transition-colors">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-[#253d4e]">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-md border border-[#dce4ec] transition-colors">
            <Facebook className="w-5 h-5 text-[#1877F2]" fill="currentColor" />
            <span className="font-medium text-[#253d4e]">Facebook</span>
          </button>
        </div>

        <p className="text-center text-[#6b7280]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-primary transition-colors">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;