import {
    ChevronDown,
    Heart,
    Leaf,
    MapPin,
    Search,
    ShoppingCart,
    Truck,
    User
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="w-full">
            {/* Top Utility Bar */}
            <div className="bg-surface-light dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 hidden md:block">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-9 text-xs font-medium text-text-muted">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" /> Store Location: New York
                            </span>
                            <span className="w-[1px] h-3 bg-gray-300 dark:bg-gray-700"></span>
                            <span className="flex items-center gap-1">
                                <Truck className="w-3.5 h-3.5" /> Free Shipping on Orders $50+
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="hover:text-primary transition-colors">English</button>
                            <span className="w-[1px] h-3 bg-gray-300 dark:bg-gray-700"></span>
                            <button className="hover:text-primary transition-colors">USD</button>
                            <span className="w-[1px] h-3 bg-gray-300 dark:bg-gray-700"></span>
                            <Link className="hover:text-primary transition-colors" href="/dashboard">My Account</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-40 bg-surface-light dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 shrink-0 cursor-pointer">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight text-text-main dark:text-white">Oryzn</h1>
                        </Link>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-3xl hidden md:block">
                            <div className="flex w-full items-center h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                <div className="hidden lg:flex items-center h-full border-r border-gray-200 dark:border-gray-700 px-4 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="text-sm font-medium text-text-main dark:text-white">All Categories</span>
                                    <ChevronDown className="w-4 h-4 ml-2 text-text-muted" />
                                </div>
                                <input
                                    className="flex-1 h-full px-4 bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder-gray-400 outline-none"
                                    placeholder="Search for products (e.g. fresh milk)..."
                                    type="text"
                                />
                                <button className="h-full px-6 bg-primary hover:bg-primary-dark text-white font-medium transition-colors flex items-center justify-center">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                            <Link href="/dashboard" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main dark:text-white relative transition-colors">
                                <User className="w-6 h-6" />
                            </Link>
                            <Link href="/dashboard/wishlist" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main dark:text-white relative transition-colors">
                                <Heart className="w-6 h-6" />
                                <span className="absolute top-1 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-surface-dark">2</span>
                            </Link>
                            <Link href="/cart" className="flex items-center gap-3 pl-2 pr-0 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                                <div className="relative">
                                    <ShoppingCart className="w-7 h-7 text-text-main dark:text-white" />
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-surface-dark">4</span>
                                </div>
                                <div className="hidden lg:flex flex-col items-start leading-none">
                                    <span className="text-[11px] text-text-muted">My Cart</span>
                                    <span className="text-sm font-bold text-text-main dark:text-white">$57.00</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;