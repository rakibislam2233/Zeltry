'use client';
import ProductCard from '@/components/common/ProductCard';
import { Product } from '@/components/shared/BrowseCategories';
import { ShoppingBag } from 'lucide-react';

// Mock data for wishlist
const wishlistProducts: Product[] = [
    {
        id: '1',
        category: 'Electronics',
        name: 'Premium Noise Cancelling Wireless Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
        rating: 4.5,
        price: 299.00,
        originalPrice: 350.00,
        badge: { text: '-15%', colorClass: 'bg-red-500' }
    },
    {
        id: '5',
        category: 'Mobile',
        name: 'Pro Max 13 - 256GB Midnight Green',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        price: 999.00
    },
    {
        id: '9',
        category: 'Audio',
        name: 'Pro Studio Monitor Headphones',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
        rating: 4.7,
        price: 149.00
    }
];

const WishlistPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">My Wishlist</h2>
                    <p className="text-text-muted text-sm">You have {wishlistProducts.length} items in your wishlist</p>
                </div>
            </div>

            {wishlistProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {wishlistProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-text-muted" />
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Your wishlist is empty</h3>
                    <p className="text-text-muted max-w-sm mx-auto">Browse our wide selection of products and add your specific items to the wishlist!</p>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
