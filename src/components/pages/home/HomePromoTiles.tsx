import Link from "next/link";

type PromoTile = {
  title: string;
  cta: string;
  image: string;
  bgClass: string;
};

const promoTiles: PromoTile[] = [
  {
    title: "Everyday Fresh &\nClean with Our\nProducts",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop",
    bgClass: "bg-[#f3e8cf]",
  },
  {
    title: "Make your Breakfast\nHealthy and Easy",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop",
    bgClass: "bg-[#e7edf4]",
  },
  {
    title: "The best Organic\nProducts Online",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop",
    bgClass: "bg-[#e8f0ed]",
  },
];

const HomePromoTiles = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {promoTiles.map((tile) => (
        <article
          key={tile.title}
          className={`relative overflow-hidden rounded-xl border border-[#e3e7ea] p-6 ${tile.bgClass}`}
        >
          <h3 className="max-w-55 whitespace-pre-line text-[28px] leading-tight font-bold text-[#253d4e]">
            {tile.title}
          </h3>

          <Link
            href="/shop"
            className="mt-5 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2ca36b]"
          >
            {tile.cta}
          </Link>

          <img
            src={tile.image}
            alt={tile.title}
            className="pointer-events-none absolute bottom-0 right-0 h-24 w-28 rounded-tl-xl object-cover"
          />
        </article>
      ))}
    </div>
  );
};

export default HomePromoTiles;
