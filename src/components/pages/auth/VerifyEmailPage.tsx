'use client';
import { ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';

const VerifyEmailPage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-white dark:bg-gray-950">
           <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl dark:shadow-none border border-gray-200 dark:border-gray-800">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <Lock className="w-8 h-8" />
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-text-main dark:text-white mb-2">Verify Your Email</h1>
                    <p className="text-text-muted text-sm">We've sent a 6-digit verification code to <span className="font-bold text-text-main dark:text-white">user@example.com</span>. Please enter the code below.</p>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-center gap-2 sm:gap-4">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <input 
                                key={i}
                                type="text" 
                                maxLength={1}
                                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl font-bold rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                            />
                        ))}
                    </div>

                    <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]">
                        Verify Account
                    </button>
                    
                    <div className="text-center text-sm text-text-muted">
                        Didn't receive the code?{' '}
                        <button className="font-bold text-primary hover:text-primary-dark transition-colors">Resend</button>
                        <span className="ml-2 text-xs">(00:30)</span>
                    </div>

                    <div className="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-800">
                        <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white transition-colors">
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
