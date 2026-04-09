import ProductCard from "@/components/common/ProductCard";
import BrowseCategories from "@/components/shared/BrowseCategories";
import Pagination from "@/components/shared/Pagination";
import { Product } from "@/types/product";
import { ChevronDown, LayoutGrid, List } from "lucide-react";

// Mock data
const shopProducts: Product[] = [
  {
    id: "1",
    category: "Electronics",
    name: "Premium Noise Cancelling Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    price: 299.0,
    originalPrice: 350.0,
    badge: { text: "-15%", colorClass: "bg-red-500" },
  },
  {
    id: "2",
    category: "Wearables",
    name: "Series 7 Smart Watch with Health Tracking",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    price: 399.0,
    badge: { text: "NEW", colorClass: "bg-primary" },
  },
  {
    id: "3",
    category: "Wearables",
    name: "Ultra Fit Pro Smart Band",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    price: 49.0,
  },
  {
    id: "4",
    category: "Audio",
    name: "Portable Bass Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    price: 89.0,
    originalPrice: 120.0,
  },
  {
    id: "5",
    category: "Mobile",
    name: "Pro Max 13 - 256GB Midnight Green",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    price: 999.0,
  },
  {
    id: "6",
    category: "Gaming",
    name: "Virtual Reality Headset Pro",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    price: 349.0,
    badge: { text: "TRENDING", colorClass: "bg-purple-500" },
  },
  // Duplicates for grid filling
  {
    id: "7",
    category: "Electronics",
    name: "4K Ultra HD Action Camera",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    price: 199.0,
  },
  {
    id: "8",
    category: "Accessories",
    name: "Wireless Charging Pad",
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop",
    rating: 4.1,
    price: 29.99,
  },
  {
    id: "9",
    category: "Audio",
    name: "Pro Studio Monitor Headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    price: 149.0,
  },
];

const ShopPage = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <section className="relative mb-6 overflow-hidden rounded-md border border-[#d9ebe2] bg-[#d7efe4] px-6 py-8 md:px-10">
        <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full border border-[#c6e0d5]" />
        <div className="pointer-events-none absolute right-8 top-4 h-20 w-20 rounded-full border border-[#c6e0d5]" />

        <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#253d4e]">
              Snack
            </h1>
            <p className="mt-2 text-sm text-[#6b7c8f]">Home / Shop / Snack</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 max-w-2xl">
            {["Cabbage", "Broccoli", "Artichoke", "Celery", "Spinach"].map(
              (tag) => (
                <button
                  key={tag}
                  type="button"
                  className="h-8 rounded-full bg-white/90 px-3 text-xs font-medium text-[#4f5d77] border border-[#d9e7df]"
                >
                  x {tag}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 lg:flex-row">
        <aside className="lg:self-start lg:sticky lg:top-40">
          <BrowseCategories />
        </aside>
        <main className="min-w-0 flex-1">
          {/* Sort Bar */}
          <div className="rounded-md border border-gray-200 bg-white p-3 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#728294]">We found 29 items for you!</p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 text-sm font-medium mr-auto sm:mr-0">
                <span className="text-[#728294]">Show:</span>
                <div className="relative group cursor-pointer flex items-center gap-1 text-[#253d4e]">
                  50
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-[#728294]">Sort by:</span>
                <div className="relative group cursor-pointer flex items-center gap-1 text-[#253d4e]">
                  Featured
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
                <button className="p-2 bg-primary/10 text-primary rounded-md">
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#728294] hover:text-[#253d4e] transition-colors">
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
            {shopProducts.concat(shopProducts).map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>

          <Pagination />
        </main>
      </section>
    </div>
  );
};

export default ShopPage;
