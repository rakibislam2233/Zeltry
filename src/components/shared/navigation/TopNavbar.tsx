import { ChevronDown } from "lucide-react";
import Link from "next/link";

const TopNavbar = () => {
  const topNavItems = [
    { name: "About Us", href: "/about" },
    { name: "My Account", href: "/account" },
    { name: "Wishlist", href: "/wishlist" },
    { name: "Order Tracking", href: "/orders" },
  ];

  return (
    <section className="hidden lg:block w-full border-b border-gray-200 bg-white text-[13px] text-gray-600">
      <div className="container h-10 flex items-center justify-between gap-4">
        <div className="flex items-center divide-x divide-gray-300">
          {topNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 first:pl-0 hover:text-primary transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <p className="hidden xl:block text-gray-500 font-medium">
          100% Secure delivery without contacting the courier
        </p>

        <div className="flex items-center gap-3 text-gray-600">
          <p className="hidden 2xl:block font-medium">
            Need help? Call Us: <span className="font-semibold text-primary">+ 1800 900</span>
          </p>

          <button
            type="button"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            English
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            USD
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;
