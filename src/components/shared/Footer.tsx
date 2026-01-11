import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-muted/30 pt-16 pb-8 border-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                                O
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">Zeltry</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Zeltry is your one-stop shop for fresh, organic, and healthy foods. We deliver nature's best right to your doorstep with love and care.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">About Zeltry</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/delivery" className="hover:text-primary transition-colors">Delivery Information</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">My Account</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/login" className="hover:text-primary transition-colors">Sign In</Link></li>
                            <li><Link href="/cart" className="hover:text-primary transition-colors">View Cart</Link></li>
                            <li><Link href="/dashboard/wishlist" className="hover:text-primary transition-colors">My Wishlist</Link></li>
                            <li><Link href="/dashboard/orders" className="hover:text-primary transition-colors">Track My Order</Link></li>
                            <li><Link href="/help" className="hover:text-primary transition-colors">Help Ticket</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Market St, San Francisco, CA 94105</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:hello@zilly.com" className="hover:text-primary">hello@zilly.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+18001234567" className="hover:text-primary">+1 (800) 123-4567</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© 2025 Zeltry. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 border rounded bg-background">Visa</span>
                        <span className="px-2 py-1 border rounded bg-background">Mastercard</span>
                        <span className="px-2 py-1 border rounded bg-background">PayPal</span>
                        <span className="px-2 py-1 border rounded bg-background">Apple Pay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
