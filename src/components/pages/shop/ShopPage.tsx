import ProductCard from '@/components/common/ProductCard';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { Product } from '@/components/shared/BrowseCategories';
import Pagination from '@/components/shared/Pagination';
import { ChevronDown, LayoutGrid, List } from 'lucide-react';

// Mock data
const shopProducts: Product[] = [
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
        id: '2',
        category: 'Wearables',
        name: 'Series 7 Smart Watch with Health Tracking',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
        rating: 4.8,
        price: 399.00,
        badge: { text: 'NEW', colorClass: 'bg-primary' }
    },
    {
        id: '3',
        category: 'Wearables',
        name: 'Ultra Fit Pro Smart Band',
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000&auto=format&fit=crop',
        rating: 4.2,
        price: 49.00
    },
    {
        id: '4',
        category: 'Audio',
        name: 'Portable Bass Bluetooth Speaker',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
        rating: 4.6,
        price: 89.00,
        originalPrice: 120.00
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
        id: '6',
        category: 'Gaming',
        name: 'Virtual Reality Headset Pro',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=1000&auto=format&fit=crop',
        rating: 4.4,
        price: 349.00,
        badge: { text: 'TRENDING', colorClass: 'bg-purple-500' }
    },
    // Duplicates for grid filling
    {
        id: '7',
        category: 'Electronics',
        name: '4K Ultra HD Action Camera',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
        rating: 4.3,
        price: 199.00
    },
    {
        id: '8',
        category: 'Accessories',
        name: 'Wireless Charging Pad',
        image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop',
        rating: 4.1,
        price: 29.99
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

const ShopPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb items={[{ label: 'Shop', href: '/shop' }, { label: 'Electronics' }]} />

            {/* Banner */}
            <div className="w-full h-48 md:h-64 rounded-xl relative overflow-hidden mb-8 shadow-card group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop')" }} // Electronics banner
                ></div>
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Electronics</h1>
                    <p className="text-white/80 text-lg max-w-lg">Browse our latest collection of premium electronic devices and accessories.</p>
                </div>
            </div>

            {/* Sort Bar */}
            <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg p-3 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-text-muted">Showing 1–9 of 120 results</p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="flex items-center gap-2 text-sm font-medium mr-auto sm:mr-0">
                        <span className="text-text-muted">Sort by:</span>
                        <div className="relative group cursor-pointer flex items-center gap-1 text-text-main dark:text-white">
                            Most Popular <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-3">
                        <button className="p-2 bg-primary/10 text-primary rounded-md">
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-text-muted hover:text-text-main transition-colors">
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <Pagination />
        </div>
    );
};

export default ShopPage;
