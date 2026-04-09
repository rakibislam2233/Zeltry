import {
    BadgeCheck,
    BadgePercent,
    HandCoins,
    LayoutGrid,
    PackageCheck,
} from "lucide-react";

type HighlightItem = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const highlights: HighlightItem[] = [
  {
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
    icon: <BadgePercent className="h-6 w-6 text-primary" />,
  },
  {
    title: "Free delivery",
    subtitle: "24/7 amazing services",
    icon: <PackageCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Great daily deal",
    subtitle: "When you sign up",
    icon: <HandCoins className="h-6 w-6 text-primary" />,
  },
  {
    title: "Wide assortment",
    subtitle: "Mega Discounts",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />,
  },
  {
    title: "Easy returns",
    subtitle: "Within 30 days",
    icon: <BadgeCheck className="h-6 w-6 text-primary" />,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
      {highlights.map((item) => (
        <article
          key={item.title}
          className="flex items-center gap-3 rounded-lg border border-[#e8edf2] bg-[#f7f9fb] px-4 py-3"
        >
          <div className="shrink-0 rounded-md bg-[#edf8f2] p-2">{item.icon}</div>
          <div>
            <h3 className="text-sm font-semibold text-[#253d4e] leading-tight">
              {item.title}
            </h3>
            <p className="mt-0.5 text-xs text-[#8b96a5]">{item.subtitle}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ServiceHighlights;
