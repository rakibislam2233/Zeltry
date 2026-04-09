import { Product } from "@/types/product";
import { Heart, ShoppingCart, Star, StarHalf } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="relative h-full rounded border border-[#e6e8ec] bg-white transition-all duration-300 group overflow-hidden">
      {product.badge && (
        <span
          className={`absolute top-2 left-2 text-white text-[11px] font-semibold px-6 py-1 rounded ${product.badge.colorClass} z-10`}
        >
          {product.badge.text}
        </span>
      )}

      <Link
        href={`/product/${product.id}`}
        className="block relative w-full aspect-square mb-4 overflow-hidden "
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full  object-contain mix-blend-multiply transform"
        />
      </Link>

      <div className="flex flex-col flex-1 gap-2.5 px-4 pb-4">
        <span className="text-sm text-[#8b96a5]">{product.category}</span>
        <Link
          href={`/product/${product.id}`}
          className="font-bold text-xl leading-tight text-[#253d4e] hover:text-primary transition-colors line-clamp-2"
          title={product.name}
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= Math.floor(product.rating);
            const isHalf =
              star === Math.ceil(product.rating) &&
              !Number.isInteger(product.rating);

            return (
              <span
                key={star}
                className={`${
                  isFilled || isHalf
                    ? "text-yellow-400"
                    : "text-gray-200 dark:text-gray-700"
                }`}
              >
                {isHalf ? (
                  <StarHalf className="w-3 h-3 fill-current" />
                ) : (
                  <Star
                    className={`w-3 h-3 ${isFilled ? "fill-current" : ""}`}
                  />
                )}
              </span>
            );
          })}
          <span className="text-sm text-[#9ca3af] ml-1">
            ({product.rating.toFixed(1)})
          </span>
        </div>
        <div className="mt-auto pt-3 flex items-end justify-between gap-3">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-primary">
              ${product.price.toFixed(2)}
            </span>
            <span
              className={`text-sm text-[#9ca3af] line-through font-medium pb-1 ${
                !product.originalPrice && "opacity-0"
              }`}
            >
              {product.originalPrice
                ? `$${product.originalPrice.toFixed(2)}`
                : "$0.00"}
            </span>
          </div>

          <button className="h-10 px-4 rounded-md bg-[#def9ec] text-primary hover:bg-primary hover:text-white text-sm font-semibold inline-flex items-center gap-1.5 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
