'use client';
import { Facebook, Heart, Linkedin, Minus, Plus, Share2, Star, Twitter } from 'lucide-react';
import { useState } from 'react';

const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);
    const options = ['Small', 'Medium', 'Large', 'XL'];

    return (
        <div className="flex flex-col gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600">In Stock</span>
                    <span className="text-gray-400 text-sm">|</span>
                    <span className="text-[#728294] text-sm">Category: Grocery</span>
                </div>
                <h1 className="text-3xl font-bold text-[#253d4e] mb-2">Seeds of Change Organic Quinoa, Brown</h1>

                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-secondary">
                        <Star className="w-4 h-4  text-yellow-500" />
                        <Star className="w-4 h-4  text-yellow-500" />
                        <Star className="w-4 h-4  text-yellow-500" />
                        <Star className="w-4 h-4  text-yellow-500" />
                        <Star className="w-4 h-4  text-yellow-500" />
                        <span className="text-[#253d4e] ml-1 font-medium bg-transparent">4.0 Review</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-[#728294] text-sm">SKU: ZU-001234</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-400 text-xl line-through">$48.00</span>
                    <span className="text-3xl font-bold text-primary">$38.00</span>
                    <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs font-bold">64% Off</span>
                </div>
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="text-[#6b7280] leading-relaxed">
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                <p className="text-sm font-semibold text-[#253d4e]">Size / Weight:</p>
                <div className="flex flex-wrap gap-2">
                    {options.map((option, idx) => (
                        <button
                            key={option}
                            type="button"
                            className={`h-8 rounded-xl border px-3 text-xs font-semibold transition-colors ${idx === 1 ? 'border-primary bg-[#effcf5] text-primary' : 'border-[#e4e9ef] text-[#4f5d77]'}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center border border-[#e1e7ee] rounded-xl h-12 w-fit bg-white">
                    <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-12 h-full flex items-center justify-center text-gray-500 transition-colors"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-[#253d4e]">{quantity}</span>
                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="w-12 h-full flex items-center justify-center text-gray-500 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>

                <button className="flex-1 bg-primary text-white font-bold rounded-xl h-12 px-8 transition-all flex items-center justify-center gap-2">
                    Add to Cart <span className="hidden sm:inline">- ${(38 * quantity).toFixed(2)}</span>
                </button>

                <button className="h-12 w-12 rounded-xl border border-[#e1e7ee] bg-white flex items-center justify-center text-gray-500 transition-all">
                    <Heart className="w-5 h-5" />
                </button>
            </div>

            <div className="w-full h-px bg-gray-100 mt-2"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <p className="text-[#728294]">Type: <span className="text-[#253d4e] font-medium">Organic</span></p>
                <p className="text-[#728294]">MFG: <span className="text-[#253d4e] font-medium">Jun 4.2022</span></p>
                <p className="text-[#728294]">LIFE: <span className="text-[#253d4e] font-medium">70 days</span></p>
                <p className="text-[#728294]">SKU: <span className="text-[#253d4e] font-medium">FGM-55688</span></p>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#253d4e]">Share item:</span>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
                        <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
                        <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
