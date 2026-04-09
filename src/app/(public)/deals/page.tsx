import Breadcrumb from "@/components/shared/Breadcrumb";

const dealTypes = [
  { title: "Flash Deals", detail: "Limited-time discounts on top-selling grocery and household products." },
  { title: "Bundle Savings", detail: "Save more when you buy related products together in a single pack." },
  { title: "Weekly Offers", detail: "Special category discounts updated every week for regular shoppers." },
  { title: "Member Benefits", detail: "Extra value for returning customers through loyalty campaigns." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Deals" }]} />

      <div className="rounded-md border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Deals</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Explore active promotions and discounted collections curated for budget-friendly shopping.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dealTypes.map((deal) => (
            <article key={deal.title} className="rounded-md border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{deal.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{deal.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
