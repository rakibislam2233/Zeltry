import { Heart, Plus, Star, StarHalf } from 'lucide-react';
import Link from 'next/link';
import { Product } from '../shared/BrowseCategories';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-card hover:shadow-card-hover transition-all duration-300 group relative">
            {product.badge && (
                <span className={`absolute top-4 left-4 text-white text-[10px] font-bold px-2 py-1 rounded ${product.badge.colorClass} z-10`}>
                    {product.badge.text}
                </span>
            )}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10">
                <Heart className="w-5 h-5" />
            </button>

            <Link href={`/product/${product.id}`} className="block h-40 w-full mb-4 rounded-lg overflow-hidden bg-white flex items-center justify-center p-2 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform duration-300"
                />
            </Link>

            <div className="flex flex-col gap-1">
                <span className="text-xs text-text-muted">{product.category}</span>
                <Link href={`/product/${product.id}`} className="font-bold text-text-main dark:text-gray-100 hover:text-primary transition-colors line-clamp-2 min-h-[48px]">
                    {product.name}
                </Link>

                <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= Math.floor(product.rating);
                        const isHalf = star === Math.ceil(product.rating) && !Number.isInteger(product.rating);

                        return (
                            <span key={star} className={`${isFilled || isHalf ? 'text-secondary' : 'text-gray-300'}`}>
                                {isHalf ? (
                                    <StarHalf className="w-3.5 h-3.5 fill-current" />
                                ) : (
                                    <Star className={`w-3.5 h-3.5 ${isFilled ? 'fill-current' : ''}`} />
                                )}
                            </span>
                        );
                    })}
                    <span className="text-xs text-text-muted ml-1">({product.rating.toFixed(1)})</span>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                        <span className={`text-xs text-text-muted line-through ${!product.originalPrice && 'opacity-0'}`}>
                            {product.originalPrice ? `$${product.originalPrice.toFixed(2)}` : '$0.00'}
                        </span>
                        <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center group-hover:w-full group-hover:rounded-lg">
                        <Plus className="w-5 h-5 group-hover:hidden" />
                        <span className="hidden group-hover:inline text-sm font-bold ml-1">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
