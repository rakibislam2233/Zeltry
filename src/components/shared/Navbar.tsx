import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                        O
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-foreground">Oryzn</span>
                </Link>

                {/* Search Bar - Hidden on mobile, visible on lg */}
                <div className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
                    <div className="relative w-full flex items-center">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for products (e.g. fresh milk)..."
                            className="w-full h-12 pl-10 pr-4 rounded-l-md border border-r-0 border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button className="h-12 px-6 bg-primary text-primary-foreground font-medium rounded-r-md hover:bg-primary/90 transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="h-6 w-6" />
                        <span className="text-xs font-medium hidden md:block">Wishlist</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors relative">
                        <div className="relative">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center border-2 border-background">
                                3
                            </span>
                        </div>
                        <span className="text-xs font-medium hidden md:block">Cart</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                        <User className="h-6 w-6" />
                        <span className="text-xs font-medium hidden md:block">Account</span>
                    </button>
                </div>
            </div>

            {/* Secondary Nav / Categories */}
            <div className="border-t bg-muted/30">
                <div className="container mx-auto px-4 h-12 flex items-center justify-between">
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 h-full hover:bg-primary/90 transition-colors">
                        <Menu className="h-5 w-5" />
                        <span className="font-medium">Browse Categories</span>
                    </button>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                        <Link href="/deals" className="hover:text-primary transition-colors">Daily Deals</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-2 text-sm text-foreground font-medium">
                        <span>Call Us:</span>
                        <span className="text-primary">+1 (800) 123-4567</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
