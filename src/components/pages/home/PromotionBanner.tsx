"use client";

import { ChevronLeft, ChevronRight, SendHorizontal } from "lucide-react";
import { useState } from "react";

const banners = [
  {
    id: "newsletter",
    title: "Don't miss amazing grocery deals",
    subtitle: "Sign up for the daily newsletter",
    bgClass: "bg-[#f3e9cf]",
  },
  {
    id: "weekend",
    title: "Weekend market specials are live now",
    subtitle: "Fresh picks, extra discounts, limited stock",
    bgClass: "bg-[#efe8d1]",
  },
  {
    id: "delivery",
    title: "Fast delivery on your daily essentials",
    subtitle: "Order before 4PM and get same-day delivery",
    bgClass: "bg-[#f2ead5]",
  },
];

const PromotionBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden rounded-md border border-[#ece9dc]">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <article
              key={banner.id}
              className={`relative min-w-full px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 ${banner.bgClass}`}
            >
              <div className="pointer-events-none absolute -top-10 -left-12 h-44 w-44 rounded-full border border-[#e5ddc8]" />
              <div className="pointer-events-none absolute top-8 right-12 h-52 w-52 rounded-full border border-[#e2dac6]" />
              <div className="pointer-events-none absolute -bottom-16 right-28 h-64 w-64 rounded-full border border-[#e7dfcb]" />
              <div className="pointer-events-none absolute bottom-8 -left-8 h-40 w-40 rounded-full border border-[#e5dcc7]" />

              <div className="relative z-10 max-w-155">
                <h2 className="text-[34px] leading-[1.08] tracking-[-0.02em] font-bold text-[#253d4e] sm:text-[48px]">
                  {banner.title}
                </h2>

                <p className="mt-4 text-lg sm:text-[21px] text-[#6d6d6d]">{banner.subtitle}</p>

                <form className="mt-8 flex max-w-130 rounded-full bg-white p-1 shadow-[0_14px_26px_-20px_rgba(37,61,78,0.35)]">
                  <label className="flex flex-1 items-center gap-2 px-4 text-[#a3a3a3]">
                    <SendHorizontal className="h-4 w-4" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="h-11 w-full border-none bg-transparent text-sm text-[#4b5563] outline-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="h-11 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-[#2ca36b]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous banner"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/90 text-[#253d4e] shadow-sm hover:bg-white transition-colors"
      >
        <ChevronLeft className="h-5 w-5 mx-auto" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/90 text-[#253d4e] shadow-sm hover:bg-white transition-colors"
      >
        <ChevronRight className="h-5 w-5 mx-auto" />
      </button>

      <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-4 flex items-center justify-center gap-1.5">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            aria-label={`Go to banner ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex
                ? "bg-primary"
                : "border border-primary/70 bg-[#f8f1dd]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PromotionBanner;
