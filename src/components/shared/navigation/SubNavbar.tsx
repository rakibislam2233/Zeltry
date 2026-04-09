import { Headset } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

const SubNavbar = () => {
  return (
    <section className="hidden lg:block w-full border-y border-gray-100 bg-white">
      <div className="container h-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8 min-w-0">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-gray-700 hover:text-primary transition-colors whitespace-nowrap "
              >
                {item.name}
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
