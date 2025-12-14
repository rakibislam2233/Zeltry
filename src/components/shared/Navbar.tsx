import { ArrowRight, ChevronDown, Heart, MapPin, Menu, Phone, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-background border-b text-xs text-muted-foreground hidden lg:block">
                <div className="container mx-auto px-4 h-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>Store Location: Lincoln- 344, Illinois, Chicago</span>
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-2">
                            <span>Free Shipping on Orders Over $50</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground">
                            <span>Eng</span> <ChevronDown className="h-3 w-3" />
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground">
                            <span>USD</span> <ChevronDown className="h-3 w-3" />
                        </div>
                        <span>|</span>
                        <Link href="/login" className="hover:text-foreground">Sign In / Sign Up</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                            O
                        </div>
                        <span className="text-3xl font-bold tracking-tight text-foreground">Oryzn</span>
                    </div>
                </Link>

                {/* Search Bar */}
                <div className="hidden lg:flex flex-1 max-w-2xl relative">
                    <div className="flex w-full items-center border border-input rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
                        <div className="h-12 px-4 bg-muted/30 flex items-center gap-2 border-r text-sm font-medium text-muted-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                            All Categories <ChevronDown className="h-3 w-3" />
                        </div>
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full h-12 pl-10 pr-4 outline-none text-sm placeholder:text-muted-foreground/70"
                            />
                        </div>
                        <button className="h-12 px-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <Link href="/wishlist" className="relative group">
                        <Heart className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                        <span className="absolute -top-1 -right-1 h-5 w-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center border-2 border-background">
                            2
                        </span>
                    </Link>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                            <ShoppingCart className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                            <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center border-2 border-background">
                                3
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-xs text-muted-foreground">Shopping cart:</p>
                            <p className="text-sm font-bold text-foreground">$57.00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="bg-muted/50 border-t border-b hidden lg:block">
                <div className="container mx-auto px-4 h-14 flex items-center justify-between">

                    {/* Browse Categories Button - This matches the sidebar width usually */}
                    <div className="flex items-center relative group">
                        <button className="flex items-center gap-3 bg-primary text-primary-foreground px-6 h-14 font-semibold hover:bg-primary/90 transition-colors">
                            <Menu className="h-6 w-6" />
                            <span>Browse All Categories</span>
                            <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
                        </button>

                        {/* Dropdown Menu (Absolute) */}
                        <div className="absolute top-full left-0 w-full min-w-[300px] bg-card border shadow-lg rounded-b-lg overflow-hidden hidden group-hover:block z-50">
                            <ul className="flex flex-col text-sm font-medium text-foreground/80 py-2">
                                {["Fresh Fruit", "Vegetables", "River Fish", "Chicken & Meat", "Drink & Water", "Yogurt & Ice Cream", "Cake & Bread", "Butter & Cream", "Cooking", "View all Categories"].map((cat, i) => (
                                    <li key={i}>
                                        <Link href="/shop" className="flex items-center justify-between px-6 py-3 hover:bg-primary/5 hover:text-primary hover:font-bold transition-all border-b last:border-0 border-dashed border-gray-100">
                                            <span>{cat}</span>
                                            {i < 3 && <ArrowRight className="h-3 w-3 opacity-50" />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                            Home <ChevronDown className="h-3 w-3" />
                        </Link>
                        <Link href="/shop" className="hover:text-primary transition-colors flex items-center gap-1">
                            Shop <ChevronDown className="h-3 w-3" />
                        </Link>
                        <Link href="/pages" className="hover:text-primary transition-colors flex items-center gap-1">
                            Pages <ChevronDown className="h-3 w-3" />
                        </Link>
                        <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-1">
                            Blog <ChevronDown className="h-3 w-3" />
                        </Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                    </nav>

                    {/* Phone */}
                    <div className="flex items-center gap-2 text-foreground font-medium">
                        <Phone className="h-5 w-5" />
                        <span>(219) 555-0114</span>
                    </div>

                </div>
            </div>

            {/* Mobile Nav Placeholder (Simple) */}
            <div className="lg:hidden border-t p-4 flex justify-around">
                <Link href="/" className="flex flex-col items-center gap-1 text-sm font-medium"><Menu className="h-6 w-6" /> Menu</Link>
                <Link href="/shop" className="flex flex-col items-center gap-1 text-sm font-medium"><Search className="h-6 w-6" /> Search</Link>
                <Link href="/login" className="flex flex-col items-center gap-1 text-sm font-medium"><ShoppingCart className="h-6 w-6" /> Cart</Link>
            </div>

        </header>
    );
}
