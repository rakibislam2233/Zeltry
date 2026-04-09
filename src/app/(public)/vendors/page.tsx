import Breadcrumb from "@/components/shared/Breadcrumb";

const vendorInfo = [
  { title: "Verified Stores", detail: "Every vendor is reviewed for authenticity, stock quality, and service standards." },
  { title: "Brand Partners", detail: "Official partnerships with known FMCG and household brands." },
  { title: "Local Suppliers", detail: "Support for local farms and small businesses with direct distribution." },
  { title: "Sell on Oryzn", detail: "Join as a vendor to grow your business with nationwide customer reach." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Vendors" }]} />

      <div className="rounded-md border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Vendors</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Meet the trusted vendors behind our marketplace and learn how sellers can join Oryzn.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {vendorInfo.map((item) => (
            <article key={item.title} className="rounded-md border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{item.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
