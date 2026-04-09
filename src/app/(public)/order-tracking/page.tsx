import Breadcrumb from "@/components/shared/Breadcrumb";

const trackingFlow = [
  { step: "Order Confirmed", detail: "Your order is received and payment status is verified." },
  { step: "Packed", detail: "Seller prepares your products and performs a quality check." },
  { step: "Dispatched", detail: "Package has left the warehouse and is moving to your location." },
  { step: "Delivered", detail: "Order successfully delivered and marked complete." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Order Tracking" }]} />

      <div className="rounded-xl border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Order Tracking</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Track every order stage from confirmation to final delivery.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {trackingFlow.map((item) => (
            <article key={item.step} className="rounded-xl border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{item.step}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
