import { Eye, Heart, ShoppingBag, Star } from "lucide-react";

interface ProductCardProps {
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    category: string;
    isNew?: boolean;
    discount?: number;
}

export function ProductCard({ name, price, originalPrice, rating, image, category, isNew, discount }: ProductCardProps) {
    return (
        <div className="group relative transition-all hover:shadow-lg hover:shadow-primary/10 rounded-lg p-2">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {discount && (
                    <span className="bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
                        Sale {discount}%
                    </span>
                )}
                {isNew && (
                    <span className="bg-[#00B207] text-white text-xs font-medium px-2 py-1 rounded">
                        New
                    </span>
                )}
            </div>

            {/* Hover Actions */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="h-9 w-9 rounded-full bg-background border shadow-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    <Heart className="h-4 w-4" />
                </button>
                <button className="h-9 w-9 rounded-full bg-background border shadow-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    <Eye className="h-4 w-4" />
                </button>
            </div>

            {/* Image */}
            <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
                <div className="w-full h-full flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    {/* Placeholder Emoji - Replace with Next/Image */}
                    <span className="text-6xl drop-shadow-sm filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">🍎</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors line-clamp-1">
                        {name}
                    </h3>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-foreground group-hover:text-primary transition-colors">${price.toFixed(2)}</span>
                        {originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
                        )}
                    </div>

                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < rating ? "fill-current" : "text-gray-200 fill-gray-200"}`} />
                        ))}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ShoppingBag className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
