import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",  
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zeltry - Fresh & Organic Grocery Store",
  description: "Your one-stop shop for fresh, organic, and healthy foods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
