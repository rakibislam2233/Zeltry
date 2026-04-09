import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Navbar />
      <main className="flex-1 mt-36 pt-4 sm:pt-6 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
