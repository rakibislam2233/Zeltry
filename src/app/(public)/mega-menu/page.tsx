import Breadcrumb from "@/components/shared/Breadcrumb";

const menuGroups = [
  { title: "Fresh Market", detail: "Vegetables, fruits, fish, meat, and dairy for daily cooking." },
  { title: "Pantry Essentials", detail: "Rice, oil, spices, lentils, noodles, and breakfast staples." },
  { title: "Snacks and Drinks", detail: "Biscuits, chips, juices, soft drinks, and tea or coffee options." },
  { title: "Home and Care", detail: "Cleaning items, tissue, toiletries, and household consumables." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Mega Menu" }]} />

      <div className="rounded-md border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Mega Menu</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Browse product departments quickly and jump into the category you need most.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {menuGroups.map((group) => (
            <article key={group.title} className="rounded-md border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{group.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{group.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
