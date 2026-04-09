import { ChevronDown, Headset, LayoutGrid } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "About", href: "/about", hasDropdown: false },
  { name: "Shop", href: "/shop", hasDropdown: true },
  { name: "Mega Menu", href: "/mega-menu", hasDropdown: true },
  { name: "Blog", href: "/blog", hasDropdown: true },
  { name: "Pages", href: "/pages", hasDropdown: true },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

const SubNavbar = () => {
  return (
    <section className="hidden lg:block w-full border-y border-gray-100 bg-white">
      <div className="container h-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8 min-w-0">
          <button
            type="button"
            className="h-10 px-4 rounded bg-primary text-white inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap"
          >
            <LayoutGrid className="h-4 w-4" />
            Browse All Categories
            <ChevronDown className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-gray-700 hover:text-primary transition-colors whitespace-nowrap "
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-2 text-gray-700 shrink-0">
          <Headset className="size-8 text-primary" />
          <div className="leading-tight">
            <p className="text-xl font-extrabold text-primary tracking-wide">
              1900888
            </p>
            <p className="text-[11px] text-gray-500">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubNavbar;
