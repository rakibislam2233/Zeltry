import DashboardSidebar from "@/components/pages/dashboard/DashboardSidebar";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Dashboard Sidebar */}
          <DashboardSidebar />

          {/* Main Content */}
          <main className="flex-1 w-full min-w-0">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
