import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

const MainNavbar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-background">
      <div className="flex items-center justify-between gap-8">
        <Logo />

        <div className="flex-1 max-w-3xl hidden md:block">
          <div className="flex w-full items-center h-12 rounded border border-primary overflow-hidden">
            <div className="bg-white hidden lg:flex items-center h-full border-r border-gray-200 px-4 cursor-pointer group">
              <span className="text-sm font-bold text-text-main">All Categories</span>
              <ChevronDown className="w-4 h-4 ml-2 text-text-muted" />
            </div>
            <input
              className="flex-1 h-full px-4 bg-transparent border-none focus:ring-0 text-text-main placeholder-gray-400 outline-none"
              placeholder="Search for products (e.g. fresh milk)..."
              type="text"
            />
            <button className="h-full px-6 bg-primary hover:bg-primary-dark text-white font-medium transition-colors flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/dashboard"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main relative transition-colors"
          >
            <User className="w-6 h-6" />
          </Link>
          <Link
            href="/dashboard/wishlist"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main relative transition-colors"
          >
            <Heart className="w-6 h-6" />
            <span className="absolute top-1 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-surface-dark">
              2
            </span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-3 pl-2 pr-0 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="relative">
              <ShoppingCart className="w-7 h-7 text-text-main" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-surface-dark">
                4
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
