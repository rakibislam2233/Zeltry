import Breadcrumb from "@/components/shared/Breadcrumb";

const blogTopics = [
  { title: "Healthy Recipes", detail: "Easy meal ideas using fresh ingredients from your weekly grocery basket." },
  { title: "Buying Guides", detail: "How to choose quality fruits, vegetables, meats, and household essentials." },
  { title: "Seasonal Deals", detail: "Monthly campaign updates and the best time to buy popular categories." },
  { title: "Customer Stories", detail: "How families save time and money using Oryzn for daily shopping." },
];

export default function Page() {
  return (
    <section className="w-full">
      <Breadcrumb items={[{ label: "Blog" }]} />

      <div className="rounded-md border border-[#e6ebf1] bg-white p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#253d4e]">Blog</h1>
        <p className="mt-3 max-w-3xl text-[#6b7280] leading-relaxed">
          Discover practical shopping tips, nutrition ideas, and updates from our team.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {blogTopics.map((topic) => (
            <article key={topic.title} className="rounded-md border border-[#e9eef4] bg-[#f8fafc] p-4">
              <h2 className="text-base font-semibold text-[#253d4e]">{topic.title}</h2>
              <p className="mt-1 text-sm text-[#6b7280]">{topic.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
