import { Heart, Plus, Star, StarHalf } from 'lucide-react';
import Link from 'next/link';
import { Product } from '../shared/BrowseCategories';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm hover:shadow-xl transition-all duration-300 group relative flex flex-col h-full">
            {product.badge && (
                <span className={`absolute top-4 left-4 text-white text-[10px] font-bold px-2.5 py-1 rounded-full ${product.badge.colorClass} z-10 shadow-sm`}>
                    {product.badge.text}
                </span>
            )}
            <button className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all z-10 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
                <Heart className="w-4 h-4" />
            </button>

            <Link href={`/product/${product.id}`} className="block relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800/50 md:flex items-center justify-center p-6 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
            </Link>

            <div className="flex flex-col flex-1 gap-2">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">{product.category}</span>
                <Link href={`/product/${product.id}`} className="font-bold text-base text-text-main dark:text-gray-100 hover:text-primary transition-colors line-clamp-2" title={product.name}>
                    {product.name}
                </Link>

                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= Math.floor(product.rating);
                        const isHalf = star === Math.ceil(product.rating) && !Number.isInteger(product.rating);

                        return (
                            <span key={star} className={`${isFilled || isHalf ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`}>
                                {isHalf ? (
                                    <StarHalf className="w-3.5 h-3.5 fill-current" />
                                ) : (
                                    <Star className={`w-3.5 h-3.5 ${isFilled ? 'fill-current' : ''}`} />
                                )}
                            </span>
                        );
                    })}
                    <span className="text-xs text-text-muted ml-1 font-medium">({product.rating.toFixed(1)})</span>
                </div>

                <div className="mt-auto pt-4 flex items-end justify-between gap-2">
                    <div className="flex flex-col">
                        <span className={`text-xs text-text-muted line-through font-medium ${!product.originalPrice && 'opacity-0'}`}>
                            {product.originalPrice ? `$${product.originalPrice.toFixed(2)}` : '$0.00'}
                        </span>
                        <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                    </div>

                    <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white text-text-main dark:text-white px-4 py-2 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-primary/30">
                        <Plus className="w-4 h-4" />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
