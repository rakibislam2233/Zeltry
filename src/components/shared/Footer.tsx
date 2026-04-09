"use client";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-sm leading-relaxed mb-4">
              Your trusted marketplace for quality products across multiple
              categories. Shop with confidence.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate?.("about")}
                  className="hover:text-teal-400 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="hover:text-teal-400 transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button className="hover:text-teal-400 transition-colors text-sm">
                  Track Order
                </button>
              </li>
              <li>
                <button className="hover:text-teal-400 transition-colors text-sm">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-teal-400 transition-colors text-sm">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button className="hover:text-teal-400 transition-colors text-sm">
                  Return Policy
                </button>
              </li>
              <li>
                <button className="hover:text-teal-400 transition-colors text-sm">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-teal-400 transition-colors text-sm">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to get special offers, free giveaways, and deals.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-2"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:border-teal-500 focus:outline-none text-white"
                />
              </div>
              <Button type="submit" variant="default">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 ShopHub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Visa_2014_logo_detail.svg/320px-Visa_2014_logo_detail.svg.png"
                alt="Visa"
                className="h-6 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/320px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/320px-PayPal.svg.png"
                alt="PayPal"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
