import {
    ArrowRight,
    Carrot,
    Coffee,
    Cookie,
    Croissant,
    Drumstick,
    Egg,
    HelpCircle,
    Percent,
    Store,
    Timer
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    colorClass: string;
  };
}

export interface Category {
  name: string;
  icon: React.ReactNode;
  count: number;
  active?: boolean;
}

const categories: Category[] = [
  { name: "Beverages", icon: <Coffee className="w-5 h-5" />, count: 8 },
  {
    name: "Vegetables",
    icon: <Carrot className="w-5 h-5" />,
    count: 12,
    active: true,
  },
  { name: "Meat & Fish", icon: <Drumstick className="w-5 h-5" />, count: 5 },
  { name: "Snacks", icon: <Cookie className="w-5 h-5" />, count: 9 },
  { name: "Dairy", icon: <Egg className="w-5 h-5" />, count: 14 },
  { name: "Bakery", icon: <Croissant className="w-5 h-5" />, count: 22 },
];

const BrowseCategories: React.FC = () => {
  return (
    <aside
      className={`w-70 shrink-0 hidden lg:flex flex-col gap-6  overflow-y-auto scrollbar-hide`}
    >
      {/* Main Menu Links */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card p-2 border border-gray-200 dark:border-gray-800">
        {[
          { icon: <Store className="w-5 h-5" />, text: "Shop" },
          { icon: <Percent className="w-5 h-5" />, text: "Offers" },
          { icon: <Timer className="w-5 h-5" />, text: "Daily Deals" },
          { icon: <HelpCircle className="w-5 h-5" />, text: "Help Center" },
        ].map((item, idx) => (
          <a
            key={idx}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-text-main dark:text-gray-200 font-medium"
            href="#"
          >
            <span className="text-gray-500">{item.icon}</span> {item.text}
          </a>
        ))}
      </div>

      {/* Mini Banner */}
      <div className="rounded-xl overflow-hidden relative group cursor-pointer h-64 shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8UB057O_lxHeuFlAEJdAzA_IHyLzd-ckcMl8dt7ialw5W3k3eMn-ajQsxv0_T7_zRQXf-bvo8ZdGK02a1aVYl1YYy8NTX-NcKEKgcB-_mAQVtLgVI-H8_Ms1QB_aV6uojV1XNdUxRILKJU8CHWbHO4anfJWWs4gRDAZ9QYJtuoaijEEGJjYQzYpGd7vNVoBuThinZqpOLhE1Ik0-VxUivQhDlA4i-C_ZXNImNFE4h9XJ6eTj8GpHt1y7iRUMMdwxoBv7o_XxG28Eo')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
            ORGANIC
          </span>
          <h3 className="text-white text-xl font-bold leading-tight mb-2">
            Fresh Strawberries
          </h3>
          <p className="text-white/80 text-sm mb-4">Starting at $4.99</p>
          <button className="flex items-center gap-2 text-primary font-bold text-sm bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Shop Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BrowseCategories;
