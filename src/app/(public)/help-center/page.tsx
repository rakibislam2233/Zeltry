import Breadcrumb from "@/components/shared/Breadcrumb";

const helpTopics = [
  { title: "Order Issues", detail: "Missing items, damaged packaging, or wrong product received." },
  { title: "Payment Problems", detail: "Failed transaction, duplicate charge, or refund status questions." },
  { title: "Account Access", detail: "Password reset, login trouble, and profile update guidance." },
  { title: "Delivery Support", detail: "Address update, rider communication, and delayed shipment help." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Help Center" }]} />

      <div className="rounded-xl border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Help Center</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Browse support categories and get help for your issue quickly.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {helpTopics.map((topic) => (
            <article key={topic.title} className="rounded-xl border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{topic.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{topic.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
