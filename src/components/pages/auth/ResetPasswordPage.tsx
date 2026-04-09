"use client";

import {
    authInputClass,
    authInputWithBothIconsClass,
} from "@/components/forms/authFieldStyles";
import { ArrowLeft, Eye, EyeOff, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-[#e6ebf1] bg-white p-6 sm:p-8">
            <div className="space-y-8">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <RefreshCw className="w-8 h-8" />
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#253d4e] mb-2">Reset Password</h1>
                    <p className="text-[#6b7280] text-sm">Secure your account. Your new password must be different from previously used passwords.</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    className={authInputWithBothIconsClass}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Re-enter new password"
                                    className={authInputClass}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                <span className="text-[#6b7280]">Password Strength</span>
                                <span className="text-yellow-500">Medium</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                <div className="h-full w-1/4 bg-green-500"></div>
                                <div className="h-full w-1/4 bg-green-500"></div>
                                <div className="h-full w-1/4 bg-yellow-400"></div>
                                <div className="h-full w-1/4 bg-transparent"></div>
                            </div>
                            <ul className="text-xs text-[#6b7280] space-y-1 mt-2">
                                <li className="flex items-center gap-2 text-green-500">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    At least 8 characters
                                </li>
                                <li className="flex items-center gap-2 text-green-500">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    Contains a number
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                                    Contains a special character
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl transition-all">
                        Reset Password
                    </button>

                    <div className="flex justify-center pt-2">
                        <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-[#6b7280] transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
