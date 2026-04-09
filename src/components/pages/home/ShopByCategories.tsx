"use client";

import { categories } from "@/data/home/categories";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ShopByCategories = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateButtonState = () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const tolerance = 2;

      setCanSlidePrev(slider.scrollLeft > tolerance);
      setCanSlideNext(slider.scrollLeft < maxScrollLeft - tolerance);
    };

    updateButtonState();
    slider.addEventListener("scroll", updateButtonState, { passive: true });
    window.addEventListener("resize", updateButtonState);

    return () => {
      slider.removeEventListener("scroll", updateButtonState);
      window.removeEventListener("resize", updateButtonState);
    };
  }, []);

  const slidePrevious = () => {
    if (!sliderRef.current || !canSlidePrev) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  const slideNext = () => {
    if (!sliderRef.current || !canSlideNext) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="mb-6 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-xl font-bold tracking-tight text-[#253d4e] md:text-2xl">
            Featured Categories
          </h2>
          <div className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-primary" />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={slidePrevious}
            disabled={!canSlidePrev}
            aria-label="Previous categories"
            className={`size-9 shrink-0 rounded-full border text-[#7f8a98] transition-colors ${
              canSlidePrev
                ? "cursor-pointer border-[#d6dee7] bg-white hover:bg-[#f5f8fb]"
                : "cursor-not-allowed border-[#edf1f5] bg-[#f7f9fb] text-[#c0c8d2]"
            }`}
          >
            <ChevronLeft className="mx-auto h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={slideNext}
            disabled={!canSlideNext}
            aria-label="Next categories"
            className={`size-9 shrink-0 rounded-full border text-[#7f8a98] transition-colors ${
              canSlideNext
                ? "cursor-pointer border-[#d6dee7] bg-white hover:bg-[#f5f8fb]"
                : "cursor-not-allowed border-[#edf1f5] bg-[#f7f9fb] text-[#c0c8d2]"
            }`}
          >
            <ChevronRight className="mx-auto h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((item) => (
          <article
            key={item.id}
            className="shrink-0 snap-start basis-[48%] sm:basis-[calc((100%-1rem)/2)] md:basis-[calc((100%-2rem)/3)] lg:basis-[calc((100%-3rem)/4)] xl:basis-[calc((100%-6rem)/7)] text-center"
          >
            <div className="rounded-lg border border-[#eef2f6] bg-white px-4 py-5 ">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="object-contain mx-auto"
              />
            </div>
            <p className="mt-3  text-sm font-bold leading-tight text-[#2f343a]">
              {item.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategories;
