"use client";

import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const products: Product[] = [
  {
    id: "1",
    category: "Vegetables",
    name: "Fresh Organic Avocado Hass (Kg)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr",
    rating: 4.5,
    price: 6.75,
    originalPrice: 8.99,
    badge: { text: "-25%", colorClass: "bg-red-500" },
  },
  {
    id: "2",
    category: "Vegetables",
    name: "Organic Red Tomatoes (500g Pack)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3wItrBNG9WQNDg8l-g9OvRuz8-32QB2o01TcZaygzgvcm14S0SaPUx3UIqnzE1WRo3FCV-MoAFqzUHkQezakuvyXtCgf7aY6mJVMijokZFfS3Xiy3C2UgPJ8q-ELa07bvl4EFumkEx8DGWsLbYji5IsL5nUBHjLMBWAJfEQ9Cvyw9oZZicaLW1aVql0PoOPV6vpyxKcXkN2bwKht2vL2SyCGrC-_pS0dI_UR1ZCnNbE0326U1Xb_Qnxqdli-G5WTUjy9Ur4O75bM0",
    rating: 4.0,
    price: 3.5,
    badge: { text: "NEW", colorClass: "bg-primary" },
  },
  {
    id: "3",
    category: "Beverages",
    name: "Almond Milk Unsweetened 1L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj009NW9elke52BluwooeRjFWALNFUS4rLdpcm7z_T5Sb_LtoEx3F_VV8vJNAgCx0qnxC8M9RTBh2Ar32yHoPUQLp356G0y5cGEEx0HX-buj0BTkC93frdjO_5gpmUj5bJfNPcO8tc1fyPxlM18NF3jpQJauCCgDpfg8m0CJTIQuYDB_Rj4Le-1w0H0i8F-izrMcqw3b-DdRs_n-ogp3wd7luVelDtN3Y18I0sEsAnQPY1EBcpY5E43AsZ7nrsMYBgbnyEZjX1Cu7i",
    rating: 5.0,
    price: 4.99,
    originalPrice: 5.5,
  },
  {
    id: "4",
    category: "Dairy & Eggs",
    name: "Farm Fresh White Eggs (Dozen)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOsMPBJmBXVyjxBaQUMtK433I17BGabH0bPRHLsvlxFDZjAvzKm-3oYcbFz58uJY_cSCxsyiXXmX3ErKEl92dPtnqxfI2VgeG_z0W2uerIC-GqdVqijVz7fXrJw3aHHWlTOWBAYbUWjkDZBHythO-fwNycMXxuPkYk7vx5qRT6IBjIsqZ5qUmA-xvFjpqqkKVgfjUUoHisnQvX5hfFOOzjqR94P1Ezr9Ymz3Fzi02XlLPHtymW39MOwXVpo2K_bD1VzXDNRAECOfQs",
    rating: 3.8,
    price: 3.6,
    originalPrice: 4.0,
    badge: { text: "-10%", colorClass: "bg-orange-500" },
  },
  {
    id: "9",
    category: "Snacks",
    name: "Veggie Pops SuperSnack Sweet & Salty",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop",
    rating: 4.0,
    price: 4.85,
    originalPrice: 5.28,
    badge: { text: "NEW", colorClass: "bg-primary" },
  },
  {
    id: "10",
    category: "Vegetables",
    name: "Foster Farms Takeout Crispy Classic",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    rating: 4.0,
    price: 17.85,
    originalPrice: 19.8,
  },
  {
    id: "11",
    category: "Pet Foods",
    name: "Blue Diamond Almonds Lightly",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
    rating: 4.0,
    price: 23.85,
    originalPrice: 26.0,
    badge: { text: "-14%", colorClass: "bg-orange-500" },
  },
  {
    id: "12",
    category: "Coffee",
    name: "Gorton's Beer Battered Fish Fillets",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    rating: 4.0,
    price: 23.85,
    originalPrice: 25.8,
    badge: { text: "HOT", colorClass: "bg-pink-500" },
  },
  {
    id: "13",
    category: "Cream",
    name: "Haagen-Dazs Caramel Cone Ice Cream",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
    rating: 2.0,
    price: 22.85,
    originalPrice: 24.8,
  },
  {
    id: "14",
    category: "Meats",
    name: "Canada Dry Ginger Ale - 2L Bottle",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    rating: 4.0,
    price: 32.85,
    originalPrice: 35.8,
    badge: { text: "SALE", colorClass: "bg-sky-500" },
  },
];

const TodayHotSale: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slidePrevious = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth * 0.85, behavior: "smooth" });
  };

  const slideNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth * 0.85, behavior: "smooth" });
  };

  const tabs = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <h2 className="text-xl md:text-[34px] font-bold tracking-tight text-[#253d4e]">
            Popular Products
          </h2>
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />

        </div>

        <div className="hidden xl:flex items-center gap-4 text-[13px] text-[#5d6d7a]">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab}
              className={`transition-colors hover:text-primary ${
                index === 0 ? "text-primary font-semibold" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            type="button"
            onClick={slidePrevious}
            aria-label="Previous products"
            className="h-9 w-9 rounded-full border border-[#dce3ea] bg-white text-[#5d6d7a] hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mx-auto" />
          </button>
          <button
            type="button"
            onClick={slideNext}
            aria-label="Next products"
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
        {products.map((product) => (
          <div
            key={product.id}
            className="shrink-0 basis-5/6 sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-3rem)/4)] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodayHotSale;
