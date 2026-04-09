'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductGallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop'
    ];
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative rounded-xl border border-[#e5e9ef] bg-white p-4">
                <img
                    src={images[selectedImage]}
                    alt="Product"
                    className="h-[360px] w-full rounded-lg object-cover"
                />

                <button
                    onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#e5e9ef] flex items-center justify-center text-[#4f5d77] hover:text-primary transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#e5e9ef] flex items-center justify-center text-[#4f5d77] hover:text-primary transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-5 gap-3">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-square bg-white rounded-xl border p-2 cursor-pointer transition-all ${selectedImage === idx ? 'border-primary' : 'border-[#e5e9ef] hover:border-primary/50'}`}
                    >
                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
