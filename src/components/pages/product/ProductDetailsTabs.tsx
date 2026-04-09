"use client";

import { useState } from "react";

type TabKey = "description" | "additional" | "reviews";

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  return (
    <section className="mt-10 rounded-xl border border-[#e6ebf1] bg-white p-6">
      <div className="mb-6 flex flex-wrap items-center gap-6 border-b border-[#ebeff4]">
        <button
          type="button"
          onClick={() => setActiveTab("description")}
          className={`pb-3 font-semibold transition-colors ${
            activeTab === "description"
              ? "border-b-2 border-primary text-primary"
              : "text-[#7b8897] hover:text-[#253d4e]"
          }`}
        >
          Description
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("additional")}
          className={`pb-3 font-semibold transition-colors ${
            activeTab === "additional"
              ? "border-b-2 border-primary text-primary"
              : "text-[#7b8897] hover:text-[#253d4e]"
          }`}
        >
          Additional info
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 font-semibold transition-colors ${
            activeTab === "reviews"
              ? "border-b-2 border-primary text-primary"
              : "text-[#7b8897] hover:text-[#253d4e]"
          }`}
        >
          Reviews (3)
        </button>
      </div>

      {activeTab === "description" && (
        <div className="space-y-4 text-sm leading-relaxed text-[#6b7280] md:text-base">
          <p>
            Uninhibitedly disintermediate discovered and paid was markedly one-eyed outside because hey much over on forthcoming and greedily one plain.
          </p>
          <p>
            Robustly less and less this blared to left grimly much hello so apart and over came this and in camel much around much under far credibly.
          </p>

          <h3 className="pt-3 text-lg font-semibold text-[#253d4e]">Packaging & Delivery</h3>
          <p>
            Freshly packed in food-grade pouches. Dispatch usually happens within 24 hours, and delivery takes 2-5 business days based on location.
          </p>

          <h3 className="pt-3 text-lg font-semibold text-[#253d4e]">Suggested Use</h3>
          <p>Refrigerate after opening. Brew before serving naturally and enjoy.</p>

          <h3 className="pt-3 text-lg font-semibold text-[#253d4e]">Warnings</h3>
          <p>Oil separation can naturally occur. This can be fixed by stirring. Keep out of direct sunlight.</p>
        </div>
      )}

      {activeTab === "additional" && (
        <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
          <p className="text-[#728294]">Type: <span className="font-medium text-[#253d4e]">Organic</span></p>
          <p className="text-[#728294]">MFG: <span className="font-medium text-[#253d4e]">Jun 4.2022</span></p>
          <p className="text-[#728294]">Life: <span className="font-medium text-[#253d4e]">70 days</span></p>
          <p className="text-[#728294]">SKU: <span className="font-medium text-[#253d4e]">FGM-55688</span></p>
          <p className="text-[#728294]">Weight: <span className="font-medium text-[#253d4e]">200g</span></p>
          <p className="text-[#728294]">Storage: <span className="font-medium text-[#253d4e]">Cool & dry place</span></p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="space-y-4">
          <article className="rounded-xl border border-[#e8edf2] p-4">
            <p className="text-sm font-semibold text-[#253d4e]">Sadia Rahman</p>
            <p className="mt-1 text-xs text-[#8a95a3]">Rated 5.0 • 2 days ago</p>
            <p className="mt-2 text-sm text-[#6b7280]">Very fresh product and great packaging. Delivery was quick and quality is excellent.</p>
          </article>
          <article className="rounded-xl border border-[#e8edf2] p-4">
            <p className="text-sm font-semibold text-[#253d4e]">Aminul Islam</p>
            <p className="mt-1 text-xs text-[#8a95a3]">Rated 4.0 • 1 week ago</p>
            <p className="mt-2 text-sm text-[#6b7280]">Taste and quality both are good. Price is a bit high but still worth it.</p>
          </article>
          <article className="rounded-xl border border-[#e8edf2] p-4">
            <p className="text-sm font-semibold text-[#253d4e]">Nabila Tasnim</p>
            <p className="mt-1 text-xs text-[#8a95a3]">Rated 4.5 • 2 weeks ago</p>
            <p className="mt-2 text-sm text-[#6b7280]">Good product details and easy to choose options. Will order again.</p>
          </article>
        </div>
      )}
    </section>
  );
};

export default ProductDetailsTabs;
