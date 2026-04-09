import { promoTiles } from "@/data/home/promoTiles";
import Image from "next/image";
import Link from "next/link";

const HomePromoTiles = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {promoTiles.map((tile) => (
        <article
          key={tile.title}
          className={`relative overflow-hidden rounded-md border border-[#e3e7ea] p-6 ${tile.bgClass}`}
        >
          <h3 className="max-w-55 whitespace-pre-line text-base md:text-xl leading-tight font-bold text-[#253d4e]">
            {tile.title}
          </h3>

          <Link
            href="/shop"
            className="mt-5 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2ca36b]"
          >
            {tile.cta}
          </Link>

          <Image
            src={tile.image}
            alt={tile.title}
            width={112}
            height={96}
            className="pointer-events-none absolute bottom-0 right-0 h-24 w-28 rounded-tl-xl object-cover"
          />
        </article>
      ))}
    </div>
  );
};

export default HomePromoTiles;
