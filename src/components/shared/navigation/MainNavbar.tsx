"use client";

import { initialCartItems } from "@/data/cart";
import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CartSheet from "../CartSheet";
import Logo from "../Logo";

const MainNavbar = () => {
  const [isCartSheetOpen, setIsCartSheetOpen] = useState(false);

  return (
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-white">
      <div className="flex items-center justify-between gap-8">
        <Logo />

        <div className="flex-1 max-w-3xl hidden md:block">
          <div className="flex w-full items-center h-12 rounded-lg overflow-hidden bg-white border-white">
            <div className="bg-white hidden lg:flex items-center h-full border-r border-gray-200 px-4 cursor-pointer group">
              <span className="text-sm font-medium text-slate-700">
                All Categories
              </span>
              <ChevronDown className="w-4 h-4 ml-2 text-slate-500" />
            </div>
            <input
              className="flex-1 h-full px-4 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 outline-none"
              placeholder="Search for products (e.g. fresh milk)..."
              type="text"
            />
            <button className="h-full border-l cursor-pointer border-gray-200 px-5 bg-white text-primary font-medium transition-colors flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/dashboard/wishlist"
            className="flex items-center justify-center w-10 h-10 rounded-full  text-white relative transition-colors"
          >
            <Heart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white/90">
              2
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsCartSheetOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-full  text-white relative transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white/90">
              {initialCartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
          <Link
            href="/dashboard"
            className="flex items-center justify-center w-10 h-10 rounded-full  text-white relative transition-colors"
          >
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
    <CartSheet open={isCartSheetOpen} onOpenChange={setIsCartSheetOpen} />
    </>
  );
};

export default MainNavbar;
