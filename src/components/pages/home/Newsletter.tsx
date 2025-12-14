
import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
    return (
        <section className="mt-10 bg-primary rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white">
                        <Mail className="w-8 h-8" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-xl font-bold">Join our newsletter</h3>
                        <p className="text-white/80 text-sm">Get email updates about our latest shop and special offers.</p>
                    </div>
                </div>
                <div className="w-full md:max-w-md">
                    <div className="flex bg-white rounded-lg p-1.5 overflow-hidden">
                        <input
                            className="flex-1 border-none focus:ring-0 px-4 text-text-main outline-none"
                            placeholder="Your email address"
                            type="email"
                        />
                        <button className="bg-text-main text-white px-6 py-2.5 rounded font-bold hover:bg-black transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;