"use client";

import DailyBestSellCard from "@/components/common/DailyBestSellCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    id: "dbs-1",
    category: "Hodo Foods",
    name: "All Natural Italian-Style Chicken Meatballs",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    price: 238.85,
    originalPrice: 245.8,
    sold: 90,
    total: 120,
    badge: { text: "Save 35%", colorClass: "bg-primary" },
  },
  {
    id: "dbs-2",
    category: "Hodo Foods",
    name: "Angie's Boomchickapop Sweet and wonmies",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    price: 238.85,
    originalPrice: 245.8,
    sold: 90,
    total: 120,
    badge: { text: "Sale", colorClass: "bg-sky-500" },
  },
  {
    id: "dbs-3",
    category: "Hodo Foods",
    name: "Foster Farms Takeout Crispy Classic",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    price: 238.85,
    originalPrice: 245.8,
    sold: 90,
    total: 120,
    badge: { text: "Best sale", colorClass: "bg-orange-400" },
  },
  {
    id: "dbs-4",
    category: "Hodo Foods",
    name: "Blue Diamond Almonds Lightly Salted",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    price: 238.85,
    originalPrice: 245.8,
    sold: 90,
    total: 120,
    badge: { text: "Save 15%", colorClass: "bg-pink-500" },
  },
  {
    id: "dbs-5",
    category: "Hodo Foods",
    name: "Organic Cocoa Coconut Flakes",
    image:
      "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    price: 198.85,
    originalPrice: 225.8,
    sold: 62,
    total: 120,
    badge: { text: "Hot", colorClass: "bg-red-500" },
  },
];

const DailyBestSells = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slidePrevious = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  const slideNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#253d4e]">
            Daily Best Sells
          </h2>
          <div className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-primary" />
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            type="button"
            onClick={slidePrevious}
            aria-label="Previous best sells"
            className="h-9 w-9 rounded-full border border-[#dce3ea] bg-white text-[#5d6d7a] hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="mx-auto h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={slideNext}
            aria-label="Next best sells"
            className="h-9 w-9 rounded-full border border-[#dce3ea] bg-white text-[#5d6d7a] hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronRight className="mx-auto h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="shrink-0 basis-5/6 sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-3rem)/4)] snap-start"
          >
            <DailyBestSellCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyBestSells;
