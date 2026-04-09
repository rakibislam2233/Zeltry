"use client";

import {
  Beef,
  Candy,
  Carrot,
  ChevronLeft,
  ChevronRight,
  Cookie,
  Milk,
  Package,
  Shrimp,
  Wine,
} from "lucide-react";
import { useRef } from "react";

type CategoryItem = {
  name: string;
  icon: React.ReactNode;
};

const categories: CategoryItem[] = [
  {
    name: "Milks and Dairies",
    icon: <Milk className="h-7 w-7 text-primary" />,
  },
  {
    name: "Wines and Alcohol",
    icon: <Wine className="h-7 w-7 text-primary" />,
  },
  {
    name: "Clothing and Beauty",
    icon: <Candy className="h-7 w-7 text-primary" />,
  },
  {
    name: "Pet Foods and Toy",
    icon: <Cookie className="h-7 w-7 text-primary" />,
  },
  {
    name: "Packaged fast food",
    icon: <Package className="h-7 w-7 text-primary" />,
  },
  { name: "Baking material", icon: <Beef className="h-7 w-7 text-primary" /> },
  {
    name: "Vegetables and Tubers",
    icon: <Carrot className="h-7 w-7 text-primary" />,
  },
  { name: "Fresh Seafood", icon: <Shrimp className="h-7 w-7 text-primary" /> },
];

const ShopByCategories = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slidePrevious = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth * 0.65,
      behavior: "smooth",
    });
  };

  const slideNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth * 0.65,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white ">
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#253d4e]">
            Featured Categories
          </h2>
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory items-center"
      >
        <button
          type="button"
          onClick={slidePrevious}
          aria-label="Previous categories"
          className="size-8 rounded-full bg-[#f2f4f7] text-[#7f8a98] hover:bg-primary hover:text-white transition-colors shrink-0"
        >
          <ChevronLeft className="mx-auto h-3.5 w-3.5" />
        </button>
        {categories.map((item) => (
          <article
            key={item.name}
            className="shrink-0 snap-start basis-[48%] sm:basis-[calc((100%-0.75rem)/2)] md:basis-[calc((100%-1.5rem)/3)] lg:basis-[calc((100%-2.25rem)/4)] xl:basis-[calc((100%-5.25rem)/8)] rounded-lg border border-[#eef1f4] bg-[#f7f9fb] px-3 py-4 text-center hover:border-primary/40 hover:bg-[#f8fffb] transition-colors"
          >
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#edf8f2]">
              {item.icon}
            </div>
            <p className="text-[11px] leading-snug font-medium text-[#4f5d77]">
              {item.name}
            </p>
          </article>
        ))}
        <button
          type="button"
          onClick={slideNext}
          aria-label="Next categories"
          className="size-8 rounded-full bg-[#f2f4f7] text-[#7f8a98] hover:bg-primary hover:text-white transition-colors shrink-0"
        >
          <ChevronRight className="mx-auto h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
};

export default ShopByCategories;
