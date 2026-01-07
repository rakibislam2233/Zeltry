"use client";

import BrowseCategories from "@/components/shared/BrowseCategories";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ShopSidebar from "@/components/shared/ShopSidebar";
import { usePathname } from "next/navigation";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isShopPage = pathname?.startsWith("/shop");

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />

      {/* Main Content Area with Fixed Sidebar */}
      <div className="container mx-auto px-4 py-6 mt-16">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Sidebar - Dynamic based on route */}
          {isShopPage ? <ShopSidebar /> : <BrowseCategories />}

          {/* Page Content */}
          <main className="flex-1 w-full min-w-0">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PublicLayout;
