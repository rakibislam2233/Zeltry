'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductGallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop', // Watch Main
        'https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=1000&auto=format&fit=crop', // Watch Side
        'https://images.unsplash.com/photo-1579586337278-3c971ba30fb0?q=80&w=1000&auto=format&fit=crop', // Watch Detail
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop' // Watch Lifestyle
    ];
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square md:aspect-4/3 bg-white rounded-xl border border-gray-100 dark:border-gray-800 p-8 flex items-center justify-center overflow-hidden group">
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
