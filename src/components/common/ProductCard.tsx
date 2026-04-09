import { Product } from "@/types/product";
import { Star, StarHalf } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="relative h-full rounded-xl border border-[#e6e8ec] bg-white transition-all duration-300 group overflow-hidden">
      {product.badge && (
        <span
          className={`absolute left-0 top-0 rounded-br-lg rounded-tl-xl px-3 py-0.5 text-[10px] z-10 font-semibold text-white ${product.badge.colorClass}`}
        >
          {product.badge.text}
        </span>
      )}

      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-t-xl mix-blend-multiply transform"
        />
      </Link>

      <div className="flex flex-col justify-between  flex-1 gap-2 p-3">
        <span className="text-xs text-[#8b96a5]">{product.category}</span>
        <Link
          href={`/product/${product.id}`}
          className="font-bold text-lg leading-tight text-[#253d4e] hover:text-primary transition-colors line-clamp-2"
          title={product.name}
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= Math.floor(product.rating);
            const isHalf =
              star === Math.ceil(product.rating) &&
              !Number.isInteger(product.rating);

            return (
              <span
                key={star}
                className={`${
                  isFilled || isHalf ? "text-yellow-400" : "text-gray-200"
                }`}
              >
                {isHalf ? (
                  <StarHalf className="w-2.5 h-2.5 fill-current" />
                ) : (
                  <Star
                    className={`w-2.5 h-2.5 ${isFilled ? "fill-current" : ""}`}
                  />
                )}
              </span>
            );
          })}
          <span className="text-xs text-[#9ca3af] ml-1">
            ({product.rating.toFixed(1)})
          </span>
        </div>
        <div className="mt-auto flex justify-between items-center pt-2">
          <div className="flex items-end gap-1.5">
            <span className="text-xl font-extrabold tracking-tight text-primary">
              ${product.price.toFixed(2)}
            </span>
            <span
              className={`text-xs text-[#9ca3af] line-through font-medium pb-0.5 ${
                !product.originalPrice && "opacity-0"
              }`}
            >
              {product.originalPrice
                ? `$${product.originalPrice.toFixed(2)}`
                : "$0.00"}
            </span>
          </div>

          <Link
            href={`/product/${product.id}`}
            className="mt-2 h-8 px-3 rounded-md bg-[#def9ec] text-primary hover:bg-primary hover:text-white text-xs font-semibold inline-flex items-center justify-center transition-colors"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
