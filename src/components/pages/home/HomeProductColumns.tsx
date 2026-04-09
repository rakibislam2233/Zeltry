import { productColumns } from "@/data/home/productColumns";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeProductColumns = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-1">
      {productColumns.map((column) => (
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
                <Image
                  src={product.image}
                  alt={product.name}
                  width={64}
                  height={64}
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
