import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

type DailyBestSellCardProps = {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  sold: number;
  total: number;
  badge?: {
    text: string;
    colorClass: string;
  };
};

const DailyBestSellCard = ({
  id,
  name,
  category,
  image,
  rating,
  price,
  originalPrice,
  badge,
}: DailyBestSellCardProps) => {
  return (
    <article className="relative rounded-xl border border-[#e6e8ec] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-24px_rgba(37,61,78,0.45)]">
      {badge && (
        <span
          className={`absolute left-0 top-0 rounded-br-lg rounded-tl-xl px-3 py-0.5 text-[10px] font-semibold text-white ${badge.colorClass}`}
        >
          {badge.text}
        </span>
      )}

      <Link
        href={`/product/${id}`}
        className="mt-5 flex h-32 sm:h-36 items-center justify-center rounded-lg bg-[#f8f9fb]"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-2"
        />
      </Link>

      <div className="mt-3">
        <p className="text-xs text-[#9aa3af]">{category}</p>
        <Link
          href={`/product/${id}`}
          className="mt-1 block line-clamp-2 text-sm sm:text-base leading-tight font-semibold text-[#253d4e] hover:text-primary"
        >
          {name}
        </Link>

        <div className="mt-1.5 flex items-center gap-1 text-[#ffb400]">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-[11px] text-[#9aa3af]">({rating.toFixed(1)})</span>
        </div>

        <div className="mt-2.5 flex items-end gap-1.5">
          <span className="text-lg sm:text-xl font-extrabold text-primary">${price.toFixed(2)}</span>
          <span className={`pb-0.5 text-xs text-[#9ca3af] line-through ${!originalPrice ? "opacity-0" : ""}`}>
            {originalPrice ? `$${originalPrice.toFixed(1)}` : "$0.0"}
          </span>
        </div>

        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-[#6b7280]">
          <span className="rounded-full bg-[#ecf7f1] px-2 py-0.5 font-medium text-primary">
            Free Delivery
          </span>
          <span className="rounded-full bg-[#fff4e8] px-2 py-0.5 font-medium text-[#f59e0b]">
            In Stock
          </span>
        </div>

        <button className="mt-3 h-8 w-full rounded-md bg-[#ff3f34] text-xs font-semibold text-white transition-colors hover:bg-[#ef2d22] inline-flex items-center justify-center gap-1.5">
          <ShoppingCart className="h-3.5 w-3.5" />
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default DailyBestSellCard;
