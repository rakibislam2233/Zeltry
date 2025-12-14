'use client';
import { Facebook, Heart, Linkedin, Minus, Plus, Share2, Star, Twitter } from 'lucide-react';
import { useState } from 'react';

const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 font-bold text-sm bg-green-500/10 px-2 py-0.5 rounded">In Stock</span>
                    <span className="text-gray-400 text-sm">|</span>
                    <span className="text-text-muted text-sm">Category: Electronics</span>
                </div>
                <h1 className="text-3xl font-bold text-text-main dark:text-white mb-2">Series 7 Smart Watch with Health Tracking</h1>

                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-secondary">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span className="text-text-main dark:text-gray-300 ml-1 font-medium bg-transparent">4.0 Review</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-text-muted text-sm">SKU: ZU-001234</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-400 text-xl line-through">$48.00</span>
                    <span className="text-3xl font-bold text-primary">$399.00</span>
                    <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs font-bold">64% Off</span>
                </div>
            </div>

            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="text-text-muted leading-relaxed">
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-full h-12 w-fit bg-white dark:bg-gray-800">
                    <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-text-main dark:text-white">{quantity}</span>
                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>

                <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold rounded-full h-12 px-8 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    Add to Cart <span className="hidden sm:inline">- ${(399 * quantity).toFixed(2)}</span>
                </button>

                <button className="h-12 w-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-500 transition-all">
                    <Heart className="w-5 h-5" />
                </button>
            </div>

            <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mt-2"></div>

            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-text-main dark:text-white">Share item:</span>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                        <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
