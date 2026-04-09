import Breadcrumb from "@/components/shared/Breadcrumb";

const termSections = [
  { title: "Account Responsibility", detail: "Users must provide accurate details and keep login credentials secure." },
  { title: "Orders and Pricing", detail: "Prices and availability may change; confirmed orders follow active terms." },
  { title: "Returns and Refunds", detail: "Refund eligibility depends on return policy and product condition checks." },
  { title: "Prohibited Use", detail: "Fraudulent activity, abuse, or policy violations may lead to account suspension." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

      <div className="rounded-xl border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Terms and Conditions</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          These terms define how customers and sellers should use Oryzn services responsibly.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {termSections.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{item.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
