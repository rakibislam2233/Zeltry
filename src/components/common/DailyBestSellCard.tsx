import { Star } from "lucide-react";
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
  sold,
  total,
  badge,
}: DailyBestSellCardProps) => {
  const soldPercent = Math.min(100, Math.round((sold / Math.max(total, 1)) * 100));

  return (
    <article className="relative rounded-xl border border-[#e6e8ec] bg-white transition-all duration-300 ">
      {badge && (
        <span
          className={`absolute left-0 top-0 rounded-br-lg rounded-tl-xl px-3 py-0.5 text-[10px] z-10 font-semibold text-white ${badge.colorClass}`}
        >
          {badge.text}
        </span>
      )}

      <Link href={`/product/${id}`} className="block ">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-t-xl mix-blend-multiply transform"
        />
      </Link>

      <div className="mt-3 p-3 ">
        <p className="text-xs text-[#9aa3af]">{category}</p>
        <Link
          href={`/product/${id}`}
          className="mt-1 block line-clamp-2 text-sm sm:text-base leading-tight font-semibold text-[#253d4e]"
        >
          {name}
        </Link>

        <div className="mt-1.5 flex items-center gap-1 text-[#ffb400]">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-[11px] text-[#9aa3af]">
            ({rating.toFixed(1)})
          </span>
        </div>

        <div className="mt-2.5 flex items-end gap-1.5">
          <span className="text-lg sm:text-xl font-extrabold text-primary">
            ${price.toFixed(2)}
          </span>
          <span
            className={`pb-0.5 text-xs text-[#9ca3af] line-through ${!originalPrice ? "opacity-0" : ""}`}
          >
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

        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px] text-[#6b7280]">
            <span>
              Sold: <span className="font-semibold text-[#253d4e]">{sold}</span>/{total}
            </span>
            <span className="font-semibold text-primary">{soldPercent}%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#eef2f6]">
            <div className="h-full rounded-full bg-primary" style={{ width: `${soldPercent}%` }} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default DailyBestSellCard;
