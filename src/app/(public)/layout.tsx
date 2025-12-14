
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { CategorySidebar } from "@/components/shared/CategorySidebar";
import { ReactNode } from "react";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      
      {/* Main Content Area with Fixed Sidebar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
             {/* Sidebar - Hidden on mobile, fixed width on desktop */}
             <aside className="hidden lg:block w-[260px] shrink-0 sticky top-4">
                <CategorySidebar />
             </aside>

             {/* Page Content */}
             <main className="flex-1 w-full min-w-0">
                {children}
             </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
