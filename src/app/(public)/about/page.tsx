import Breadcrumb from "@/components/shared/Breadcrumb";

const aboutSections = [
  {
    title: "Our Mission",
    detail:
      "Make safe and affordable grocery shopping simple for every family with reliable delivery and transparent pricing.",
  },
  {
    title: "What We Sell",
    detail:
      "Fresh produce, daily essentials, snacks, beverages, and personal care items from verified suppliers.",
  },
  {
    title: "Quality Standard",
    detail:
      "Every listed seller goes through quality checks so customers receive fresh and authentic products.",
  },
  {
    title: "Service Promise",
    detail:
      "Fast support, easy returns, and clear order updates from checkout to doorstep delivery.",
  },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "About Us" }]} />

      <div className="rounded-xl border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">About Us</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Oryzn is a Bangladesh-focused e-commerce platform built for dependable grocery and lifestyle shopping.
          We partner with trusted brands and local suppliers to deliver quality products at fair prices.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {aboutSections.map((section) => (
            <article key={section.title} className="rounded-xl border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{section.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{section.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
