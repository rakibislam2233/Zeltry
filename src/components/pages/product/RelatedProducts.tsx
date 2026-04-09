import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/types/product";

const relatedProducts: Product[] = [
  {
    id: "rp-1",
    category: "Snack",
    name: "Seeds of Change Organic Quinoa",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.0,
    price: 28.85,
    originalPrice: 32.8,
    badge: { text: "Hot", colorClass: "bg-pink-500" },
  },
  {
    id: "rp-2",
    category: "Hodo Foods",
    name: "All Natural Italian-Style Chicken Meatballs",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=1000&auto=format&fit=crop",
    rating: 4.0,
    price: 52.85,
    originalPrice: 55.8,
    badge: { text: "Sale", colorClass: "bg-sky-500" },
  },
  {
    id: "rp-3",
    category: "Snack",
    name: "Angie's Boomchickapop Sweet & Salty",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1000&auto=format&fit=crop",
    rating: 4.0,
    price: 48.85,
    originalPrice: 52.8,
    badge: { text: "New", colorClass: "bg-primary" },
  },
  {
    id: "rp-4",
    category: "Vegetables",
    name: "Foster Farms Takeout Crispy Classic",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.0,
    price: 17.85,
    originalPrice: 19.8,
    badge: { text: "-14%", colorClass: "bg-orange-500" },
  },
];

const RelatedProducts = () => {
  return (
    <section className="mt-10">
      <h3 className="text-xl font-bold text-[#253d4e]">Related products</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
