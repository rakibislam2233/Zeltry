'use client';
import { ArrowLeft, Eye, EyeOff, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-white dark:bg-gray-950">
            <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl dark:shadow-none border border-gray-200 dark:border-gray-800">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <RefreshCw className="w-8 h-8" />
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-text-main dark:text-white mb-2">Reset Password</h1>
                    <p className="text-text-muted text-sm">Secure your account. Your new password must be different from previously used passwords.</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main dark:text-white">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-text-main dark:hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-main dark:text-white">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Re-enter new password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Password Strength Mock */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                <span className="text-text-muted">Password Strength</span>
                                <span className="text-yellow-500">Medium</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
                                <div className="h-full w-1/4 bg-green-500"></div>
                                <div className="h-full w-1/4 bg-green-500"></div>
                                <div className="h-full w-1/4 bg-yellow-400"></div>
                                <div className="h-full w-1/4 bg-transparent"></div>
                            </div>
                            <ul className="text-xs text-text-muted space-y-1 mt-2">
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

                    <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]">
                        Reset Password
                    </button>

                    <div className="flex justify-center pt-2">
                        <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white transition-colors">
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
