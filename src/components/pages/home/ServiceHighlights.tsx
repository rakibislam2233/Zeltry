import assortmentGif from "@/assets/services/assortment.gif";
import bestPriceGif from "@/assets/services/best-price.gif";
import dealGif from "@/assets/services/deal.gif";
import freeDeliveryGif from "@/assets/services/free-delivery.gif";
import rotateGif from "@/assets/services/rotate.gif";
import Image, { type StaticImageData } from "next/image";

type HighlightItem = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

const highlights: HighlightItem[] = [
  {
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
    image: bestPriceGif,
  },
  {
    title: "Free delivery",
    subtitle: "24/7 amazing services",
    image: freeDeliveryGif,
  },
  {
    title: "Great daily deal",
    subtitle: "When you sign up",
    image: dealGif,
  },
  {
    title: "Wide assortment",
    subtitle: "Mega Discounts",
    image: assortmentGif,
  },
  {
    title: "Easy returns",
    subtitle: "Within 30 days",
    image: rotateGif,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
      {highlights.map((item) => (
        <article
          key={item.title}
          className="flex items-center gap-3 rounded-lg border border-[#e8edf2] bg-white px-4 py-3"
        >
          <div className="shrink-0 rounded-md  p-2">
            <Image
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              unoptimized
              className="size-12 object-contain"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#253d4e] leading-tight">
              {item.title}
            </h3>
            <p className="mt-0.5 text-xs text-[#8b96a5]">{item.subtitle}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ServiceHighlights;
