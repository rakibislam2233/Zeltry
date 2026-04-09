'use client'
import { Slider } from "@/components/ui/slider";
import { categories } from "@/data/home/categories";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const newProducts = [
  { emoji: "🥬", name: "Chen Cardigan", price: "$99.50" },
  { emoji: "🍌", name: "Chen Sweater", price: "$89.50" },
  { emoji: "🧥", name: "Colorful Jacket", price: "$25" },
];

const BrowseCategories = () => {
  const [priceRange, setPriceRange] = useState([750]);

  return (
    <aside className="w-70 shrink-0 hidden lg:flex flex-col gap-4">
      <div className="rounded-md border border-[#e6ecf2] bg-white p-4 shadow-sm">
        <h3 className="text-[22px] font-bold text-[#253d4e]">
          Browse Categories
        </h3>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />

        <div className="mt-4 space-y-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className="w-full rounded-md border border-[#e4e9ef] px-3 py-2.5 flex items-center gap-3 text-left transition-colors hover:border-primary/40 hover:bg-[#f7fff9]"
            >
              <div className="h-11 w-11 shrink-0 rounded-md border border-[#edf1f5] bg-white p-1.5 flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="min-w-0 flex-1 text-sm font-medium text-[#4f5d77] leading-tight">
                {category.name}
              </span>

              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ecf7f1] px-2 text-[11px] font-semibold text-primary">
                {String(category.id).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-md border border-[#e6ecf2] bg-white p-4 shadow-sm">
        <h3 className="text-[22px] font-bold text-[#253d4e]">Fill by price</h3>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />

        <div className="mt-5 space-y-3">
          <Slider
            value={priceRange}
            min={500}
            max={1000}
            step={10}
            onValueChange={setPriceRange}
          />
          <div className="flex items-center justify-between text-xs text-[#7e7e7e]">
            <span>From: $500</span>
            <span>To: ${priceRange[0].toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm text-[#687188]">
          <p className="font-semibold text-[#253d4e]">Color</p>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" /> Red (56)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" /> Green (78)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" /> Blue (54)
          </label>

          <p className="pt-2 font-semibold text-[#253d4e]">Item Condition</p>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" /> New (1506)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" /> Refurbished
            (27)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" /> Used (45)
          </label>
        </div>

        <button
          type="button"
          className="mt-5 h-9 px-4 rounded-md bg-primary text-white text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#2ca36b] transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="rounded-md border border-[#e6ecf2] bg-white p-4 shadow-sm">
        <h3 className="text-[22px] font-bold text-[#253d4e]">New products</h3>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />

        <div className="mt-4 space-y-4">
          {newProducts.map((product) => (
            <article
              key={product.name}
              className="flex items-center gap-3 rounded-md border border-[#eef2f6] p-2 hover:bg-[#fafcfe] transition-colors"
            >
              <div className="h-14 w-14 rounded-md bg-[#f6f6f6] border border-gray-200 flex items-center justify-center text-2xl">
                {product.emoji}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#253d4e]">
                  {product.name}
                </h4>
                <p className="text-[13px] text-primary font-semibold">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BrowseCategories;
