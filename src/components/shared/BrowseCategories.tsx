import {
  Beef,
  Candy,
  Grape,
  Milk,
  Package,
  Shirt,
  SlidersHorizontal,
  Wheat,
} from "lucide-react";

type Category = {
  name: string;
  icon: React.ReactNode;
  count: number;
};

const categories: Category[] = [
  { name: "Milks & Dairies", icon: <Milk className="h-4 w-4" />, count: 3 },
  { name: "Clothing", icon: <Shirt className="h-4 w-4" />, count: 6 },
  { name: "Pet Foods", icon: <Package className="h-4 w-4" />, count: 4 },
  { name: "Baking material", icon: <Wheat className="h-4 w-4" />, count: 8 },
  { name: "Fresh Fruit", icon: <Grape className="h-4 w-4" />, count: 10 },
];

const newProducts = [
  { emoji: "🥬", name: "Chen Cardigan", price: "$99.50" },
  { emoji: "🍌", name: "Chen Sweater", price: "$89.50" },
  { emoji: "🧥", name: "Colorful Jacket", price: "$25" },
];

const BrowseCategories = () => {
  return (
    <aside className="w-70 shrink-0 hidden lg:flex flex-col gap-5">
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="text-[22px] font-bold text-[#253d4e]">Category</h3>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />

        <div className="mt-4 space-y-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className="w-full rounded border border-gray-200 px-3 py-2.5 flex items-center justify-between hover:border-primary/40 hover:bg-[#f7fff9] transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-sm text-[#4f5d77]">
                <span className="text-primary">{category.icon}</span>
                {category.name}
              </span>
              <span className="h-5 min-w-5 px-1.5 rounded-full bg-[#ecf7f1] text-[11px] font-semibold text-primary inline-flex items-center justify-center">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="text-[22px] font-bold text-[#253d4e]">Fill by price</h3>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />

        <div className="mt-5">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="56"
            className="w-full accent-primary"
          />
          <div className="mt-2 flex items-center justify-between text-xs text-[#7e7e7e]">
            <span>From: $500</span>
            <span>To: $1,000</span>
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
            <input type="checkbox" className="accent-primary" /> Refurbished (27)
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

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="text-[22px] font-bold text-[#253d4e]">New products</h3>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />

        <div className="mt-4 space-y-4">
          {newProducts.map((product) => (
            <article key={product.name} className="flex items-center gap-3">
              <div className="h-14 w-14 rounded bg-[#f6f6f6] border border-gray-200 flex items-center justify-center text-2xl">
                {product.emoji}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#253d4e]">{product.name}</h4>
                <p className="text-[13px] text-primary font-semibold">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BrowseCategories;
