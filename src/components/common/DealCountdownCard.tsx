import { ShoppingCart, Star } from "lucide-react";
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
  const timerItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Mins", value: countdown.mins },
    { label: "Sec", value: countdown.sec },
  ];

  return (
    <article className="rounded-2xl border border-[#e5e8ec] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-22px_rgba(37,61,78,0.45)]">
      <Link
        href={`/product/${id}`}
        className="relative block h-40 overflow-hidden rounded-xl bg-[#f7f8fa]"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-2 right-2 -bottom-5 grid grid-cols-4 gap-1.5">
          {timerItems.map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-[#dce8df] bg-[#f3fff7] py-1 text-center"
            >
              <p className="text-[11px] font-semibold leading-none text-primary">{item.value}</p>
              <p className="mt-1 text-[9px] text-[#7f8a98]">{item.label}</p>
            </div>
          ))}
        </div>
      </Link>

      <div className="pt-7 px-1">
        <p className="text-[11px] text-[#8b96a5]">{category}</p>
        <Link
          href={`/product/${id}`}
          className="mt-1 block line-clamp-2 text-[17px] leading-tight font-bold text-[#253d4e] hover:text-primary"
        >
          {name}
        </Link>

        <div className="mt-2 flex items-center gap-1 text-[#ffb400]">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-[12px] text-[#9aa3af]">({rating.toFixed(1)})</span>
        </div>

        <p className="mt-1 text-[12px] text-[#8b96a5]">
          By <span className="text-primary font-medium">{brand}</span>
        </p>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex items-end gap-1.5">
            <span className="text-xl font-extrabold text-primary">${price.toFixed(2)}</span>
            <span className={`pb-0.5 text-xs text-[#9ca3af] line-through ${!originalPrice ? "opacity-0" : ""}`}>
              {originalPrice ? `$${originalPrice.toFixed(2)}` : "$0.00"}
            </span>
          </div>

          <button className="h-8 rounded-md bg-[#def9ec] px-3 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white inline-flex items-center gap-1">
            <ShoppingCart className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default DealCountdownCard;
