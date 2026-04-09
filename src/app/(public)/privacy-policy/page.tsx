import Breadcrumb from "@/components/shared/Breadcrumb";

const privacyPoints = [
  { title: "Data Collection", detail: "We collect order, account, and usage data needed to process purchases." },
  { title: "Data Usage", detail: "Information is used for delivery, support, fraud prevention, and service improvement." },
  { title: "Security", detail: "Sensitive data is protected through secure storage and access control practices." },
  { title: "User Rights", detail: "You can request profile updates, data corrections, or account deletion support." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <div className="rounded-xl border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Privacy Policy</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          We value your trust and handle personal data responsibly.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {privacyPoints.map((point) => (
            <article key={point.title} className="rounded-xl border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{point.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{point.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
