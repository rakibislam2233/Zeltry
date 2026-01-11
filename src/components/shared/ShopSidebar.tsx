import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const ShopSidebar = () => {
  const [priceRange, setPriceRange] = useState([50, 1500]);

  return (
    <aside
      className={`w-[280px] shrink-0 hidden lg:flex flex-col gap-8 overflow-x-hidden overflow-y-auto scrollbar-hide pr-2`}
    >
      {/* Filter Button (Mobile mainly, but here for header) */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold flex items-center gap-2">
          Filters
          <span className="text-xs font-normal text-text-muted bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
            3 Active
          </span>
        </h2>
        <button className="text-sm text-primary font-medium hover:underline">
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
          Categories
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </h3>
        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2">
          {[
            { name: "Fresh Fruit", count: 134 },
            { name: "Vegetables", count: 150 },
            { name: "Cooking", count: 54 },
            { name: "Snacks", count: 47 },
            { name: "Beverages", count: 43 },
            { name: "Beauty & Health", count: 38 },
            { name: "Bread & Bakery", count: 15 },
          ].map((cat, i) => (
            <label
              key={i}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-primary checked:border-primary transition-colors"
                  />
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-sm text-text-main dark:text-gray-300 group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </div>
              <span className="text-xs text-text-muted bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {cat.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
          Price
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </h3>
        <div className="px-1">
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-text-main dark:text-white">
              Range:
            </span>
            <span className="text-sm font-bold text-primary">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

      {/* Popular Brands */}
      <div>
        <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
          Popular Brands
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </h3>
        <div className="flex flex-col gap-2">
          {[
            "Green House",
            "Organic Farms",
            "Fresh Local",
            "Eco Market",
            "Healthy Life",
          ].map((brand, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-primary checked:border-primary transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-sm text-text-main dark:text-gray-300 group-hover:text-primary transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sale Banner Small */}
      <div className="mt-4 rounded-xl overflow-hidden relative h-80 group cursor-pointer shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 p-6 flex flex-col items-center text-center w-full h-full justify-center">
          <span className="text-secondary font-bold tracking-widest text-sm mb-2">
            ORGANIC
          </span>
          <h3 className="text-white font-bold text-2xl mb-4">
            Save 17% on <br />
            Breakfast
          </h3>
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2">
            Shop Now <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
