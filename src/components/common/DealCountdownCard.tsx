import { Star } from "lucide-react";
import Link from "next/link";

type DealCountdownCardProps = {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  countdown: {
    days: number;
    hours: number;
    mins: number;
    sec: number;
  };
};

const DealCountdownCard = ({
  id,
  name,
  category,
  brand,
  image,
  price,
  originalPrice,
  rating,
  countdown,
}: DealCountdownCardProps) => {
  const countdownLabel = `${countdown.days}d ${countdown.hours}h`;

  return (
    <article className="bg-white transition-all duration-300">
      <Link href={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-48 rounded-xl object-cover mix-blend-multiply transform"
        />
      </Link>

      <div className="w-full p-3 -mt-24">
        <div className="w-full relative z-10 rounded-xl border border-[#eceff3] bg-white p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] text-[#8b96a5]">{category}</p>
            <span className="rounded-full bg-[#fff3e8] px-2 py-0.5 text-[10px] font-semibold text-[#f59e0b]">
              {countdownLabel} left
            </span>
          </div>
          <Link
            href={`/product/${id}`}
            className="mt-1 block line-clamp-2 text-[13px] leading-tight font-semibold text-[#2b2b2b]"
          >
            {name}
          </Link>

          <p className="mt-1 text-[11px] text-[#8b96a5]">by {brand}</p>

          <div className="mt-2 flex items-center gap-1 text-[#ffb400]">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 text-[#d4d9df]" />
            <span className="ml-1 text-[12px] text-[#9aa3af]">
              ({rating.toFixed(1)})
            </span>
          </div>

          <div className="mt-3">
            <div className="flex items-end gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-primary">
                ${price.toFixed(2)}
              </span>
              <span
                className={`text-xs text-[#9ca3af] line-through font-medium pb-0.5 ${
                  !originalPrice && "opacity-0"
                }`}
              >
                {originalPrice ? `$${originalPrice.toFixed(2)}` : "$0.00"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DealCountdownCard;
