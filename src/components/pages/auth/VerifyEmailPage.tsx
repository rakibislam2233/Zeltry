"use client";

import { authOtpInputClass } from "@/components/forms/authFieldStyles";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

const VerifyEmailPage = () => {
    return (
        <div className="mx-auto mt-4 sm:mt-6 w-full max-w-md rounded-3xl border border-[#e6ebf1] bg-white p-6 sm:p-8">
            <div className="space-y-8">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Lock className="w-8 h-8" />
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#253d4e] mb-2">Verify Your Email</h1>
                    <p className="text-[#6b7280] text-sm">We&apos;ve sent a 6-digit verification code to <span className="font-bold text-[#253d4e]">user@example.com</span>. Please enter the code below.</p>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-center gap-2 sm:gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className={`w-10 h-10 sm:w-12 sm:h-12 ${authOtpInputClass}`}
                            />
                        ))}
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-3.5 rounded-md transition-all">
                        Verify Account
                    </button>

                    <div className="text-center text-sm text-[#6b7280]">
                        Didn&apos;t receive the code?{" "}
                        <button className="font-bold text-primary transition-colors">Resend</button>
                        <span className="ml-2 text-xs">(00:30)</span>
                    </div>

                    <div className="flex justify-center pt-4 border-t border-gray-200">
                        <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-[#6b7280] transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmailPage;
