"use client";

import DealCountdownCard from "@/components/common/DealCountdownCard";
import { dealsOfDay } from "@/data/home/dealsOfDay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const DealsOfTheDay: React.FC = () => {
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
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#253d4e]">
            Deals Of The Day
          </h2>
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            type="button"
            onClick={slidePrevious}
            aria-label="Previous deals"
            className="h-9 w-9 rounded-full border border-[#dce3ea] bg-white text-[#5d6d7a] hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mx-auto" />
          </button>
          <button
            type="button"
            onClick={slideNext}
            aria-label="Next deals"
            className="h-9 w-9 rounded-full border border-[#dce3ea] bg-white text-[#5d6d7a] hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronRight className="h-4 w-4 mx-auto" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {dealsOfDay.map((product) => (
          <div
            key={product.id}
            className="shrink-0 basis-5/6 sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-3rem)/4)] snap-start"
          >
            <DealCountdownCard
              id={product.id}
              name={product.name}
              category={product.category}
              brand={product.brand}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              countdown={product.countdown}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
