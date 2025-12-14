'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductGallery = () => {
    const images = [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqW12_e4r5_t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7,',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtP22_w-C3_a9b_7vR8o1WfJ5q2xY3z4e5r6t7y8u9i0o1p2a3s4d5f6g7h8j9k0l1',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCsD12_f3g4_h5j6k7l8z9x0c1v2b3n4m5,',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD_1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m'
    ];
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square md:aspect-[4/3] bg-white rounded-xl border border-gray-100 dark:border-gray-800 p-8 flex items-center justify-center overflow-hidden group">
                <img
                    src={images[selectedImage]}
                    alt="Product"
                    className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-110"
                />

                {/* Navigation Arrows (Optional, but good for UX) */}
                <button
                    onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-square bg-white rounded-lg border p-2 cursor-pointer transition-all ${selectedImage === idx ? 'border-primary ring-1 ring-primary' : 'border-gray-100 dark:border-gray-800 hover:border-primary/50'}`}
                    >
                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
