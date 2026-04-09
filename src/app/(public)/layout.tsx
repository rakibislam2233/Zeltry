import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      {/* Main Content Area with Fixed Sidebar */}
      <div className="container mx-auto px-4 py-6 mt-20 ">{children}</div>

      <Footer />
    </section>
  );
};

export default PublicLayout;
