"use client";

import {
    Heart,
    LayoutDashboard,
    LogOut,
    MapPin,
    RefreshCw,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "Order History", icon: RefreshCw },
  { href: "/dashboard/wishlist", label: "Wishlist", icon: Heart },
  { href: "/dashboard/addresses", label: "Addresses", icon: MapPin },
  { href: "/dashboard/account", label: "Account Details", icon: Settings },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="w-full lg:w-70 bg-white rounded border border-gray-200 overflow-hidden h-fit">
      <div className="p-6 text-center border-b border-gray-200">
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 mb-4 overflow-hidden border-2 border-primary">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-lg text-text-main">Alex Doe</h3>
        <p className="text-sm text-text-muted">alex.doe@example.com</p>
      </div>

      <nav className="p-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-text-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded text-text-muted transition-colors mt-4"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
