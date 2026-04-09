import Breadcrumb from "@/components/shared/Breadcrumb";

const faqs = [
  { question: "How long does delivery take?", answer: "Most orders inside Dhaka are delivered within the same day or next day." },
  { question: "Can I cancel an order?", answer: "Yes, you can cancel before dispatch from your order history page." },
  { question: "What payment methods are accepted?", answer: "Cash on delivery, cards, and supported mobile financial services." },
  { question: "How do returns work?", answer: "Report issues within the return window and our support team will guide you." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <div className="rounded-md border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Frequently Asked Questions</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Quick answers to the questions customers ask us most often.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-md border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{item.question}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
