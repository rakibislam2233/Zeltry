import { Heart, LayoutDashboard, LogOut, MapPin, RefreshCw, Settings } from 'lucide-react';
import Link from 'next/link';

const DashboardSidebar = () => {
    // We can use usePathname here if we mark as client component or just use Links

    return (
        <aside className="w-full lg:w-[280px] bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden h-fit">
            <div className="p-6 text-center border-b border-gray-100 dark:border-gray-800">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 mb-4 overflow-hidden border-2 border-primary">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr" alt="User" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg text-text-main dark:text-white">Alex Doe</h3>
                <p className="text-sm text-text-muted">alex.doe@example.com</p>
            </div>

            <nav className="p-4 flex flex-col gap-1">
                <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium transition-colors">
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                </Link>
                <Link href="/dashboard/orders" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-text-main dark:hover:text-white transition-colors">
                    <RefreshCw className="w-5 h-5" />
                    Order History
                </Link>
                <Link href="/dashboard/wishlist" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-text-main dark:hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                    Wishlist
                </Link>
                <Link href="/dashboard/address" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-text-main dark:hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                    Address
                </Link>
                <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-text-main dark:hover:text-white transition-colors">
                    <Settings className="w-5 h-5" />
                    Settings
                </Link>
                <Link href="/logout" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors mt-4">
                    <LogOut className="w-5 h-5" />
                    Log Out
                </Link>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;
