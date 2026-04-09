import { Star } from "lucide-react";
import Link from "next/link";

type MiniProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
};

type ProductColumn = {
  title: string;
  products: MiniProduct[];
};

const columns: ProductColumn[] = [
  {
    title: "Top Selling",
    products: [
      {
        id: "ts-1",
        name: "Haagen Caramel Cone Ice Cream Boxed",
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop",
        price: 22.85,
        oldPrice: 24.8,
        rating: 4.0,
      },
      {
        id: "ts-2",
        name: "Seeds of Change Organic Red Rice",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop",
        price: 28.85,
        oldPrice: 32.8,
        rating: 4.0,
      },
      {
        id: "ts-3",
        name: "Blue Almonds Lightly Salted Vegetables",
        image:
          "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=600&auto=format&fit=crop",
        price: 23.85,
        oldPrice: 26.8,
        rating: 5.0,
      },
    ],
  },
  {
    title: "Trending Products",
    products: [
      {
        id: "tr-1",
        name: "Foster Farms Takeout Crispy Classic",
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
        price: 17.85,
        oldPrice: 19.8,
        rating: 4.0,
      },
      {
        id: "tr-2",
        name: "Haagen Caramel Cone Ice Cream Boxed",
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop",
        price: 22.85,
        oldPrice: 24.8,
        rating: 4.0,
      },
      {
        id: "tr-3",
        name: "Gorton's Beer Battered Fish Fillets",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
        price: 23.85,
        oldPrice: 26.8,
        rating: 4.0,
      },
    ],
  },
  {
    title: "Recently added",
    products: [
      {
        id: "ra-1",
        name: "Organic Cage Grade A Large Eggs",
        image:
          "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?q=80&w=600&auto=format&fit=crop",
        price: 21.0,
        oldPrice: 24.0,
        rating: 4.0,
      },
      {
        id: "ra-2",
        name: "Naturally Flavored Cinnamon Vanilla",
        image:
          "https://images.unsplash.com/photo-1470165518248-ff8a6a2e7e9c?q=80&w=600&auto=format&fit=crop",
        price: 51.0,
        oldPrice: 55.0,
        rating: 4.0,
      },
      {
        id: "ra-3",
        name: "Seeds of Change Organic Watermelon",
        image:
          "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=600&auto=format&fit=crop",
        price: 61.5,
        oldPrice: 66.0,
        rating: 5.0,
      },
    ],
  },
  {
    title: "Top Rated",
    products: [
      {
        id: "trd-1",
        name: "Pre-portioned, low-fat ice cream yogurt",
        image:
          "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
        price: 79.0,
        oldPrice: 99.0,
        rating: 4.0,
      },
      {
        id: "trd-2",
        name: "Angie's Sweet & Salty Kettle Corn",
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=600&auto=format&fit=crop",
        price: 48.85,
        oldPrice: 52.8,
        rating: 4.0,
      },
      {
        id: "trd-3",
        name: "Seeds of Change Organic Watermelon",
        image:
          "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=600&auto=format&fit=crop",
        price: 61.5,
        oldPrice: 66.0,
        rating: 5.0,
      },
    ],
  },
];

const HomeProductColumns = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-1">
      {columns.map((column) => (
        <article key={column.title}>
          <h3 className="text-xl font-bold text-[#253d4e]">{column.title}</h3>
          <div className="mt-2 h-0.5 w-full bg-[#e6edf3]">
            <div className="h-full w-14 bg-primary" />
          </div>

          <div className="mt-5 space-y-3">
            {column.products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 rounded-lg border border-transparent p-1.5 transition-colors hover:border-[#e8edf2] hover:bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 shrink-0 rounded-md object-cover"
                />

                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-semibold leading-tight text-[#253d4e]">
                    {product.name}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-[#ffb400]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`${product.id}-${index}`}
                        className={`h-2.5 w-2.5 ${
                          index < Math.round(product.rating)
                            ? "fill-current"
                            : "text-[#d8dde4]"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-[10px] text-[#9ca3af]">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="mt-1 flex items-end gap-1.5">
                    <span className="text-xl font-extrabold leading-none text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="pb-0.5 text-xs text-[#9ca3af] line-through">
                      ${product.oldPrice?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default HomeProductColumns;
