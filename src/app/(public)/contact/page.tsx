import Breadcrumb from "@/components/shared/Breadcrumb";

const contactChannels = [
  { title: "Customer Care", detail: "Call us at +880 1700-000000 (9:00 AM - 10:00 PM)." },
  { title: "Email Support", detail: "support@oryzn.com for order, payment, and account assistance." },
  { title: "Business Inquiries", detail: "partners@oryzn.com for vendor and brand collaborations." },
  { title: "Office Address", detail: "House 12, Road 7, Dhanmondi, Dhaka 1209, Bangladesh." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <div className="rounded-xl border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Contact</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Need quick help? Reach out through any channel below and our team will respond as soon as possible.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactChannels.map((channel) => (
            <article key={channel.title} className="rounded-xl border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{channel.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{channel.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
